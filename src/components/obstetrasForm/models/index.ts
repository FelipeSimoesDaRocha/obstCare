// Next
import { StaticImageData } from 'next/image';

// React
import { Dispatch, SetStateAction } from 'react';

export interface DataItemObstetras {
    id: number;
    user: string;
    pregnant_women: number;
    phone: string;
    state: string;
    created_at: string;
    activity: string;
    image: StaticImageData | null;
}

export interface ObstetrasFormProps {
    onClose: () => void;
    data: DataItemObstetras[];
    setData: Dispatch<SetStateAction<DataItemObstetras[]>>;
}
