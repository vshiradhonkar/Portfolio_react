
import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import "../style/Contact.css";
import emailjs from "emailjs-com";
import { firestore } from "../Firebase";

// Initialize EmailJS
emailjs.init("_H59xsezjb2loQduM");

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_458fznj",
        "template_458fznj",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "_H59xsezjb2loQduM"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Add the form data to the 'contacts' collection in Firestore
      await firestore.collection("contacts").add(formData);

      // Send email using EmailJS
      sendEmail();

      // Show a success message and clear the form after submission
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Hide success message after a few seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting message:", error);

      // Show an error message on the page
      setSubmitSuccess(false);
      setError("Error submitting message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the form below or send an email to {""}
              <span className="mail">vedantshiradhonkar@gmail.com</span>:
            </p>
          </div>
          <SocialLinks />
        </div>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <input
            className="button"
            id="submit"
            value="Submit"
            type="submit"
            disabled={loading}
          />
        </form>

        {loading && <p className="loading-message">Submitting...</p>}
        {submitSuccess && (
          <p className="success-message">Message submitted successfully!</p>
        )}
        {error && <p className="error-message">{error}</p>}
      </div>
    </section>
  );
}

export default Contact;
