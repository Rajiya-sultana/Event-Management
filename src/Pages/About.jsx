import React from "react";
import ayoLogo from "../assets/ayojan logo.png";
import my_pic from "../assets/myPic.jpeg";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className=" sm:text-6xl text-4xl text-customRed font-bold my-20">ABOUT US</h1>
        <div className="flex items-center justify-center">
          <img src={ayoLogo} alt="" />
          <div className="w-[150px] h-[150px] relative">
            <img
              src={my_pic}
              alt=""
              width="100%"
              className="rounded-full border-4 border-customRed  absolute right-10"
            />
          </div>
        </div>
        <p className="font-extrabold mt-3 sm:text-xl">
          Brought to you by @Frontend developer
        </p>
      </div>
      <div className="max-w-[700px] p-10 bg-white shadow-lg m-4 mt-20 ">
        <h1 className="text-2xl text-customRed font-bold mb-5">Our Story</h1>
        <p className="text-justify">
          At Aayojan, we understand the challenges and stress that often come
          with event planning. That's why we embarked on a mission to
          revolutionize the way people plan and celebrate special moments.
          Founded by a team of passionate event enthusiasts, Aayojan was born
          out of a shared vision to make event planning an enjoyable and
          seamless experience.
        </p>
      </div>
      <div className="flex justify-end m-4">
        <div className="max-w-[700px] p-10 bg-white shadow-lg">
          <h1 className="text-2xl text-customRed font-bold mb-5">
            What Sets Us Apart
          </h1>
          <p className="text-justify">
            At the core of Aayojan's philosophy is a commitment to delivering
            exceptional service and unparalleled convenience. We believe that
            every event, whether it's a wedding, a corporate seminar, a
            milestone birthday, or a simple get-together, deserves meticulous
            planning and attention to detail.
          </p>
        </div>
      </div>
      <div className="max-w-[700px] p-10 bg-white shadow-lg m-4 ">
        <h1 className="text-2xl text-customRed font-bold mb-5">Our Vision</h1>
        <p className="text-justify">
          Our vision is simple yet profound: To be your trusted partner in
          crafting unforgettable events. We aim to be the go-to platform for
          anyone seeking the perfect venue, delectable catering, and a plethora
          of additional services to make their event truly special.
        </p>
      </div>
      <div className="flex justify-end m-4">
        <div className="max-w-[700px] p-10 bg-white shadow-lg">
          <h1 className="text-2xl text-customRed font-bold mb-5">
            Our Commitment
          </h1>
          <p className="text-justify">
            At Aayojan, we're committed to making your event planning journey
            stress-free and enjoyable. Our team is dedicated to providing you
            with top-notch service, ensuring that every detail is meticulously
            taken care of.
          </p>
        </div>
      </div>
      <div className="max-w-[700px] p-10 m-4 ">
        <h1 className="text-2xl text-customRed font-bold mb-5">
          Why Choose Aayojan
        </h1>
        <p> Why Choose Aayojan:</p>
        <ul className="list-decimal ml-6 text-justify">
          <li>
            Diverse Venues: We offer a wide selection of event venues, from
            elegant banquet halls to picturesque outdoor locations, all tailored
            to your unique event type and preferences.
          </li>
          <li>
            Customized Catering: With Aayojan, catering becomes a breeze. Create
            a personalized menu that suits your dietary preferences and cultural
            themes.
          </li>
          <li>
            Endless Possibilities: Enhance your event with entertainment,
            photography, decorations, and more. We provide a comprehensive range
            of services to bring your vision to life.
          </li>
          <li>
            Corporate Excellence: Aayojan isn't just for personal celebrations.
            We specialize in seamless corporate event planning, ensuring that
            your business meetings, seminars, and conferences run flawlessly.
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
