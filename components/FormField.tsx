export default function FormField({ id, label, type = 'text', value, onChange, placeholder, as = 'input', options = [] }: FormFieldProps) {
        return (
                <div className='form-field'>
                        <label htmlFor={id}>{label}</label>
                        {type == 'textarea' ? (
                                <textarea
                                        id={id}
                                        onChange={onChange}
                                        name={id}
                                        value={value}
                                />
                        ) : type == 'select' ? (
                                <select
                                        id={id}
                                        onChange={onChange}
                                        name={id}
                                        value={value}
                                >
                                        {options.map(({ label, value }) => (
                                                <option
                                                        key={label}
                                                        value={value}
                                                >
                                                        {label}
                                                </option>
                                        ))}
                                </select>
                        ) : (
                                <input
                                        id={id}
                                        onChange={onChange}
                                        name={id}
                                        value={value}
                                        placeholder={placeholder}
                                />
                        )}
                </div>
        )
}
