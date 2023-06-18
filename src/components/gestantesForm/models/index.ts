// Next
import { StaticImageData } from 'next/image';

export interface DataItemGestantes {
    id: number;
    user: string;
    ddp: string;
    phone: string;
    obstetra: string;
    monitoring: number;
    created_at: string;
    activity: string;
    image?: StaticImageData | undefined;
}

export interface GestantesFormProps {
    onClose: () => void;
    data: DataItemGestantes[];
    setData: React.Dispatch<React.SetStateAction<DataItemGestantes[]>>;
}
