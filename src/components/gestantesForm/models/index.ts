// Next
import { StaticImageData } from 'next/image';

// React
import { Dispatch, SetStateAction } from 'react';

export interface DataItemGestantes {
    id: number;
    user: string;
    ddp: string;
    phone: string;
    obstetra: string;
    monitoring: number;
    created_at: string;
    activity: string;
    image: StaticImageData | null;
}

export interface GestantesFormProps {
    onClose: () => void;
    data: DataItemGestantes[];
    setData: Dispatch<SetStateAction<DataItemGestantes[]>>;
}
