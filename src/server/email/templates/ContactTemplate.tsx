import * as React from "react";
import { type RouterInputs } from "../../../trpc/shared";

type ContactTemplateProps = RouterInputs["contact"]["create"];

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
