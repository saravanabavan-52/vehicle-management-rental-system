import { useState,useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function ForgotPassword() {

    const[email,setEmail]=useState("");
    const navigate=useNavigate();

    const handleSubmit= async(e)=>{
        e.preventDefault();
        
        await axios.post("/forgot-password",{email})
        navigate("/");

    }
    return (
        <div className="container mt-5">
            <div className="col-md-4   offset-md-4">
                <h2>Forgot Password</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>    
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit} className="w-100">
                        Submit
                    </Button>   

                </Form>
            </div>
            </div>
    );
}

export default ForgotPassword;
