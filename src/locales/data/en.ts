export default {
  links: {
    home: "Home",
    contact: "Contact",
    experience: "Experience",
  },
  home: {
    name: "Thiago Valdiviezo",
    description: "Front end & back end developer.",
  },
  contact: {
    title: "Contact",
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
  experience: {
    title: "Professional Experience",
    create: {
      ["add-button"]: "Add new one",
      title: "Add new professional experience",
      description: "You can also see a Preview.\nClick save when you're done.",
      toast: {
        title: "Success",
        description: "Your work has been added successfully.",
      },
      fields: {
        title: {
          label: "Title",
          placeholder: "Enter a title",
        },
        range: {
          label: "Range",
          placeholder: "Enter work period",
        },
        location: {
          label: "Location",
          placeholder: "Enter location",
        },
        page: {
          label: {
            label: "Company name",
            placeholder: "Enter company name",
          },
          href: {
            label: "Company page",
            placeholder: "Enter company page URL",
          },
        },
        logo: {
          label: "Company logo",
          placeholder: "Enter company logo URL",
        },
        text_en: {
          label: "English description",
          placeholder: "Description",
        },
        text_es: {
          label: "Spanish description",
          placeholder: "Description",
        },
        technologies: {
          label: "Technologies",
          placeholder: "Add the technologies you work with",
        },
      },
      submit: "Submit",
    },
    update: {
      title: "Update professional experience",
      description: "You can also see a Preview.\nClick save when you're done.",
      toast: {
        title: "Success",
        description: "Your work has been updated successfully.",
      },
      fields: {
        title: {
          label: "Title",
          placeholder: "Enter a title",
        },
        range: {
          label: "Range",
          placeholder: "Enter work period",
        },
        location: {
          label: "Location",
          placeholder: "Enter location",
        },
        page: {
          label: {
            label: "Company name",
            placeholder: "Enter company name",
          },
          href: {
            label: "Company page",
            placeholder: "Enter company page URL",
          },
        },
        logo: {
          label: "Company logo",
          placeholder: "Enter company logo URL",
        },
        text_en: {
          label: "English description",
          placeholder: "Description",
        },
        text_es: {
          label: "Spanish description",
          placeholder: "Description",
        },
        technologies: {
          label: "Technologies",
          placeholder: "Add the technologies you work with",
        },
      },
      submit: "Submit",
    },
    delete: {
      toast: {
        title: "Success",
        description: "Your work experience has been deleted successfully.",
      },
      confirm: {
        title: "Are you sure absolutely sure?",
        description: {
          1: "This action cannot be undone.",
          2: "This will permanently delete your work experience from our servers.",
        },
        submit: "Confirm",
      },
    },
  },
  logout: "Sign out",
} as const;
