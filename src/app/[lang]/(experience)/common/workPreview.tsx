import { Accordion } from "@/components/ui/accordion";
import { PreviewPortal } from "@/components/ui/sheet";
import { useFormContext } from "react-hook-form";
import { type TFormSchema } from "../create/createWorkForm";
import { useCurrentLocale } from "@/locales/client";
import { type Works } from "../store/workStore";
import { useEffect, useState } from "react";
import { WorkItemPreview } from "./workItemPreview";
import { type RecursivePartial } from "@/lib/types";
import { getNestedValue } from "@/lib/utils";

const allowOpenOn = [
  "location",
  "page.label",
  "technologies.0.technology.name",
  "text_en",
  "text_es",
  "logo",
] as const;

const transformFormToWorkItemPreview = ({
  form,
  locale,
}: {
  form?: RecursivePartial<TFormSchema>;
  locale: "en" | "es";
}): RecursivePartial<Works[number]> => {
  if (!form) return {};
  return {
    ...form,
    technologies: form.technologies?.map((p) => ({
      technology: {
        name: p?.name,
      },
    })),
    text: (locale === "en" ? form.text_en : form.text_es) ?? "",
  };
};

export default function WorkPreview() {
  const locale = useCurrentLocale();
  const { watch, formState } = useFormContext<TFormSchema>();
  const [workToCreate, setWork] = useState<RecursivePartial<Works[number]>>(
    transformFormToWorkItemPreview({ form: formState.defaultValues, locale }),
  );

  useEffect(() => {
    const subscription = watch((value) => {
      setWork(transformFormToWorkItemPreview({ form: value, locale }));
    });
    return () => subscription.unsubscribe();
  }, [watch, locale]);

  const open = allowOpenOn.some((name) =>
    Boolean(getNestedValue(workToCreate, name)),
  );

  return (
    <PreviewPortal>
      <Accordion
        value={open ? "preview-1" : ""}
        type="single"
        collapsible
        className="w-full max-w-2xl bg-opacity-background"
      >
        <WorkItemPreview value="preview-1" work={workToCreate} />
      </Accordion>
    </PreviewPortal>
  );
}
