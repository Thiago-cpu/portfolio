import { type ContactRouterCreateSchema } from "@/server/api/routers/contact";
import * as React from "react";
import { type z } from "zod";

type ContactTemplateProps = z.infer<typeof ContactRouterCreateSchema>;

export const ContactTemplate: React.FC<Readonly<ContactTemplateProps>> = ({
  email,
  name,
  message,
}) => (
  <div>
    <h1>New contact!</h1>
    <p>Email: {email}</p>
    <p>Name: {name}</p>
    {message ? <p>message: {message}</p> : null}
  </div>
);
