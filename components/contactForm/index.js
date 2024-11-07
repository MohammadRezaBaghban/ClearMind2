import React, { useState } from "react";

function index() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data
    console.log({
      firstName,
      lastName,
      email,
      message,
    });
    setSubmitted(true); // Show the thank you message after submission
  };

  return (
    <>
      <div className="mx-auto container flex lg:flex-row flex-col items-center justify-between xl:py-20 py-10 xl:px-0 px-8">
        <div>
          <p className="text-[#8c8c8c] xl:text-2xl text-xl font-medium uppercase lg:text-left text-center">ASK ANYTHING FROM US</p>
          <h1 className="text-[#6666b3]  xl:text-5xl text-[32px] font-bold lg:my-4 my-2 lg:text-left text-center">Contact Us</h1>
        </div>
        <img src="../blogs.png" className="lg:w-1/2 lg:mt-0 mt-10" />
      </div>

      <div>
        {!submitted ? (
          <div className="w-full h-full lg:flex items-start justify-center xl:py-20 py-8 px-4">
            <div className="lg:w-1/2 xl:mr-12 lg:mr-6">
              <img
                tabIndex={0}
                src="https://i.ibb.co/n0f7Np4/pexels-anna-shvets-4588047-1.png"
                alt="image of a dog with heart"
                className="w-full h-full"
              />
              <div className="flex flex-wrap items-center mt-8">
                <div
                  arial-label="Address"
                  className="mr-6 border md:w-auto w-full rounded border-gray-200 py-6 pr-9 pl-6"
                >
                  <p className="text-base font-semibold leading-4 text-gray-900">Los Angeles</p>
                  <p className="text-base leading-4 mt-4 text-gray-600">190 Collins Street</p>
                  <p className="text-base leading-4 mt-2 text-gray-600">CA 9090 USA</p>
                </div>
                <div className="mr-6 border md:w-auto w-full md:mt-0 mt-4 rounded border-gray-200 py-6 pr-9 pl-6">
                  <p className="text-base font-semibold leading-4 text-gray-900">Berlin</p>
                  <p className="text-base leading-4 mt-4 text-gray-600">190 Collins Street</p>
                  <p className="text-base leading-4 mt-2 text-gray-600">CA 9090 USA</p>
                </div>
                <div className="mr-6 xl:mt-0 md:w-auto w-full lg:mt-4 md:mt-0 mt-4 border rounded border-gray-200 py-6 pr-9 pl-6">
                  <p className="text-base font-semibold leading-4 text-gray-900">Maldives</p>
                  <p className="text-base leading-4 mt-4 text-gray-600">190 Collins Street</p>
                  <p className="text-base leading-4 mt-2 text-gray-600">CA 9090 USA</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 xl:pl-12 lg:pl-6 lg:pt-0 pt-4">
              <h1 aria-label="Get in touch" role="heading" className="text-3xl font-bold text-gray-900">
                Get in touch
              </h1>
              <p role="contentinfo" className="mt-4 text-base leading-6 text-gray-600 lg:block hidden">
                It is a long established fact that a reader will be distracted by the readable
              </p>
              <div className="xl:flex items-center justify-between mt-10 w-full">
                <div className="flex flex-col flex-shrink-0 xl:w-1/2">
                  <p className="text-base font-medium leading-4 mb-4 text-gray-800">First Name</p>
                  <input
                    type="text"
                    aria-label="Please input first name"
                    className="w-full p-3 text-base leading-none text-gray-500 bg-gray-100 rounded placeholder-gray-500"
                    placeholder="eg. William"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="xl:ml-6 xl:mt-0 mt-4 flex flex-col flex-shrink-0 xl:w-1/2">
                  <p className="text-base font-medium leading-4 mb-4 text-gray-800">Last Name</p>
                  <input
                    type="text"
                    aria-label="Please input Last name"
                    className="w-full p-3 text-base leading-none text-gray-500 bg-gray-100 rounded placeholder-gray-500"
                    placeholder="eg. Smith"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-6">
                <p className="text-base font-medium leading-4 mb-4 text-gray-800">Email Address</p>
                <input
                  type="email"
                  aria-label="Please enter email"
                  className="w-full p-3 text-base leading-none text-gray-500 bg-gray-100 rounded placeholder-gray-500"
                  placeholder="eg. william.smith@doeco.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mt-6">
                <p className="text-base font-medium leading-4 mb-4 text-gray-800">Message</p>
                <textarea
                  aria-label="Please leave comments"
                  className="w-full resize-none h-40 p-3 text-base leading-none text-gray-500 bg-gray-100 rounded placeholder-gray-500"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                role="button"
                aria-label="send message"
                className="px-[22px] py-[9px] bg-[#6666b3] rounded-[5px] justify-start items-center gap-2.5 inline-flex text-white text-2xl font-semibold mt-12"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
          </div>
        ) : (
          <div className="mx-auto container py-20 text-center">
            <h1 className="text-3xl font-bold text-[#6666b3]">Thank you for messaging us!</h1>
            <p className="text-lg text-gray-600 mt-4">We will get back to you as soon as possible.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default index;
