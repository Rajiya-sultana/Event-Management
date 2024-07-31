import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl text-customRed font-bold my-10">Contact Us</h1>
      <form action="">
        <div className="mt-6">
          <label className="block mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="block sm:w-96 p-2"
            type="text"
            placeholder="Name"
            id="name"
          />
        </div>
        <div className="mt-2">
          <label className="block mb-2" htmlFor="e-mail">
            E-mail*
          </label>
          <input
            className="block sm:w-96 p-2"
            type="text"
            placeholder="E-mail*"
            id="e-mail"
          />
        </div>
        <div className="mt-6">
          <label className="block mb-2" htmlFor="yourMessage">
            Your Message
          </label>
          <textarea
            className="block sm:w-96 p-2 border-2 border-gray-400 bg-transparent"
            name="Your Message"
            id="yourMessage"
            cols="22"
            rows="3"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          className="bg-customRed hover:bg-customColor text-white
      font-bold py-1 px-6 rounded-lg my-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
