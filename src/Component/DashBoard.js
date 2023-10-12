import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const DashBoard = ({ formData }) => {
    const navigate = useNavigate()
   

    const { firstName, lastName, email } = formData
    console.log(formData)
   
    useEffect(() => {
        if (formData === null) {            
            navigate("/sign-up")
        }
    },[])
    return (
        <div>
            <h1 style={{ "paddingBottom": "20px" }}>Welcome {firstName} {lastName}</h1>
            <h4>FirstName</h4>
            <p style={{ "paddingBottom": "20px" }}>{firstName}</p>
            <h4>LastName</h4>
            <p style={{ "paddingBottom": "20px" }}>{lastName}</p>
            <h4>Email</h4>
            <p style={{ "paddingBottom": "20px" }}>{email}</p>
            <div>
                <Link to={"/"}><h6>Back to Home</h6></Link>
                <Link to={"/sign-up"}><h6>Back to SignUp Page</h6></Link>
            </div>
        </div>

    )
}

export default DashBoard