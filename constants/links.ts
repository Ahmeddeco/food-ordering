import { Pages, Routes } from "./enums"

export const links = [
  {
    id: crypto.randomUUID(),
    text: 'Home',
    href: Routes.ROOT,
  },
  {
    id: crypto.randomUUID(),
    text: 'Menu',
    href: Routes.MENU,
  },
  {
    id: crypto.randomUUID(),
    text: 'About',
    href: Routes.ABOUT,
  },
  {
    id: crypto.randomUUID(),
    text: 'Contact',
    href: Routes.CONTACT,
  },
  {
    id: crypto.randomUUID(),
    text: 'Login',
    href: `${Routes.AUTH}/${Pages.LOGIN}`,
  }
]