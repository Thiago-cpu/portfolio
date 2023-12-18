"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslate } from "@/locales/utils";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/trpc/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { CreateContactSchema } from "@/validations/contactValidation";
import { type z } from "zod";
import { zodResolver } from "@/lib/zodResolver";

const formSchema = CreateContactSchema;
type TFormSchema = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const translateToast = useTranslate("toast");
  const t = useTranslate("contact.form");
  const { mutate, isLoading } = api.contact.create.useMutation({
    onSuccess: () => {
      toast({
        title: t("toast.title"),
        description: t("toast.description"),
      });
    },
    onError: (_err, values) => {
      const tryAgain = () => mutate(values);
      toast({
        variant: "destructive",
        title: translateToast("error.title"),
        description: translateToast("error.description"),
        action: (
          <ToastAction onClick={tryAgain} altText={translateToast("tryAgain")}>
            {translateToast("tryAgain")}
          </ToastAction>
        ),
      });
    },
  });
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: TFormSchema) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("fields.name.label")}</FormLabel>
              <FormControl>
                <Input placeholder={t("fields.name.placeholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("fields.email.label")}</FormLabel>
              <FormControl>
                <Input placeholder={t("fields.email.placeholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("fields.message.label")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("fields.message.placeholder")}
                  {...field}
                  value={field.value ?? ""}
                  cols={25}
                  rows={6}
                  className="max-h-96"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between gap-3">
          <Link
            aria-label="Go to my Github"
            href="https://github.com/Thiago-cpu"
            target="_blank"
            className="pointer-events-auto"
            tabIndex={-1}
          >
            <GitHubLogoIcon width={34} height={34} />
          </Link>
          <Link
            aria-label="Go to my Linkedin"
            href="https://www.linkedin.com/in/thiago-valdiviezo/"
            target="_blank"
            className="pointer-events-auto"
            tabIndex={-1}
          >
            <LinkedInLogoIcon width={34} height={34} />
          </Link>
          <a
            aria-label="Send me an email"
            href="mailto:thiagovaldiviezogc@gmail.com"
            target="_top"
            className="pointer-events-auto"
          >
            <EnvelopeClosedIcon width={34} height={34} />
          </a>
          <Button type="submit" disabled={isLoading} className="ml-auto">
            {t("submit")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
