export interface LoginData {
    user: string,
    password: string,
}
export interface User {
    email: string,
    id: string,
    token: string,
    username: string,
}
export interface RegisterData {
    email: string,
    username: string,
    password: string,
}