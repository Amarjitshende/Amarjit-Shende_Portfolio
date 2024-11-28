// import React from 'react'
// import './Contact.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import mail_icon from '../../assets/mail_icon.svg'
// import location_icon from '../../assets/location_icon.svg'
// import call_icon from '../../assets/call_icon.svg'

// const Contact = () => {
    
//     // this code implemented from 'https://web3forms.com/' website
//     const onSubmit = async (event) => {
//         event.preventDefault();

//         const formData = new FormData(event.target);
      
    
//         formData.append("access_key", "ae3b4b66-e2b7-4ccf-b47b-766f1fe905fe");
    
//         const object = Object.fromEntries(formData);
//         const json = JSON.stringify(object);
    
//         const res = await fetch("https://api.web3forms.com/submit", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//           },
//           body: json
//         }).then((res) => res.json());
    
//         if (res.success) {
      
//           alert(res.message);
          
//         }
       
//       };

//   return (
//     <div id='contact' className='contact'>
//        <div className="contact-title">
//         <h1>Get in touch</h1>
//         <img src={theme_pattern} alt="" />
//        </div>
//        <div className="contact-section">
//         <div className="contact-left">
//             <h1>Let's talk</h1>
//             <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
//             <div className="contact-details">
//                 <div className="contact-detail">
//                     <img src={mail_icon} alt="" /><p>amarjitshende74@gmail.com</p>
//                 </div>
//                 <div className="contact-detail">
//                     <img src={call_icon} alt="" /><p>+91 9421124680</p>
//                 </div>
//                 <div className="contact-detail">
//                     <img src={location_icon} alt="" /><p>Bangaluru, Karnataka, India</p>
//                 </div>
//             </div>

//         </div>
//         <form onSubmit={onSubmit} className="contact-right">
//             <label htmlFor="">Your Name</label>
//             <input type="text" placeholder='Enter your name' name='name' />
//             <label htmlFor="">Your Email</label>
//             <input type="text" placeholder='Enter your email' name='email' />
//             <label htmlFor="">Write your message here</label>
//             <textarea name="message" rows="3" placeholder='Enter your message'></textarea>
//             <button type='submit' className='contact-submit'>Submit now</button>
//         </form>
//        </div>
//     </div>
//   )
// }

// export default Contact




import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  // Define state to manage form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Update state when input fields change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();

    const submissionData = new FormData();
    submissionData.append("access_key", "ae3b4b66-e2b7-4ccf-b47b-766f1fe905fe");
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("message", formData.message);

    const json = JSON.stringify(Object.fromEntries(submissionData));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        alert(res.message);
        // Clear the form after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you
            want me to work on. You can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>amarjitshende74@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 9421124680</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Bangalore, Karnataka, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="">Your Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="3"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
