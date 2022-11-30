import { ReactNode, useState, createContext, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { LoadingContext } from '../Loading/LoadingContext';

interface QuestionProviderProps {
    children: ReactNode;
}

interface QuestionContextData {
    question: any;
    questionItem: any;
    questionAvaliable: boolean;
    questionOptions: any;
    completeRequisition: boolean;
}

export const QuestionContext = createContext({} as QuestionContextData);

export function QuestionProvider({ children }: QuestionProviderProps) {
    const { changeVisibility } = useContext(LoadingContext)
    const [question, setQuestion] = useState(undefined);
    const [questionAvaliable, setQuestionAvaliable] = useState(true);
    const [questionItem, setQuestionItem] = useState();
    const [questionOptions, setQuestionOptions] = useState({});
    const [completeRequisition, setCompleteRequisition] = useState(false);
    const { world } = useParams();
    let questionsComplete;

    useEffect(() => {
        changeVisibility(true);
        fetch("/data/worlds.json")
            .then(res => res.json()).then(res => {
                if (world) {
                    questionsComplete = window.localStorage.getItem(`questionsCompleteWorld${world}`)
                    if (questionsComplete) {
                        if(questionsComplete.split(",").length === res.data[world].itens.length - 1){
                            setQuestionAvaliable(false);
                        }else{
                            const randomNumber = generateRandomNumber(0, res.data[world].itens.length - 1, questionsComplete.split(","))
                            setQuestionItem(res.data[world].itens[randomNumber])
                            setQuestionOptions(generateOptions(res.data[world].itens, randomNumber))
                        }
                    }else{
                        setQuestionItem(res.data[world].itens[0])
                        setQuestionOptions(generateOptions(res.data[world].itens, 0))
                    }
                    setQuestion(res.data[world])
                }
                changeVisibility(false);
                setCompleteRequisition(true);
            }).catch((error: any) => {
                console.log(error);
            })
    }, [])

    return (
        <QuestionContext.Provider value={{ question, completeRequisition,questionAvaliable, questionItem, questionOptions }}>
            {children}
        </QuestionContext.Provider>
    )
}

function generateRandomNumber(min: number, max: number, questionsComplete: any) {
    let aleatoryNumber: number, include: boolean;
    questionsComplete = questionsComplete.map((question: any) => parseInt(question))
    do {
        aleatoryNumber = Math.floor(Math.random() * (max - min) + min)
        console.log("includes", questionsComplete.includes(aleatoryNumber))
        include = questionsComplete.includes(aleatoryNumber)
    } while (include !== false);
    return aleatoryNumber;
}

function generateOptions(itens: any, activeItem: number) {
    let options: any = [activeItem];
    const questions = [];

    for (let index = 0; index < 3; index++) {
        options.push(generateRandomNumber(0, itens.length - 1, options))
    }
    options = options.sort();
    for (let index = 0; index < options.length; index++) {
        questions.push({
            "id": options[index],
            "name": itens[options[index]].name,
            "correct": options[index] === activeItem ? true : false
        })
    }
    return questions;
}