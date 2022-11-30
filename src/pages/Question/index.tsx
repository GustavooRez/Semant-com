import React from "react";
import { QuestionProvider } from "../../contexts/Question/QuestionContext";
import QuestionMain from './Main'

const Question = () => {
  return (
        <QuestionProvider>
          <QuestionMain />
        </QuestionProvider>
  );
};
  
export default Question;