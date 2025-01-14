export const serviceItems = [
  { path: "/naturalisation", label: "Naturalisation française" },
  { path: "/titre-sejour", label: "Titre de séjour" },
  { path: "/renouvellement-titre-sejour", label: "Renouvellement Titre de séjour" },
  { path: "/casier-judiciaire", label: "Casier judiciaire" },
  { path: "/logement-social", label: "Logement social" },
];

export const navigationLinks = [
  { path: "/", label: "Accueil" },
  {
    label: "Nos services",
    isSubmenu: true,
    items: serviceItems,
  },
  { path: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { path: "/articles", label: "Articles" },
  { path: "/nous-contacter", label: "Nous contacter" },
];