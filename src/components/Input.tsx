import { useField } from 'formik'

const Input = ({ label, ...props }: { label?: string; name: string; type?: string; placeholder?: string; className?: string }) => {
    const [field, meta] = useField(props.name)

    return (
        <div className="mb-3">
            {label && <label className="block mb-1 text-sm">{label}</label>}
            <input
                {...field}
                {...props}
                className={`w-full px-3 py-2 border rounded ${props.className || ''}`}
            />
            {meta.touched && meta.error && (
                <div className="text-red-500 text-xs mt-1">{meta.error}</div>
            )}
        </div>
    )
}

export default Input
