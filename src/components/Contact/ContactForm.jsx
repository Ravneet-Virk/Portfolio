import React, { useState } from 'react'
import "./ContactForm.css"
// import validator from "validator";

const ContactForm = () => {

    const [selects, setSelects] = useState();

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "cdb1e4f6-7aa5-4bd8-8312-d3ff1e991aa4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    const [message, setMessage] = useState("");
    const validateEmail = (e) => {
        const email = e.target.value;

        if (validator.isEmail(email)) {
            setMessage("");
        } else {
            setMessage("Please, enter valid Email!");
        } react
    };

    return (

        <div className='contact' name="contact">
            <div className="contact-col" data-aos="fade-up" data-aos-duration="1000">
                <h3>Send me a message<img src="./Images/msg-icon.png" alt="image" /></h3>
                <p>I'm excited to hear from you! Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out using the form or the contact details provided.</p>
                <ul>
                    <li><img src="./Images/mail-icon.png" alt="image" />ravneetsingh4509@gmail.com</li>
                    {/* <li><img src="./Images/phone-icon.png" alt="image" />+91 7710-777-666</li>
                    <li><img src="./Images/location-icon.png" alt="image" />SCO-27, 3rd Floor, Above Kotak Mahindra Bank, Model Town, Ludhiana</li> */}
                </ul>
            </div>


            <div className="contact-col" data-aos="fade-up" data-aos-duration="1000">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder='Enter your name' required />
                    {/* <label>Phone Number</label>
                    <input type="tel" name="country_code" title="Enter a valid mobile number" placeholder='Enter your mobile number' pattern="[1-9]{1}[0-9]{9}" /> */}

                    {/* <input type="tel" name="phone" placeholder='Enter your mobile number' required /> */}
                    <label>Email Address</label>
                    <input type="text" name="E-mail" id="userEmail" placeholder='Enter your E-mail Address' onChange={(e) => validateEmail(e)} />
                    <p className='e-mail-validate'>{message}</p>

                    {/* <label>Country</label>
                    <br />
                    <select value={selects} name="Country" onChange={e => setSelects(e.target.value)}>
                        <option>Select</option>
                        <option>Australia</option>
                        <option>United Kingdom</option>
                        <option>New Zeland</option>
                    </select> */}

                    <label>Write your message here</label>
                    <textarea name="message" rows="4" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='submit-btn'>Submit Now &rarr;</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default ContactForm
