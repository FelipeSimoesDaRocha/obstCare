// Axios
import axios from 'axios'

// Models
import { DataItemGestantes, DataItemObstetras } from 'models'

export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL })

// Obstetras
export const getObstetras = () => api.get<DataItemObstetras[]>('obstetras')
export const deleteObstetras = () => api.delete<DataItemObstetras[]>('doctors')

// Gestants
export const getGestantes = () => api.get<DataItemGestantes[]>('gestantes')
export const deleteGestantes = () => api.delete<DataItemObstetras[]>('pacient')
