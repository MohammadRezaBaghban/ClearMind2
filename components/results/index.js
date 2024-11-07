import React, { useEffect, useState } from "react";

function Index({ score }) {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: "",
    time: "",
    specialist: "",
    email: "",
  });

  const specialists = [
    {
      name: "Dr. Garshasp Mahabadi",
      description:
        "Dr. Garshasp Mahabadi, a renowned psychiatrist with 20+ years of experience, integrates psychiatry and neuroscience to provide holistic, patient-centered care. He is widely respected for his work in mood disorders and trauma recovery, earning international recognition and numerous awards.",
      image: "../specialist1.jpeg",
    },
    {
      name: "Dr. Kamran Hakimi",
      description:
        "  Dr. Kamran Hakimi, a respected mental health expert with over 20 years’ experience, specializes in anxiety and mood disorders, offering holistic, evidence-based care. Known for his research and advocacy, he integrates mindfulness and lifestyle modifications to enhance patient outcomes, earning national recognition.",
      image: "../specialist2.jpeg",
    },
    {
      name: "Dr. Ormazd Kabiri",
      description:
        "Dr. Ormazd Kabiri, a psychologist with over 15 years of experience, specializes in cognitive-behavioral and trauma-focused therapies, blending evidence-based methods with mindfulness to support resilience and growth. A respected author and speaker, he’s widely recognized for his empathetic, impactful approach to mental wellness.",
      image: "../specialist3.jpeg",
    },
    {
      name: "Dr. Lila Mehdi",
      description:
        "Dr. Lila Mehdi, a therapist with 18+ years in relationship and family counseling, combines evidence-based practices with emotional intelligence to strengthen connections. A published author and speaker, she’s highly respected for her compassionate, solution-focused approach to mental wellness and helps client till the end.",
      image: "../specialist4.jpeg",
    },
  ];

  useEffect(() => {
    fetch("/api/blogs")
      .then((response) => response.json())
      .then((data) => {
        const shuffledBlogs = data.blogs.sort(() => 0.5 - Math.random()).slice(0, 4);
        setBlogs(shuffledBlogs);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const handleOpenModal = (specialist) => {
    setAppointmentDetails({ ...appointmentDetails, specialist });
    setConfirmationMessage("");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setAppointmentDetails({ ...appointmentDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send the data to your backend or API
    console.log(appointmentDetails);
    // Set confirmation message
    setConfirmationMessage(
      `Thank you for booking an appointment with ${appointmentDetails.specialist}. You will soon receive a link at ${appointmentDetails.email}.`
    );
    // Close the form after submission
    setAppointmentDetails({ date: "", time: "", specialist: "", email: "" });
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="mx-auto container flex lg:flex-row flex-col items-center justify-between xl:py-20 py-10 xl:px-0 px-8">
        <div>
          <h1 className="text-[#6666b3]  xl:text-5xl text-[32px] font-bold lg:my-4 my-2 xl:text-left text-center">
            {score <= 10 && "You are at a low risk of burnout. likely managing well."}
            {score > 10 && score <= 18 && "You are at a moderate risk of burnout. experiencing some symptoms."}
            {score > 18 && score <= 27 && "You are at a high risk of burnout. take some time to recharge."}
            {score > 27 && "You are at a severe risk of burnout. please consider seeking help."}
          </h1>
          <p className=" text-black text-lg font-normal xl:text-left text-center">Your Score is : {score}</p>
        </div>
        <img
          src={
            score <= 10
              ? "../mood/lowrisk.png"
              : score > 10 && score <= 18
              ? "../mood/modeRisk.png"
              : score > 18 && score <= 27
              ? "../mood/highrisk.png"
              : "../mood/severe.png"
          }
          alt="Burnout risk level illustration"
          className="lg:w-1/2 lg:mt-0 mt-10"
        />
      </div>
      <div>
        <h2 className="text-[#252c39] text-[38px] font-semibold leading-[50px] tracking-wide  mx-auto container mt-20 xl:px-0 px-8 lg:text-left text-center">
          Blogs For You
        </h2>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8 xl:px-0 px-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="cursor-pointer">
              <img src={blog.image} alt={blog.title} className="w-full h-48 md:h-64 object-cover rounded-md" />
              <h3 className="text-lg mt-4 font-semibold  mb-2">{blog.title}</h3>
              <p className="text-gray-700"> {blog.content.split(" ").slice(0, 15).join(" ")}...</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-40">
        <h2 className="text-[#252c39] text-[38px] font-semibold leading-[50px] tracking-wide mx-auto container lg:text-left text-center">
          Recommended Specialist
        </h2>
        <div className="flex items-center flex-wrap justify-center gap-6 mt-8">
          {specialists.map((specialist) => (
            <div
              key={specialist.name}
              className="cursor-pointer w-[350px] border p-2 2xl:h-[570px] xl:h-[600px] h-[570px] border-gray-300 rounded-md"
            >
              <img
                src={specialist.image}
                alt={specialist.name}
                className="w-full h-48 md:h-64 object-cover rounded-md"
              />
              <h3 className="text-lg mt-4 font-semibold  mb-2">{specialist.name}</h3>
              <p className="text-gray-700">{specialist.description}</p>
              <button
                onClick={() => handleOpenModal(specialist.name)}
                className="bg-[#6666B3] mt-3 py-[8px] w-full px-4 rounded-md text-white font-semibold"
              >
                Book an appointment
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mt-40">
          <h2 className="text-[#252c39] text-[38px] lg:text-left text-center font-semibold leading-[50px] tracking-wide mx-auto container ">
            Frequently Asked Question
          </h2>
          <div className="mx-auto container">
            <div className="flex justify-center items-center flex-col">
              <div className="text-left flex items-center justify-center"></div>
              <div className="px-10 lg:px-0 grid lg:grid-cols-2 grid-cols-1 lg:justify-between justify-center items-start mt-12 lg:gap-x-32 md:gap-y-14 gap-y-7">
                <div className="flex justify-start items-start flex-col">
                  <div>
                    <h3 className="  text-xl md:text-2xl font-semibold tracking-tighter">
                      What can I expect during my first therapy session?
                    </h3>
                  </div>
                  <div className="text-gray-600 mt-3 text-sm md:text-base leading-normal">
                    <p>
                      In the first session, you'll discuss your goals, concerns, and background so your therapist can
                      understand how best to help.
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-start flex-col">
                  <div>
                    <h3 className="  text-xl md:text-2xl font-semibold tracking-tighter">
                      How do I know if therapy is right for me?
                    </h3>
                  </div>
                  <div className="text-gray-600 mt-3 text-sm md:text-base leading-normal">
                    <p>
                      Therapy can benefit anyone facing emotional challenges, stress, or simply wanting personal growth
                      and clarity.
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-start flex-col">
                  <div>
                    <h3 className="  text-xl md:text-2xl font-semibold tracking-tighter">
                      How long does therapy usually take to show results?
                    </h3>
                  </div>
                  <div className="text-gray-600 mt-3 text-sm md:text-base leading-normal">
                    <p>This varies by individual, but many people notice positive changes within a few sessions.</p>
                  </div>
                </div>
                <div className="flex justify-start items-start flex-col">
                  <div>
                    <h3 className="  text-xl md:text-2xl font-semibold tracking-tighter">
                      What types of therapy do you specialize in?
                    </h3>
                  </div>
                  <div className="text-gray-600 mt-3 text-sm md:text-base leading-normal">
                    <p>
                      I specialize in evidence-based therapies such as cognitive-behavioral, trauma-focused, and
                      mindfulness-based practices.
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-start flex-col">
                  <div>
                    <h3 className="  text-xl md:text-2xl font-semibold tracking-tighter">
                      Will everything I discuss in therapy remain confidential?
                    </h3>
                  </div>
                  <div className="text-gray-600 mt-3 text-sm md:text-base leading-normal">
                    <p>Yes, all discussions are private and confidential, with few legal exceptions for safety.</p>
                  </div>
                </div>
                <div className="flex justify-start items-start flex-col">
                  <div>
                    <h3 className="  text-xl md:text-2xl font-semibold tracking-tighter">
                      How can I prepare for my therapy sessions to get the most out of them?
                    </h3>
                  </div>
                  <div className="text-gray-600 mt-3 text-sm md:text-base leading-normal">
                    <p>Reflect on your goals and be open to discussing your feelings and challenges honestly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {confirmationMessage && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <p className="text-lg font-semibold text-gray-600">{confirmationMessage}</p>
            <button
              onClick={() => setConfirmationMessage("")}
              className="mt-4 bg-[#6666B3] py-[8px] px-4 rounded-md text-white font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-[400px] relative">
            <button onClick={handleCloseModal} className=" text-xl font-bold absolute right-0 top-0 p-4">
              X
            </button>
            <h2 className="text-2xl font-semibold mb-4 pt-4">
              Book an Appointment with {appointmentDetails.specialist}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Select Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={appointmentDetails.date}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Select Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  value={appointmentDetails.time}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={appointmentDetails.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-[#6666B3] py-[8px] px-4 rounded-md text-white font-semibold">
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
