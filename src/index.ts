import dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

export const getApiUrl = () => process.env.API_URL
export const isDebug = () => process.env.DEBUG === 'true'

console.log(`Current environment: ${process.env.NODE_ENV}`)
console.log(`API URL: ${getApiUrl()}`)
console.log(`Debug mode: ${isDebug()}`)
