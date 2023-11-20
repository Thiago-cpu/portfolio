export default {
  links: {
    home: "Home",
    contact: "Contacto",
    experience: "Experiencia",
  },
  home: {
    name: "Thiago Valdiviezo",
    description: "Front end & back end developer.",
  },
  contact: {
    title: "Contacto",
    description:
      "Podes comunicarte conmigo a través del formulario o por alguna red social",
    form: {
      fields: {
        name: {
          label: "Nombre",
          placeholder: "Ingresa tu nombre",
        },
        email: {
          label: "Email",
          placeholder: "Ingresa tu email",
        },
        message: {
          label: "Mensaje",
          placeholder: "Ingresa un mensaje",
        },
      },
      toast: {
        title: "Mensaje enviado correctamente",
        description: "Gracias por contactarme!",
      },
      submit: "Enviar",
    },
  },
  toast: {
    error: {
      title: "Algo salió mal",
      description: "Hubo un problema con la solicitud.",
    },
    tryAgain: "Reintentar",
  },
  experience: {
    title: "Experiencia Profesional",
    create: {
      "add-button": "Agregar",
      title: "Crear nueva experiencia",
      description:
        "Tambien podes ver una Preview.\nClickea en Guardar cuando termines.",
      toast: {
        title: "Guardado!",
        description: "Tu trabajo ha sido guardado correctamente.",
      },
      fields: {
        title: {
          label: "Título",
          placeholder: "Ingrese un título",
        },
        range: {
          label: "Rango",
          placeholder: "Ingrese el período de trabajo",
        },
        location: {
          label: "Ubicación",
          placeholder: "Ingrese la ubicación",
        },
        page: {
          label: {
            label: "Nombre de la empresa",
            placeholder: "Ingrese el nombre de la empresa",
          },
          href: {
            label: "Página de la empresa",
            placeholder: "Ingrese la URL de la empresa",
          },
        },
        logo: {
          label: "Logo de la empresa",
          placeholder: "Ingrese la URL del logo de la empresa",
        },
        text_en: {
          label: "Descripción en inglés",
          placeholder: "Descripción",
        },
        text_es: {
          label: "Descripción en español",
          placeholder: "Descripción",
        },
        technologies: {
          label: "Tecnologías",
          placeholder: "Agregue las tecnologías con las que trabaja",
        },
      },
      submit: "Guardar",
    },
    update: {
      title: "Actualizar experiencia profesional",
      description:
        "También puedes ver una vista previa.\nHaz clic en guardar cuando hayas terminado.",
      toast: {
        title: "Éxito",
        description: "Tu trabajo se ha actualizado correctamente.",
      },
      fields: {
        title: {
          label: "Título",
          placeholder: "Ingresa un título",
        },
        range: {
          label: "Rango",
          placeholder: "Ingresa el periodo de trabajo",
        },
        location: {
          label: "Ubicación",
          placeholder: "Ingresa la ubicación",
        },
        page: {
          label: {
            label: "Nombre de la empresa",
            placeholder: "Ingresa el nombre de la empresa",
          },
          href: {
            label: "Página de la empresa",
            placeholder: "Ingresa la URL de la página de la empresa",
          },
        },
        logo: {
          label: "Logo de la empresa",
          placeholder: "Ingresa la URL del logo de la empresa",
        },
        text_en: {
          label: "Descripción en inglés",
          placeholder: "Descripción",
        },
        text_es: {
          label: "Descripción en español",
          placeholder: "Descripción",
        },
        technologies: {
          label: "Tecnologías",
          placeholder: "Agrega las tecnologías con las que trabajaste",
        },
      },
      submit: "Guardar",
    },
    delete: {
      toast: {
        title: "Éxito",
        description: "Tu experiencia laboral se ha eliminada correctamente.",
      },
      confirm: {
        title: "¿Estás completamente seguro?",
        description: {
          1: "Esta acción no se puede deshacer.",
          2: "Esto eliminará permanentemente tu experiencia laboral de nuestros servidores.",
        },
        submit: "Confirmar",
      },
    },
  },
  errors: {
    "min#other": "Debe tener al menos {minimum} caracteres.",
    "max#other": "Debe tener como máximo {maximum} caracteres.",
    required: "Obligatorio.",
    email: "Debe de ser un mail válido",
  },
  logout: "Sign out",
  language: "Lenguaje",
} as const;
