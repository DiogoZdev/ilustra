interface Page {
  path: string,
  i18n: string,
}

export const pages: Page[] = [
  {
    path: "/",
    i18n: "NAV.INICIO",
  },
  {
    path: "about",
    i18n: "NAV.SOBRE",
  },
  {
    path: "products",
    i18n: "NAV.PRODUTOS",
  },
];