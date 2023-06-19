// Next
import { StaticImageData } from "next/image";

export interface OptionValue {
    value: number;
    description: string;
}

export interface SelectValueProps {
    id: string;
    value?: string | number;
    options?: OptionValue[];
    icon?: StaticImageData | null;
    className?: string;
    classContainer?: string;
    title?: string;
    placeholder?: string;
    required?: boolean;
    onChange: (value: string) => void;
}

export interface SelectProps {
    id: string;
    title: string;
    info?: string;
    icon?: StaticImageData | null;
    className?: string;
    value?: string | number;
    options?: OptionValue[];
    placeholder?: string;
    width?: string;
    required?: boolean;
    onChange?: (value: string) => void;
}

