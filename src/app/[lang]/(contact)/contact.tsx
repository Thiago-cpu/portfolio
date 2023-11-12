import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "./contactForm";
import { getScopedI18n } from "@/locales/server";

export async function Contact() {
  const t = await getScopedI18n("contact");
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
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
}
