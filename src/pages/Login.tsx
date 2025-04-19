import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Input from '../components/Input'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { login } from '../features/AuthSlice'
import { LoginTypes } from '../types/TYPES'
import * as yup from "yup"
const Login = () => {
    const disPatch = useDispatch()
    const initialValues: LoginTypes = {
        email: "",
        password: "",
        token: ""
    }
    const validationSchema = yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
    })
    const handleLogin = (values: { email: string; password: string, token: string }) => {
        console.log(values, 'vvvv')
        disPatch(login(values))
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Welcome Back</h2>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                >
                    <Form>
                        <Input name="email" label="Email" placeholder="you@example.com" type="email" />
                        <Input name="password" label="Password" placeholder="••••••••" type="password" />

                        <Button text="Login" type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-700" />
                    </Form>
                </Formik>

                <p className="text-center text-sm mt-4 text-gray-600">
                    Don’t have an account?{' '}
                    <a href="/register" className="text-blue-600 hover:underline">Register</a>
                </p>
            </div>
        </div>
    )
}

export default Login
