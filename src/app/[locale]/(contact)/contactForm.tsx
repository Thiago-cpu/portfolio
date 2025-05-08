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
import type { z } from "zod";
import { zodResolver } from "@/lib/zodResolver";
import Image from "next/image";
import MonkeytypeLogo from "@/../public/img/logos/monkeytype.svg";

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
        className="flex flex-col space-y-4"
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
          <Link
            aria-label="Go to my Monkeytype Profile"
            href="https://monkeytype.com/profile/Terj4N"
            target="_blank"
            className="pointer-events-auto"
            tabIndex={-1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M20 14.4a.8.8 0 1 1 0 1.6a.8.8 0 0 1 0-1.6Zm-11.2 0h4.8a.8.8 0 1 1 0 1.6H8.8a.8.8 0 1 1 0-1.6ZM7.2 9.6a.8.8 0 0 1 .8.8V12a.8.8 0 1 1-1.6 0v-1.6a.8.8 0 0 1 .8-.8Zm-3.999.759A2.4 2.4 0 0 1 7.2 8.612a2.4 2.4 0 0 1 4 1.788V12a.8.8 0 1 1-1.6 0v-1.6a.8.8 0 1 0-1.6 0V12a.8.8 0 1 1-1.6 0v-1.6a.8.8 0 1 0-1.6 0V12a.8.8 0 1 1-1.6 0v-1.6l.001-.041ZM17.6 12.8v2.4a.8.8 0 1 1-1.6 0v-2.4h-2.306c-.493 0-.894-.358-.894-.8c0-.442.401-.8.894-.8h6.212c.493 0 .894.358.894.8c0 .442-.401.8-.894.8H17.6ZM16.8 8H20a.8.8 0 1 1 0 1.6h-3.2a.8.8 0 1 1 0-1.6ZM4 14.4h1.6a.8.8 0 1 1 0 1.6H4a.8.8 0 1 1 0-1.6ZM13.2 8h.4a.8.8 0 1 1 0 1.6h-.4a.8.8 0 1 1 0-1.6ZM1.6 14.4H0V8.8c0-2.208 1.792-4 4-4h16c2.208 0 4 1.792 4 4v6.4c0 2.208-1.792 4-4 4H4c-2.208 0-4-1.792-4-4v-1.6h1.6v1.6A2.4 2.4 0 0 0 4 17.6h16a2.4 2.4 0 0 0 2.4-2.4V8.8A2.4 2.4 0 0 0 20 6.4H4a2.4 2.4 0 0 0-2.4 2.4v5.6Z"
              />
            </svg>
          </Link>
          <a
            aria-label="Send me an email"
            href="mailto:thiagovaldiviezogc@gmail.com"
            target="_top"
            className="pointer-events-auto"
            tabIndex={-1}
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
