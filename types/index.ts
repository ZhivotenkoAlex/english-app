export interface IMenuItem {
    id: number;
    label: string;
    path: string;
}

export interface IPopupMenuItem extends Omit<IMenuItem, "subItems"> {
    icon: React.ReactNode;
}
