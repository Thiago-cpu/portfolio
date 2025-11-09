export default {
  links: {
    home: "Home",
    contact: "Contact",
    experience: "Experience",
    project: "Projects",
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
  project: {
    title: "Projects",
    cta: {
      visit: "Open project",
    },
    carousel: {
      prev: "Previous project",
      next: "Next project",
    },
    items: {
      // artmedia: {
      //   title: "Centro Cultural Artmedia",
      //   description:
      //     "Client website for a Buenos Aires cultural center with a curated agenda, ticketing links, and a custom CMS.",
      // },
      tetris: {
        title: "Tetris Revival",
        description:
          "Includes 2D, 3D, and ASCII modes. Built to experiment with three.js.",
      },
      sortVision: {
        title: "Sort Vision",
        description:
          "Sorting algorithm visualizer to compare speeds and operations in real time.",
      },
      factorize: {
        title: "Factorize or Die",
        description:
          "Arcade mini-game that trains mental factorization with increasing difficulty.",
      },
      chessVision: {
        title: "Chess Vision Trainer",
        description:
          "Visual trainer to improve coordinate recognition in chess.",
      },
      magic: {
        title: "Magic: the Gathering History Tracker",
        description:
          "Application to track the history of Magic: The Gathering Commander matches.",
      },
    },
  },
  experience: {
    title: "Professional Experience",
    create: {
      "add-button": "Add new one",
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
  errors: {
    "min#other": "Must have at least {minimum} characters.",
    "max#other": "Must have at most {maximum} characters.",
    required: "Required.",
    email: "Should be an email",
  },
  logout: "Sign out",
  language: "Language",
} as const;
