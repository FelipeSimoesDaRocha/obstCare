// Next
import { StaticImageData } from "next/image";

export interface DataItemObstetras {
    id: number;
    user: string;
    pregnant_women: number;
    phone: string;
    state: string;
    created_at: string;
    activity: string;
    image?: StaticImageData | undefined;
}

export interface ObstetrasFormProps {
    onClose: () => void;
    data: DataItemObstetras[];
    setData: React.Dispatch<React.SetStateAction<DataItemObstetras[]>>;
}
