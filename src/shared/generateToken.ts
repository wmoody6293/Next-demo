import jwt from 'jsonwebtoken';
export function generateToken(id:string){
    const secret = process.env.JWT_SECRET;
    return jwt.sign({id}, secret!, {expiresIn: '1d'})
}