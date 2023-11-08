"use client";

import { insertContactSchema } from "@/server/db/schema/contacts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
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

const formSchema = insertContactSchema.pick({
  name: true,
  email: true,
  message: true,
});

export function ContactForm() {
  const { toast } = useToast();
  const translateToast = useScopedI18n("toast");
  const t = useScopedI18n("contact.form");
  const { mutate, isLoading } = api.contact.create.useMutation({
    onSettled: (success, error, values) => {
      const tryAgain = () => mutate(values);
      if (success) {
        toast({
          title: t("toast.title"),
          description: t("toast.description"),
        });
      } else {
        toast({
          variant: "destructive",
          title: translateToast("error.title"),
          description: translateToast("error.description"),
          action: (
            <ToastAction
              onClick={tryAgain}
              altText={translateToast("tryAgain")}
            >
              {translateToast("tryAgain")}
            </ToastAction>
          ),
        });
      }
    },
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <Button type="submit" disabled={isLoading}>
          {t("submit")}
        </Button>
      </form>
    </Form>
  );
}
