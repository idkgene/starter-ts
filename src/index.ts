import dotenv from 'dotenv'
import path from 'path'

const envPath = process.env.ENV_PATH || path.resolve(__dirname, `../config/.env.${process.env.NODE_ENV}`)

dotenv.config({ path: envPath })

export const getApiUrl = () => process.env.API_URL
export const isDebug = () => process.env.DEBUG === 'true'

console.log(`Current environment: ${process.env.NODE_ENV}`)
console.log(`API URL: ${getApiUrl()}`)
console.log(`Debug mode: ${isDebug()}`)
