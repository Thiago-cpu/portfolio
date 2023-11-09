export default {
  links: {
    home: "Home",
    contact: "Contacto",
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
} as const;
