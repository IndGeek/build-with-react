import useFormValidation from '../hooks/useFormValidation';

const FormComponent = () => {
    const initialFormState = {
        username: '',
        email: '',
        password: '',
    };

    const validationRules = {
        username: [
        {
            validator: (value) => value.length >= 3,
            message: 'Username must be at least 3 characters long.',
        },
        ],
        email: [
        {
            validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message: 'Enter a valid email address.',
        },
        ],
        password: [
        {
            validator: (value) => value.length >= 6,
            message: 'Password must be at least 6 characters long.',
        },
        {
            validator: (value) => /[A-Z]/.test(value),
            message: 'Password must contain at least one capital letter.',
        },
        {
            validator: (value) => /[0-9]/.test(value),
            message: 'Password must contain at least a Number.',
        },
        ],
    };

    const { values, errors, isValid, handleChange } = useFormValidation(
        initialFormState,
        validationRules
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValid) {
        alert('Form submitted');
        } else {
        alert('Form has validation errors. Cannot submit.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-5/12 m-auto justify-center h-screen'>
        <span>
        <label className="flex border p-2 px-3">
            Username:
            <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            className="focus:outline-none pl-2 text-gray-800 w-full"
            spellCheck={false}
            />
        </label>
        {errors.username && <p className="text-red-600 text-xs">{errors.username}</p>}
        </span>
       <span>
       <label className="flex border p-2 px-3">
            Email:
            <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="focus:outline-none pl-2 text-gray-800 w-full"
            spellCheck={false}
            />
        </label>
        {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
        </span> 

        <span>
        <label className="flex border p-2 px-3">
            Password:
            <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="focus:outline-none pl-2 text-gray-800 w-full"
            spellCheck={false}
            />
        </label>
        {errors.password && <p className="text-red-600 text-xs">{errors.password}</p>}
        </span>

        <button disabled={!isValid} type="submit" className='disabled:bg-green-200 disabled:cursor-not-allowed bg-green-600 text-white px-4 py-2 rounded-lg'>Submit</button>
        </form>
    );
};

export default FormComponent;
