export default {
  links: {
    home: "Home",
    contact: "Contact",
  },
  home: {
    name: "Thiago Valdiviezo",
    description: "Front end & back end developer.",
  },
  contact: {
    title: "contact",
    description:
      "Feel free to Contact me by submitting the form below or using social media",
    form: {
      fields: {
        name: {
          label: "Name",
          placeholder: "Enter your name",
        },
        email: {
          label: "Email",
          placeholder: "Enter your email",
        },
        message: {
          label: "Message",
          placeholder: "Enter your message",
        },
      },
      toast: {
        title: "Message Sent Successfully",
        description: "Thank you for reaching out to me, see you soon!",
      },
      submit: "Submit",
    },
  },
  toast: {
    error: {
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    },
    tryAgain: "Try again",
  },
} as const;
