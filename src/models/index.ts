// Next
import { StaticImageData } from 'next/image';

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

export interface DataItemCardsHome {
  quantity: number;
  porcentage: number;
}

export interface DataItemCardsApi {
  gestantes: DataItemCardsHome;
  lembretes: DataItemCardsHome;
  monitoramentos: DataItemCardsHome;
  obstetras: DataItemCardsHome;
}

export interface Column {
  title: string;
  dataIndex: string;
  key: string;
  className?: string;
}

export interface IObstcares {
  name: string;
  email: string;
  telefone: string;
  crm?: string;
}

export interface IGestantes {
  id: string;
  name: string;
  telefone: string;
  obstetraResponsavel: string;
  email: string;
  date_of_birth: string;
  dum: string;
  previous_pregnancies: number;
  previous_births: number;
  risk: string;
}

export interface DataItemObstetras {
  id: number;
  name: string;
  email: string
  perfilImage: StaticImageData | null;
  numerosDeGestantes: number;
  telefone: string;
  estadoOndeReside: string;
  dataDaCriacao: string;
  ultimaAtividade: string;
}

export interface DataItemGestantes {
  id: number;
  name: string;
  email: string
  perfilImage: StaticImageData | null;
  ddp: string;
  telefone: string;
  obstetraResponsavel: string;
  created_at?: string;
  monitoramentos: number;
  ultimaAtividade: string;
}

export interface DataGraficos {
  labels: string[];
  values: number[];
}

export enum TypeDateGrafico {
  DIARIO = 1,
  SEMANAL = 2,
  MENSAL = 3,
}

export enum TypeTabGrafico {
  OBSTETRAS = 1,
  GESTANTES = 2,
  MONITORAMENTOS = 3,
  LEMBRETES = 4,
  GESTOBST = 5,
  MONITGEST = 6,
  LEMBGEST = 7,
  ALTORISCOTOTAL = 8,
}
