import React, { useState } from "react";
import {useSurvey} from "@/context/SurveyContext"
import { useRouter } from "next/router";

const SurveyUI = () => {
  const { responses, updateResponse } = useSurvey();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const router = useRouter();

  const questions = [
    "How often do you feel physically or emotionally exhausted, even after resting?",
    "Do you feel that your workload is manageable?",
    "How often do you struggle to focus or concentrate on tasks that previously were easy for you?",
    "How do you feel about your work or daily responsibilities?",
    "Are you experiencing any physical symptoms, such as headaches, muscle tension, or stomach problems?",
    "How has your sleep been over the last few months?",
    "How often do you feel irritable or frustrated with people or tasks that usually wouldn't bother you?",
    "Have you withdrawn from social activities or relationships that you previously enjoyed?",
  ];

  const options = [
    ["Never", "Rarely", "Sometimes", "Often", "Always"],
    ["Yes, I can manage it well.", "Sometimes it feels overwhelming.", "No, it's often too much.", "I have no control over it."],
    ["Never", "Rarely", "Occasionally", "Frequently", "All the time"],
    ["I still feel motivated and engaged.", "I feel indifferent or detached sometimes.", "I often feel emotionally distant.", "I have completely lost interest or enthusiasm."],
    ["No, I feel physically healthy.", "Occasionally, but not too bothersome.", "Yes, regularly but manageable.", "Yes, and they are severely affecting me."],
    ["I sleep well and feel rested.", "I occasionally have trouble falling or staying asleep.", "I often have restless or disturbed sleep.", "I frequently wake up tired despite sleeping."],
    ["Never", "Occasionally", "Frequently", "Almost all the time"],
    ["No, I am socially active.", "Yes, occasionally but I still participate sometimes.", "Yes, I have withdrawn significantly.", "Yes, I have almost completely stopped engaging socially."],
  ];

  const totalQuestions = questions.length;

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleReset = () => {
    updateResponse(null, null);
    setCurrentQuestion(0);
  };

  const handleSubmit = () => {
    router.push("/score");
  };

  return (
    <>
      <div className="h-screen overflow-hidden relative flex flex-col items-center justify-between py-[28px] xl:px-0 px-8">
        <img src="../survey-bg.png" className="absolute xl:left-0 -left-12 xl:bottom-0 -bottom-48" />
        <div className="mx-auto container flex items-center justify-between">
        <svg width="52" height="33" viewBox="0 0 52 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.1077 32.1308C40.2551 32.1308 51.7238 20.6633 51.7238 6.51748C51.7238 4.50681 51.4921 2.55024 51.0539 0.673034C49.2971 0.292318 47.4732 0.0917969 45.6024 0.0917969C31.4551 0.0917969 19.9863 11.5593 19.9863 25.7051C19.9863 27.7158 20.218 29.6723 20.6562 31.5495C22.413 31.9303 24.2369 32.1308 26.1077 32.1308Z"
          fill="#7272E2"
        />
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.1081 32.1308C11.9608 32.1308 0.492029 20.6633 0.492029 6.51748C0.492029 4.51885 0.720972 2.57368 1.15406 0.706764C2.95796 0.304171 4.83362 0.0917969 6.75889 0.0917969C20.9063 0.0917969 32.375 11.5593 32.375 25.7051C32.375 27.7037 32.1461 29.6489 31.713 31.5158C29.9091 31.9184 28.0334 32.1308 26.1081 32.1308Z"
          fill="#7272E2"
        />
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.8702 25.708C38.3728 29.7038 32.4501 32.1308 25.9605 32.1308C19.4709 32.1308 13.5482 29.7038 9.05078 25.708C13.5482 21.7122 19.4709 19.2852 25.9605 19.2852C32.4501 19.2852 38.3728 21.7122 42.8702 25.708Z"
          fill="#7272E2"
        />
      </svg>
          <button onClick={handleReset} className="px-[18px] py-[4px] bg-[#6666b3] rounded-[5px] text-white text-xl font-semibold">
            Cancel
          </button>
        </div>

        <div className="relative z-30 flex flex-col items-center -mt-24 ">
          <h3 className="text-[#6666b3] text-2xl font-bold xl:w-[700px] w-full text-center">{questions[currentQuestion]}</h3>

          <div className="mt-4 xl:w-auto w-full">
            {options[currentQuestion].map((option, index) => (
              <div
                key={index}
                className={`xl:w-[430px] xl:px-0 px-8 text-center w-full  h-[55px] relative rounded-lg  mt-4 text-base  flex items-center justify-center cursor-pointer ${
                  responses[currentQuestion] === option ? "border-[#6666b3] border-2 text-[#6666b3] font-bold" : "font-medium border text-gray-500 border-gray-500"
                }`}
                onClick={() => updateResponse(currentQuestion, option)}
              >
                {option}
              </div>
            ))}

            <div className="mt-8 flex items-center justify-between">
              {currentQuestion > 0 ? (
                <button onClick={handlePrev} className="px-[18px] py-[4px] bg-[#6666b3] rounded-[5px] text-white text-xl font-semibold">
                  Previous
                </button>
              ) : (
                <button onClick={() => router.push("/")} className="px-[18px] py-[4px] bg-[#6666b3] rounded-[5px] text-white text-xl font-semibold">
                  Back to Home
                </button>
              )}
              {currentQuestion < totalQuestions - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={responses[currentQuestion] === null}
                  className={`px-[18px] py-[4px] bg-[#6666b3] rounded-[5px] text-white text-xl font-semibold ${
                    responses[currentQuestion] === null ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={responses[currentQuestion] === null}
                  className={`px-[18px] py-[4px] bg-[#6666b3] rounded-[5px] text-white text-xl font-semibold ${
                    responses[currentQuestion] === null ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center relative z-30">
          <div className="w-12 h-12 bg-[#6666b3] text-center flex items-center justify-center text-white text-lg font-medium rounded-full">
            {currentQuestion + 1}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default SurveyUI;
