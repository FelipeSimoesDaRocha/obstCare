// React
import { ChangeEvent, Dispatch, SetStateAction } from "react";

// Models
import { Column, DataItemGestantes } from "models";

export interface GestantesTableProps {
    data: DataItemGestantes[];
    columns: Column[];
    selectedItems: number[];
    setSelectedItems: Dispatch<SetStateAction<number[]>>;
    OpenModal: () => void;
    handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
}
