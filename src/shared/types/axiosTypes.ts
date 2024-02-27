import {AxiosResponse} from 'axios'
import {User} from './userTypes'
export interface Response extends AxiosResponse {
    message: string,
    success: boolean,
    user: User
}