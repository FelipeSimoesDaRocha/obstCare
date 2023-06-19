// Next
import { StaticImageData } from "next/image";

// React
import { ChangeEvent, Dispatch, SetStateAction } from "react";

// Columns
export interface Column {
    title: string;
    dataIndex: string;
    key: string;
    className?: string;
}

// Itens
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

// Table
export interface GestantesTableProps {
    columns: Column[];
    data: DataItemGestantes[];
    handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
    selectedItems: number[];
    setSelectedItems: Dispatch<SetStateAction<number[]>>;
}
