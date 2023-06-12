import { StaticImageData } from 'next/image';

import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from 'react';

export type LayoutProps = {
    selectedKey: string;
    children: ReactNode;
};

export type User = {
    id: string;
    name: string;
    password: string;
    email: string;
};

export type userLoginById = {
    id: string;
    uuid: string;
    name: string;
    email: string;
    password: string;
    create_at: string;
    updated_at: string;
    deleted_at: string;
    role: RolesEnum | null;
};

export type cardsProps = {
    name: string;
    data: string;
    value: number;
    income: number;
};

export interface LineChartProps {
    data: number[];
    labels: string[];
}

export interface IUserLogin {
    email: string;
    password: string;
}
export interface IUserPassword {
    newPassword: string;
}

export interface IUserLoginAndPassword extends IUserLogin, IUserPassword { }

export enum RolesEnum {
    ADMIN = 1,
}

export enum ModulesEnum {
    OBSTETRAS = 'ObstetrasModule',
    GESTANTES = 'GestantesModule',
}

export enum LoginResponseDto {
    USER_NOT_FOUND = 'auth/user-not-found',
    WRONG_PASSWORD = 'auth/wrong-password',
}

export enum ToastTypeEnum {
    ERROR = 'error',
    WARN = 'warn',
    SUCCESS = 'success',
}

export interface Column {
    title: string;
    dataIndex: string;
    key: string;
    className?: string;
}

export interface DataItemGestantes {
    id: number;
    user: string;
    ddp: string;
    phone: string;
    obstetra: string;
    monitoring: number;
    created_at: string;
    activity: string;
    image: StaticImageData;
}

export interface DataItemObstetras {
    id: number;
    user: string;
    pregnant_women: number;
    phone: string;
    state: string;
    created_at: string;
    activity: string;
    image: StaticImageData;
}

export interface GestantesTableProps {
    columns: Column[];
    data: DataItemGestantes[];
    handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
    selectedItems: number[];
    setSelectedItems: Dispatch<SetStateAction<number[]>>;
}

export interface ObstetrasTableProps {
    columns: Column[];
    data: DataItemObstetras[];
    handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
    selectedItems: number[];
    setSelectedItems: Dispatch<SetStateAction<number[]>>;
}
