import { useEffect } from "react";
import { Link } from "react-router-dom"

const HomePage = ({ formData,setFormData }) => {
    
    useEffect(() => {
        setFormData(null)
    },[])
    return (
        <div className="home">
            <Link to="/sign-up"><button>SignUp</button></Link>
            {formData === null ? <Link to="/sign-up"><button>DashBoard</button></Link> : <Link to="/dashboard"><button>DashBoard</button></Link>}

        </div>
    );
}

export default HomePage