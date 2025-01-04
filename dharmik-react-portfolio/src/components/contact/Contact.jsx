import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../contact/Contact.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDxSInTXEuwK6TX1RrRnCSyzecYxXGn6ek",
    authDomain: "myportfolio-fa5ca.firebaseapp.com",
    projectId: "myportfolio-fa5ca",
    storageBucket: "myportfolio-fa5ca.firebasestorage.app",
    messagingSenderId: "951011875510",
    appId: "1:951011875510:web:2e04e7511d55e7dd0b6417",
    measurementId: "G-BE7HZFL44B"
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

    if (!name || !email || !subject || !message) {
      return toast.error("Please fill in all fields!");
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

      toast.success("Feedback submitted successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting feedback: ", error);
      toast.error("Failed to submit feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="feedback"  >
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>
      <ToastContainer position="bottom-right" />
    </section>
  );
};

export default Feedback;
