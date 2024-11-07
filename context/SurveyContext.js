import { createContext, useContext, useState } from 'react';

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [responses, setResponses] = useState(Array(8).fill(null)); // 8 questions
  const [score, setScore] = useState(0);

  const updateResponse = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
    calculateScore(newResponses);
  };

  const calculateScore = (responses) => {
    const scoring = responses.map(response => {
      switch (response) {
        case 'Never':
        case 'No':
          return 0;
        case 'Rarely':
        case 'Mild':
          return 1;
        case 'Sometimes':
        case 'Moderate':
          return 2;
        case 'Often':
        case 'Severe':
          return 3;
        case 'Always':
        case 'Very severe':
          return 4;
        default:
          return 0;
      }
    });
    const totalScore = scoring.reduce((sum, val) => sum + val, 0);
    setScore(totalScore);
  };

  return (
    <SurveyContext.Provider value={{ responses, score, updateResponse }}>
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = () => useContext(SurveyContext);
