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

export interface IUserLogin {
    email: string;
    password: string;
}
export interface IUserPassword {
    newPassword: string;
}

export interface IUserLoginAndPassword extends IUserLogin, IUserPassword { }

export interface IObstcares {
    name: string,
    email: string,
    phone: string,
    crm?: string;
}

export interface IGestantes {
    name: string,
    email: string,
    phone: string,
    crm?: string;
}
