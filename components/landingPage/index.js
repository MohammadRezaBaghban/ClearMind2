import { Router } from "next/router";
import React from "react";
import Button from "../re-usableComponents/button";

function index() {
   const specialists = [
      {
        name: "Dr. Garshasp Mahabadi",
        description: "Dr. Garshasp Mahabadi, a renowned psychiatrist with 20+ years of experience, integrates psychiatry and neuroscience to provide holistic, patient-centered care. He is widely respected for his work in mood disorders and trauma recovery, earning international recognition and numerous awards.",
        image: "../specialist1.jpeg",
      },
      {
        name: "Dr. Kamran Hakimi",
        description: "  Dr. Kamran Hakimi, a respected mental health expert with over 20 years’ experience, specializes in anxiety and mood disorders, offering holistic, evidence-based care. Known for his research and advocacy, he integrates mindfulness and lifestyle modifications to enhance patient outcomes, earning national recognition.",
        image: "../specialist2.jpeg",
      },
      {
        name: "Dr. Ormazd Kabiri",
        description: "Dr. Ormazd Kabiri, a psychologist with over 15 years of experience, specializes in cognitive-behavioral and trauma-focused therapies, blending evidence-based methods with mindfulness to support resilience and growth. A respected author and speaker, he’s widely recognized for his empathetic, impactful approach to mental wellness.",
        image: "../specialist3.jpeg",
      },
      {
        name: "Dr. Lila Mehdi",
        description: "Dr. Lila Mehdi, a therapist with 18+ years in relationship and family counseling, combines evidence-based practices with emotional intelligence to strengthen connections. A published author and speaker, she’s highly respected for her compassionate, solution-focused approach to mental wellness and helps client till the end.",
        image: "../specialist4.jpeg",
      },
    ];
  return (
    <>
      <div className="mx-auto container relative z-20 flex lg:flex-row flex-col items-center lg:justify-between justify-center pt-10 lg:pt-20 2xl:px-0 px-8">
        <div className="flex flex-col lg:items-start items-center lg:mb-0 mb-8" >
          <h1 className="xl:w-[570px] text-[#252c39] lg:text-left text-center xl:text-[42px] text-[32px] font-semibold leading-[45px] tracking-wide ">
            Feel connected, empowered, and heard
          </h1>
          <p className="xl:w-[563px] text-[#232c3a] text-base lg:text-left text-center font-normal mt-4 mb-4">
            We’ll begin by asking you basic questions to get to know you better and to understand your needs. Our simple
            assessments are used frequently throughout your journey to help measure your wellness and track your growth
            over time.{" "}
          </p>
         <Button link={"#survey"} text={"Get Started"}/>
        </div>
        <img src="../hero-img.png" alt="Hero Image" className="lg:w-1/2" />
      </div>
      <h2 className="text-[#252c39] text-[38px] lg:text-left text-center font-semibold leading-[50px] tracking-wide  mx-auto container mt-20 2xl:px-0 px-8">
        Why Choose Clear Mind?
      </h2>
      <div className="flex lg:flex-row flex-col items-center justify-between mx-auto container mt-[85px] 2xl:px-0 px-8">
        <div>
          <div className="relative">
            <div className="xl:w-[347px] w-[300px] h-[212px] relative bg-[#DADBF0] flex items-center rounded-t-[20px]">
              <img src="../img1.png" className="absolute top-0 z-10 -mt-16 ml-5" />
            </div>
            <div className="xl:w-[348px] w-[300px] h-[214px] bg-[#f7f8ff] rounded-b-[20px] relative z-20 pt-[19px] px-[22px] text-center">
              <p className="text-[#252c39] text-2xl font-medium ">Your story matters</p>
              <p className=" h-[136px] text-center text-[#232c3a] text-base font-normal mt-4">
                Everyone has a story worth sharing. With Clear Mind, you’ll learn that you’re in a safe space to explore
                the nature of your experiences and challenges.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className=" relative lg:mt-0 mt-24">
            <div className="xl:w-[347px] w-[300px] h-[212px] relative bg-[#DADBF0] flex items-center rounded-t-[20px]">
              <img src="../img2.png" className="absolute top-0 z-10 -mt-16 ml-5" />
            </div>
            <div className="xl:w-[348px] w-[300px] h-[214px] bg-[#f7f8ff] rounded-b-[20px] relative z-20 pt-[19px] px-[22px] text-center">
              <p className="text-[#252c39] text-2xl font-medium ">Your story matters</p>
              <p className=" h-[136px] text-center text-[#232c3a] text-base font-normal mt-4">
                Everyone has a story worth sharing. With Clear Mind, you’ll learn that you’re in a safe space to explore
                the nature of your experiences and challenges.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className=" relative lg:mt-0 mt-12">
            <div className="xl:w-[347px] w-[300px] h-[212px] relative bg-[#DADBF0] flex items-center rounded-t-[20px]">
              <img src="../img3.png" className="absolute top-0 z-10 -mt-5 ml-5" />
            </div>
            <div className="xl:w-[348px] w-[300px] h-[214px] bg-[#f7f8ff] rounded-b-[20px] relative z-20 pt-[19px] px-[22px] text-center">
              <p className="text-[#252c39] text-2xl font-medium ">Your story matters</p>
              <p className=" h-[136px] text-center text-[#232c3a] text-base font-normal mt-4">
                Everyone has a story worth sharing. With Clear Mind, you’ll learn that you’re in a safe space to explore
                the nature of your experiences and challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 2xl:px-0 px-8">
        <h2 className="text-[#252c39] text-[38px] lg:text-left text-center font-semibold leading-[50px] tracking-wide mx-auto container">
          Our Specialist
        </h2>
        <div className="flex items-center flex-wrap justify-center gap-6 mt-8">
        {specialists.map((specialist) => (
            <div key={specialist.name} className="cursor-pointer w-[350px] border p-2 2xl:h-[570px] xl:h-[600px] h-[570px] border-gray-300 rounded-md">
              <img src={specialist.image} alt={specialist.name} className="w-full h-48 md:h-64 object-cover rounded-md" />
              <h3 className="text-lg mt-4 font-semibold  mb-2">{specialist.name}</h3>
              <p className="text-gray-700">{specialist.description}</p>
              
            </div>
          ))}
        </div>
      </div>

      <div id="survey" className="mx-auto container mt-20 flex lg:flex-row flex-col items-center justify-between 2xl:px-0 px-8">
        <div className="flex flex-col lg:items-start items-center">
          <h2 className="text-[#252c39] text-[38px] font-semibold leading-[50px] tracking-wide lg:text-left text-center ">Let’s start with you</h2>
          <p className="xl:w-[563px] text-[#232c3a] text-base font-normal my-4 xl:pr-0 pr-4 lg:text-left text-center">
            We’ll begin by asking you basic questions to get to know you better and to understand your needs. Our simple
            assessments are used frequently throughout your journey to help measure your wellness and track your growth
            over time.{" "}
          </p>
          <div>
          <Button link={"/survey"} text={"Take A Survey"}/>
          </div>
        </div>
        <img src="../get-starteds.png" className="lg:mt-0 mt-8" />
      </div>
      
    </>
  );
}

export default index;
