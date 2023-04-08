interface Page {
  path: string,
  i18n: string,
  class?: string,
}

export const pages: Page[] = [
  {
    path: "/",
    i18n: "NAV.INICIO",
    class: "mobile-optional"

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