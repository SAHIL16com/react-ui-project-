import React from 'react'
import Title from './Title'
import assets from '../assets/assets.js'
import { toast } from 'react-hot-toast'

const ContactUs = () => {

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "e3af8b16-15b7-4976-971f-ed9d47bc84b2");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) { 
        toast.success("thak you for submission")
        event.target.reset();
      } else {
        toast.error(data.message)
      }

    }
    catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center gap-8 px-5 sm:px-10 lg:px-20 xl:px-32 py-20 text-gray-700 dark:text-white bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <Title
        title="Reach out to us"
        desc="We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible."
      />

      <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>

          <div className="flex items-center gap-3 px-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all duration-300">
            <img
              src={assets.person_icon}
              alt="person"
              className="w-5 h-5 opacity-70"
            />

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full py-3 bg-transparent outline-none text-sm text-gray-800 dark:text-white placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Your Email</p>

          <div className="flex items-center gap-3 px-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all duration-300">
            <img
              src={assets.email_icon}
              alt="email"
              className="w-5 h-5 opacity-70"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full py-3 bg-transparent outline-none text-sm text-gray-800 dark:text-white placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>

          <textarea
            rows={7}
            name="message"
            placeholder="Enter your message"
            className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white placeholder:text-gray-400 p-4 outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
            required
          ></textarea>
        </div>

        <div className="sm:col-span-2 flex justify-center sm:justify-start">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Submit

            <img
              src={assets.arrow_icon}
              alt="arrow"
              className="w-4"
            />
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactUs