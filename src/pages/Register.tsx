import { RegisterProps } from '../types/TYPES';
import * as yup from "yup";
import { Form, Formik } from 'formik';
import Input from '../components/Input';
import Button from '../components/Button';
function Register() {

  const initialValues: RegisterProps = {
    email: "",
    address: "",
    pincode: 0,
    password: ""
  }
  const validationSchema = yup.object({
    email: yup.string().required("Email is required"),
    address: yup.string().required("Address is required"),
    pincode: yup.string().required("Pincode is required"),
    password: yup.string().required("Password is required"),
  })
  const submit = () => {

  }
  return (
    <Formik

      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submit}
    >

      <Form>
        <Input placeholder='Enter email' name='email' />
        <Input placeholder='Enter Address' name='address' />
        <Input placeholder='Enter' name='pincode' />
        <Input placeholder='Enter Password' name='password' />
        <Button text='Register' type='submit' />
      </Form>
    </Formik>
  )
}

export default Register