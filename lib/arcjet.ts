import arcjet from '@arcjet/next'
import { getEnv } from './utils'

export const aj = arcjet({ key: getEnv('ARCJECT_API_KEY'), rules: [] })
