// Next
import { StaticImageData } from "next/image";

// React
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface Column {
    title: string;
    dataIndex: string;
    key: string;
    className?: string;
}

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

export interface ObstetrasTableProps {
    columns: Column[];
    data: DataItemObstetras[];
    handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
    selectedItems: number[];
    setSelectedItems: Dispatch<SetStateAction<number[]>>;
}
