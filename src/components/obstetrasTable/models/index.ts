// React
import { ChangeEvent, Dispatch, SetStateAction } from "react";

// Models
import { Column, DataItemObstetras } from "models";

export interface ObstetrasTableProps {
    columns: Column[];
    data: DataItemObstetras[];
    handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
    selectedItems: number[];
    setSelectedItems: Dispatch<SetStateAction<number[]>>;
}
