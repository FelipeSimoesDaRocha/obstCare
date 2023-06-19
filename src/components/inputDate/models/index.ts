import { StaticImageData } from "next/image";

export interface InputDateProps {
    id: string;
    title: string;
    info?: string;
    icon?: StaticImageData | null;
    value?: string;
    width?: string;
    required?: boolean;
    onChange: (value: string) => void;
}
