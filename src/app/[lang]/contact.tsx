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
    <div className="pointer-events-none flex min-h-screen flex-col justify-center ">
      <Card className="bg-opacity-background">
        <CardHeader>
          <h2 className="text-center font-mono text-xl uppercase">
            {t("title")}
          </h2>
          <CardDescription className="text-balanced text-center">
            {t("description")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
}
