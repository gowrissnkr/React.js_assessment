import { useEffect, useState } from "react";
import { validate } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import { initialValues } from "../utils/constant";

const SignUp = ({ setFormData }) => {
    const navigate = useNavigate() // Navigate to specified router

    const [formData, setFormDataLocal] = useState(initialValues); // Form data values
    const [error, setError] = useState(initialValues); // Error values

    // function to change the formData value with user input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDataLocal({ ...formData, [name]: value });
    };

    // To submit the form data
    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validate(formData)
        setError(validateErrors)
        if(Object.keys(validateErrors).length === 0) {
            setFormData(formData)
            navigate("/dashboard")
        }
    };


    useEffect(() => {}, [error]);

    return (
        <div>
        <div className="inner">
            <form onSubmit={handleSubmit}>
                <h3>Create Account?</h3>
                <div className="form-holder">
                    <input type="text" className="form-control" placeholder="First Name"
                        name="firstName" value={formData.firstName}  onChange={handleChange}/>
                    <p>{error.firstName}</p>
                </div>

                <div className="form-holder">
                    <input type="text" className="form-control" placeholder="Last Name" 
                        name="lastName" value={formData.lastName} onChange={handleChange} />
                    <p>{error.lastName}</p>
                </div>
                <div className="form-holder">
                    <input type="text" className="form-control" placeholder="E-Mail"
                        name="email" value={formData.email} onChange={handleChange} />
                    <p>{error.email}</p>
                </div>
                <div className="form-holder">
                    <input type="password" className="form-control" placeholder="Password"
                        name="password" value={formData.password} onChange={handleChange} />
                    <p>{error.password}</p>
                </div>
                <div className="form-holder">
                    <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                    <p>{error.confirmPassword}</p>
                </div>
                <button >Sign Up</button>
            </form>
        </div>
        </div>
    )
}


export default SignUp