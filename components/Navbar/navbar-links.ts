export interface INavbarLink {
  key: "DASHBOARD" | "TRANSCATIONS" | "MANAGE";
  label: string;
  route: string;
}

export const navbarLinks: INavbarLink[] = [
  {
    key: "DASHBOARD",
    label: "Dashboard",
    route: "/dashboard",
  },
  {
    key: "TRANSCATIONS",
    label: "Transactions",
    route: "/transactions",
  },
  {
    key: "MANAGE",
    label: "Manage",
    route: "/manage",
  },
];
