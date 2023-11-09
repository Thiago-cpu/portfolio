import {
  CardHeader,
  Card,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ContactForm } from "./contactForm";
import { getScopedI18n } from "@/locales/server";

export async function Contact() {
  const t = await getScopedI18n("contact");

  return (
    <div
      id="contact"
      className="pointer-events-none flex min-h-screen flex-col justify-center "
    >
      <CardHeader>
        <h2 className="text-center font-mono text-xl uppercase">
          {t("title")}
        </h2>
        <CardDescription className="text-balanced text-center">
          {t("description")}
        </CardDescription>
      </CardHeader>
      <Card className="bg-opacity-background">
        <CardContent className="pt-6">
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
}
