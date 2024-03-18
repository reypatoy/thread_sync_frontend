import z from 'zod'

export const RegisterSchema = z.object({
    firstName: z.string().min(1, {message: 'Firstname is required'}),
    lastName: z.string().min(1, {message: 'Lastname is required'}),
    email: z.string().email({message: 'Please enter a valid email Address'}),
    password: z.string().min(1, {message: 'Password is required'}),
    confirmPassword: z.string().min(1, {message: 'Confirm-Password is required'})
}).refine(data => {
    return data.confirmPassword === data.password
}, { message: "Password didn't match!", path: ['confirmPassword', 'password']})