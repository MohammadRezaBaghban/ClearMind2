import { useSurvey } from "../context/SurveyContext";
import Score from "@/components/results/index";
import Layout from "../components/layout/layout";

const ScorePage = () => {
  const { responses } = useSurvey();

  // Define the scoring map for calculations
  const scoringMap = {
    Never: 0,
    Rarely: 1,
    Sometimes: 2,
    Often: 3,
    Always: 4,
    "Yes, I can manage it well.": 0,
    "Sometimes it feels overwhelming.": 1,
    "No, it's often too much.": 2,
    "I have no control over it.": 3,
    "I still feel motivated and engaged.": 0,
    "I feel indifferent or detached sometimes.": 1,
    "I often feel emotionally distant.": 2,
    "I have completely lost interest or enthusiasm.": 3,
    "No, I feel physically healthy.": 0,
    "Occasionally, but not too bothersome.": 1,
    "Yes, regularly but manageable.": 2,
    "Yes, and they are severely affecting me.": 3,
    "I sleep well and feel rested.": 0,
    "I occasionally have trouble falling or staying asleep.": 1,
    "I often have restless or disturbed sleep.": 2,
    "I frequently wake up tired despite sleeping.": 3,
    Never: 0,
    Occasionally: 1,
    Frequently: 2,
    "Almost all the time": 3,
    "No, I am socially active.": 0,
    "Yes, occasionally but I still participate sometimes.": 1,
    "Yes, I have withdrawn significantly.": 2,
    "Yes, I have almost completely stopped engaging socially.": 3,
  };

  // Function to calculate the total score
  const calculateScore = () => {
    if (!responses) return 0;
    return responses.reduce((total, response) => total + (scoringMap[response] || 0), 0);
  };

  const score = calculateScore();

  // Data for the chart

  return (
    //  <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md border border-gray-300">
    //    <h1 className="text-3xl font-serif mb-6">Survey Results</h1>
    //    <p className="text-lg mb-4">Your total score: <strong>{score}</strong></p>
    //    <p className="mb-2">
    //      {score <= 10 && "You are at a low risk of burnout; likely managing well."}
    //      {score > 10 && score <= 18 && "You are at a moderate risk of burnout; experiencing some symptoms."}
    //      {score > 18 && score <= 27 && "You are at a high risk of burnout; take some time to recharge."}
    //      {score > 27 && "You are at a severe risk of burnout; please consider seeking help."}
    //    </p>

    //    <Bar data={data} />
    //  </div>
    <>
      <Layout>
        <Score score={score}/>
      </Layout>
    </>
  );
};

export default ScorePage;
