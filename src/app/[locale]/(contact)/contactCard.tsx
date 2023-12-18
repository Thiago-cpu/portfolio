"use client";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("./contactForm"));

export default function ContactCard() {
  return (
    <Card className="bg-opacity-background">
      <CardContent className="pt-6">
        <ContactForm />
      </CardContent>
    </Card>
  );
}
