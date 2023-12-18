import {
  useMessages,
  useTranslate,
  NextIntlClientProvider,
} from "@/locales/utils";
import pick from "lodash/pick";
import ContactCard from "./contactCard";

export function Contact() {
  const t = useTranslate("contact");
  const messages = useMessages();
  return (
    <div
      id="#contact"
      className="pointer-events-none flex min-h-screen flex-col justify-center"
    >
      <div className="mb-3 flex flex-col items-center gap-3">
        <h2 className="bg-opacity-background text-center text-3xl backdrop-blur-[1px]">
          {t("title")}
        </h2>
        <p className="bg-opacity-background text-center">{t("description")}</p>
      </div>
      <NextIntlClientProvider
        messages={pick(messages, "contact.form", "errors", "toast")}
      >
        <ContactCard />
      </NextIntlClientProvider>
    </div>
  );
}
