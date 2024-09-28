import './ContactUs.css';
import { useState } from 'react';
const ContactUs=()=>{
    const [formData, setFormData] = useState({
        fullname: '',
        countryCode: '+91',
        phoneno: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const onlyAlphaValidationWithSpace = (e) => {
        const charCode = e.which ? e.which : e.keyCode;
        if ((charCode > 31 && charCode < 65) || (charCode > 90 && charCode < 97) || charCode > 122) {
            e.preventDefault();
        }
    };

    const isNumberKey = (e) => {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            e.preventDefault();
        }
    };
return(
<div className="common-form">
        <div className="form-heading">Connect with us</div>
            <form className="cta-form" onSubmit={handleSubmit}>
                <div className="form-content">
                    <div className="form-group">
                        <div className="name-cont inpt">
                            <input
                                className="form-control username form-input"
                                id="dropEnquiry_Name"
                                placeholder=""
                                name="fullname"
                                title="Name cannot be digit or special character"
                                pattern="[a-zA-Z ]{4,35}"
                                onPaste={(e) => e.preventDefault()}
                                onCopy={(e) => e.preventDefault()}
                                onKeyPress={onlyAlphaValidationWithSpace}
                                required
                                autoComplete="off"
                                value={formData.fullname}
                                onChange={handleChange}
                            />
                            <label htmlFor="fullname" className="name-label form-label">Name</label>
                        </div>
                        <div className="contact-group">
                            <div className="country-code">
                                <select
                                    name="countryCode"
                                    id="dropEnquiry_CountryCode"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                >
                                    <option data-countrycode="IN" value="+91">India (+91)</option>
                                    <option data-countrycode="AU" value="+61">Australia (+61)</option>
                                    <option data-countrycode="BH" value="+973">Bahrain (+973)</option>
                                    <option data-countrycode="CA" value="+1">Canada (+1)</option>
                                    <option data-countrycode="HK" value="+852">Hong Kong (+852)</option>
                                    <option data-countrycode="QA" value="+974">Qatar (+974)</option>
                                    <option data-countrycode="SA" value="+966">Saudi Arabia (+966)</option>
                                    <option data-countrycode="SG" value="+65">Singapore (+65)</option>
                                    <option data-countrycode="ZA" value="+27">South Africa (+27)</option>
                                    <option data-countrycode="AE" value="+971">United Arab Emirates (+971)</option>
                                    <option data-countrycode="US" value="+1">USA (+1)</option>
                                    <option data-countrycode="GB" value="+44">UK (+44)</option>
                                    <option data-countrycode="AF" value="+93">Afghanistan (+93)</option>
                                    <option data-countrycode="AL" value="+355">Albania (+355)</option>
                                    <option data-countrycode="DZ" value="+213">Algeria (+213)</option>
                                    <option data-countrycode="AS" value="+1-684">American Samoa (+1-684)</option>
                                    <option data-countrycode="AD" value="+376">Andorra (+376)</option>
                                    <option data-countrycode="AO" value="+244">Angola (+244)</option>
                                    <option data-countrycode="AI" value="+1-264">Anguilla (+1-264)</option>
                                </select>
                            </div>
                            <div className="m-number-cont inpt">
                                <input
                                    className="form-control phone-number form-input-no"
                                    id="dropEnquiry_Number"
                                    placeholder=""
                                    name="phoneno"
                                    type="text"
                                    title="Phone number should be digits only"
                                    pattern="[0-9]{6,15}"
                                    onPaste={(e) => e.preventDefault()}
                                    onCopy={(e) => e.preventDefault()}
                                    onClick={isNumberKey}
                                    required
                                    autoComplete="off"
                                    value={formData.phoneno}
                                    onChange={handleChange}
                                />
                                <label htmlFor="phoneno" className="m-number-label form-label">Phone Number</label>
                            </div>
                        </div>
                        <div className="email-cont inpt">
                            <input
                                className="form-control email form-input"
                                id="dropEnquiry_Email"
                                placeholder=""
                                name="email"
                                type="email"
                                title="Invalid email address"
                                required
                                autoComplete="off"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <label htmlFor="email" className="email-label form-label">Email</label>
                        </div>
                        <div className="message-cont inpt">
                            <textarea
                                className="form-control message form-input"
                                id="dropEnquiry_Message"
                                placeholder=""
                                name="message"
                                title="Message should not exceed 500 characters"
                                maxLength="500"
                                required
                                autoComplete="off"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <label htmlFor="message" className="message-label form-label">Message</label>
                        </div>
                        <div className="submit-cont">
                            <button type="submit" className="form-control submit-button">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default ContactUs;