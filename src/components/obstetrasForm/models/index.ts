// Next
import { StaticImageData } from 'next/image';

// React
import { Dispatch, SetStateAction } from 'react';

// Model
import { DataItemObstetras } from 'models';

export interface ObstetrasFormProps {
    onClose: () => void;
    data: DataItemObstetras[];
    setData: Dispatch<SetStateAction<DataItemObstetras[]>>;
}
