import { IconType } from "react-icons";

export interface Link {
    title: string;
    href: string;
    article?: {
        title: string;
        cta: string;
        image: string;
        date?: string;
    }
    subLinks?: SubHeaderType[];
    isGrid?: boolean;
}

export type SubHeader = {
    Icon?: IconType;
    title: string;
    href: string;
    description?: string;
    isExternalLink?: boolean;
};

export interface SubHeaderProps extends Link {
    index: number;
    openSubHeader: () => void;
    closeSubHeader: () => void;
};