import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure toast styles are applied
import "../contact/Contact.css"; // Optional: Create and style your form in Feedback.css
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxSInTXEuwK6TX1RrRnCSyzecYxXGn6ek",
  authDomain: "myportfolio-fa5ca.firebaseapp.com",
  projectId: "myportfolio-fa5ca",
  storageBucket: "myportfolio-fa5ca.firebasestorage.app",
  messagingSenderId: "951011875510",
  appId: "1:951011875510:web:2e04e7511d55e7dd0b6417",
  measurementId: "G-BE7HZFL44B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Check if all fields are filled
    if (!name || !email || !subject || !message) {
      toast.error("All fields are required. Please complete the form.");
      return;
    }

    setLoading(true);

    try {
      // Add feedback to Firestore
      await addDoc(collection(db, "feedbacks"), {
        name,
        email,
        subject,
        message,
        timestamp: new Date(),
      });

      toast.success("Thank you for your feedback!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="feedback">
      <h2 className="feedback__title">Your Feedback</h2>
      <form className="feedback__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="feedback__input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="feedback__input"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="feedback__input"
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={formData.message}
          onChange={handleChange}
          className="feedback__textarea"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className={`feedback__button ${loading ? "feedback__button--loading" : ""}`}
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>
      <ToastContainer position="bottom-right" autoClose={5000} />
    </section>
  );
};

export default Feedback;
