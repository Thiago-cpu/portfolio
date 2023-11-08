export default {
  home: {
    name: "Thiago Valdiviezo",
    description: "Front end & back end developer.",
  },
  contact: {
    title: "Contacto",
    description:
      "Podes comunicarte conmigo a través del formulario de abajo o por correo electrónico",
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
