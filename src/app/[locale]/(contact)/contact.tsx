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
        <h2 className="text-center text-3xl backdrop-blur-[0.5px]">
          {t("title")}
        </h2>
        <p className="text-center">{t("description")}</p>
      </div>
      <NextIntlClientProvider
        messages={pick(messages, "contact.form", "errors", "toast")}
      >
        <ContactCard />
      </NextIntlClientProvider>
    </div>
  );
}
