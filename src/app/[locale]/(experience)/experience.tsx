import Works from "./list/works";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslate,
} from "@/locales/utils";
import OnlyAdmin from "@/components/auth/onlyAdmin";
import pick from "lodash/pick";
import WorkCrud from "./workCrud";

export default function Experience() {
  const t = useTranslate("experience");
  const messages = useMessages();

  return (
    <div
      id="#experience"
      className="pointer-events-none flex min-h-screen flex-col items-center justify-center gap-4"
    >
      <h2 className="max-w-min bg-opacity-background text-center text-3xl backdrop-blur-[1px]">
        {t("title")}
      </h2>
      <Suspense fallback={<Skeleton className="h-[56px] w-full" />}>
        <Works />
      </Suspense>
      <OnlyAdmin>
        <NextIntlClientProvider
          messages={pick(messages, "toast", "experience")}
        >
          <WorkCrud />
        </NextIntlClientProvider>
      </OnlyAdmin>
    </div>
  );
}
