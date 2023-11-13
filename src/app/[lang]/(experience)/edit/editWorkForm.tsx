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
import { ArrayInput } from "@/components/ui/array-input";
import { useUpdateWork } from "./useUpdateWork";
import { useWorkStore } from "../store/workStore";
import { type z } from "zod";
import { UpdateWorkSchema } from "@/validations/workValidation";

interface UpdateWorkFormProps {
  onSuccess?: () => void;
}

const formSchema = UpdateWorkSchema;
type TFormSchema = z.infer<typeof formSchema>;

export function EditWorkForm({ onSuccess }: UpdateWorkFormProps) {
  const t = useScopedI18n("experience.update");
  const { mutate, isLoading } = useUpdateWork({ onSuccess });
  const workToEdit = useWorkStore((state) => state.workToEdit);
  // if (!workToEdit) throw new Error("cant update without work to edit");

  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...workToEdit,
      technologies: workToEdit?.technologies?.map((t) => t.technology),
    },
  });

  function onSubmit(values: TFormSchema) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-wrap gap-2"
      >
        <FormField
          control={form.control}
          name="title"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="grow">
              <FormLabel>{t("fields.title.label")}</FormLabel>
              <FormControl>
                <Input placeholder={t("fields.title.placeholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="range"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="w-full md:max-w-[8rem]">
              <FormLabel>{t("fields.range.label")}</FormLabel>
              <FormControl>
                <Input placeholder={t("fields.range.placeholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="min-w-[50%] grow">
              <FormLabel>{t("fields.location.label")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("fields.location.placeholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="page.label"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="grow">
              <FormLabel>{t("fields.page.label.label")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("fields.page.label.placeholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="page.href"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="w-full grow">
              <FormLabel>{t("fields.page.href.label")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("fields.page.href.placeholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="logo"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="w-full grow">
              <FormLabel>{t("fields.logo.label")}</FormLabel>
              <FormControl>
                <Input placeholder={t("fields.logo.placeholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="text_en"
          render={({ field }) => (
            <FormItem className="grow">
              <FormLabel>{t("fields.text_en.label")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("fields.text_en.placeholder")}
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
        <FormField
          disabled={isLoading}
          control={form.control}
          name="text_es"
          render={({ field }) => (
            <FormItem className="w-full grow">
              <FormLabel>{t("fields.text_es.label")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("fields.text_es.placeholder")}
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
        <FormField
          disabled={isLoading}
          control={form.control}
          name="technologies"
          render={({ field }) => (
            <FormItem className="w-full grow">
              <FormLabel>{t("fields.technologies.label")}</FormLabel>
              <FormControl>
                <ArrayInput
                  placeholder={t("fields.technologies.placeholder")}
                  {...field}
                  onChange={(values) =>
                    field.onChange(
                      values.map((value) => ({
                        name: value,
                      })),
                    )
                  }
                  value={field.value.map(({ name }) => name)}
                  className="max-h-96"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex grow items-center justify-between gap-3">
          <Button
            type="submit"
            disabled={isLoading}
            className="ml-auto w-full md:max-w-[160px]"
          >
            {t("submit")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
