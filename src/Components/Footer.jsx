import React from "react";
import { Link } from "react-router-dom";
import instagram from "../assets/Instagram.png";
import facebook from "../assets/Facebook.png";
import twitter from "../assets/Twitter.png";
import pinterest from "../assets/Pinterest.png";

const Footer = () => {
  return (
    <div className="container mx-auto py-14 px-6">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-20">
        <div>
          <h1 className="font-bold mb-2 text-xl">Categories</h1>
          <ul className="list-disc ml-8">
            <li>
              <Link to="#"> Social Events</Link>
            </li>
            <li>
              <Link to="#">Corporate Events</Link>
            </li>
            <li>
              <Link to="#">Entertainment Events</Link>
            </li>
            <li>
              <Link to="#">Educational Events</Link>
            </li>
            <li>
              <Link to="#">Non-Profit Events</Link>
            </li>
            <li>
              <Link to="#">Sporting Events</Link>
            </li>
            <li>
              <Link to="#">Cultural & Art Events</Link>
            </li>
            <li>
              <Link to="#">Religious & Spiritual Events</Link>
            </li>
            <li>
              <Link to="#">Trade & Industries Events</Link>
            </li>
            <li>
              <Link to="#">Community & Civic Events</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold mb-2 text-xl">Follow us on</h1>
          <div className="flex gap-6 my-4">
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
          </div>
          <div className="mt-16">
            <h1 className="font-bold mb-2 text-xl">Address</h1>
            <p>Jhumri Telaiya, Koderma ,Jharkhand,</p>
            <p>India-825409</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-2 text-xl">Get In Touch</h1>
          <form action="">
            <div className="mt-6">
              <input
                className="border-b-2 border-b-gray-600 bg-transparent py-2"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mt-2">
              <input
                className="border-b-2 border-b-gray-600 bg-transparent py-2"
                type="text"
                placeholder="E-mail"
              />
            </div>
            <div className="mt-6">
              <p className="text-gray-600">Message</p>
              <textarea
                className="border-2 border-gray-400 bg-transparent"
                name="Message"
                id=""
                cols="22"
                rows="3"
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
      </div>
    </div>
  );
};

export default Footer;
