"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useScopedI18n } from "@/locales/client";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/trpc/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { CreateContactSchema } from "@/validations/contactValidation";
import { type RouterInputs } from "@/trpc/shared";

export function ContactForm() {
  const { toast } = useToast();
  const translateToast = useScopedI18n("toast");
  const t = useScopedI18n("contact.form");
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
  const form = useForm<RouterInputs["contact"]["create"]>({
    resolver: zodResolver(CreateContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: RouterInputs["contact"]["create"]) {
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
            href="https://github.com/Thiago-cpu"
            target="_blank"
            className="pointer-events-auto"
          >
            <GitHubLogoIcon width={34} height={34} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/thiago-valdiviezo/"
            target="_blank"
            className="pointer-events-auto"
          >
            <LinkedInLogoIcon width={34} height={34} />
          </Link>
          {/* <a
            href="mailto:thifran789456323@gmail.com"
            target="_top"
            className="pointer-events-auto"
          >
            <EnvelopeClosedIcon width={34} height={34} />
          </a> */}
          <Button type="submit" disabled={isLoading} className="ml-auto">
            {t("submit")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
