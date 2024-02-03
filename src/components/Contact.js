import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
import "../styling/Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailEndpoint = 'http://localhost:3001/send-email';
        try {
            const response = await fetch(emailEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(formData);
            alert('Form submitted successfully!');

        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while submitting the form.")
        }
    }
    return (
        <div>
        <form className="mb-6" onSubmit={handleSubmit}>
        <div className="m2">
            <label> Your Name: </label>
            <input type="text" id="name" name="name" className="form-input p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200" style={{ width: '50%', padding: '10px', marginTop: '30px' }}
                   value={formData.name} onChange={handleChange}/>
        </div>
            <div className="m2">
                <label>Your Email: </label>
                <input type="text" id="email" name="email" className="form-input p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200" style={{ width: '50%', padding: '10px', marginTop: '20px' }}
                value={formData.email} onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label>Message: </label>
                <textarea id="message" name="message" className="form-input p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200" style={{ width: '50%', padding: '10px', marginTop: '20px' }}
                          value={formData.message} onChange={handleChange}/>
            </div>
            <input type="submit" value="Submit" style={{ marginTop: '10px' }} />
        </form>
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-600">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" style={{ marginRight: '5px' }}/>
                Email: dahliajames2003@gmail.com
            </p>
        </div>
        </div>
    )
}

export default Contact