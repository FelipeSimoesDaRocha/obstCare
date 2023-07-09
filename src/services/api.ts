// Axios
import axios from 'axios'

// Models
import { DataItemGestantes, DataItemObstetras } from 'models'

export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL })

// Home
export const getHome = () => api.get<DataItemObstetras[]>('admin/home')

// Obstetras
export const getObstetras = () => api.get<DataItemObstetras[]>('admin/obstetras')
export const deleteObstetras = () => api.delete<DataItemObstetras[]>('admin/doctors')
export const createObstetras = (obstetras: DataItemObstetras) => api.post('doctors', obstetras)

// Gestants
export const getGestantes = () => api.get<DataItemGestantes[]>('admin/gestantes')
export const deleteGestantes = () => api.delete<DataItemObstetras[]>('admin/pacient')
