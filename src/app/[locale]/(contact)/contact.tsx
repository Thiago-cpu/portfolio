import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "./contactForm";
import {
  useMessages,
  useTranslate,
  NextIntlClientProvider,
} from "@/locales/utils";
import pick from "lodash/pick";

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
      <Card className="bg-opacity-background">
        <CardContent className="pt-6">
          <NextIntlClientProvider
            messages={pick(messages, "contact.form", "errors", "toast")}
          >
            <ContactForm />
          </NextIntlClientProvider>
        </CardContent>
      </Card>
    </div>
  );
}
