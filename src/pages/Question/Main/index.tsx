import { useContext, useState } from "react"
import "../styles.css"
import { QuestionContext } from "../../../contexts/Question/QuestionContext"
import Button from 'react-bootstrap/Button'
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const QuestionMain = () => {

    const { question, completeRequisition, questionAvaliable, questionItem, questionOptions } = useContext(QuestionContext)
    const [idQuestionCorret, setIdQuestionCorret] = useState(25);
    const [correct, setCorrect] = useState(false);
    const { world } = useParams();

    function markQuestion(id: number, answer: boolean) {
        const option = window.document.getElementById(`option${id}`)
        if (option) {
            if (answer) {
                const questions = window.document.querySelectorAll<HTMLElement>("#questions button")
                questions.forEach(question => {
                    if (question.id !== `option${id}`) {
                        question.style.backgroundColor = "red";
                    }
                });
                option.style.backgroundColor = "green";
                setCorrect(true);
                setIdQuestionCorret(id);
            } else {
                option.style.backgroundColor = "red";
            }
        }
    }

    function nextQuestion() {
        const questionsComplete = window.localStorage.getItem(`questionsCompleteWorld${world}`)
        if (questionsComplete) {
            window.localStorage.setItem(`questionsCompleteWorld${world}`, `${questionsComplete},${idQuestionCorret}`)
        } else {
            window.localStorage.setItem(`questionsCompleteWorld${world}`, `${idQuestionCorret}`)
        }
        window.location.reload()
    }

    function resetWorld() {
        window.localStorage.setItem(`questionsCompleteWorld${world}`, "")
        window.location.reload()
    }

    function nextWorld() {
        if (world) {
            window.location.assign(`/question/${parseInt(world) + 1}`)
        }
    }

    function returnButton() {
        window.location.assign("/home")
    }

    return (
        completeRequisition ?
            <div id="question">
                {questionAvaliable ?
                    <>
                        <div>
                            <div className="display-flex" style={{minHeight: "6vh"}}>
                                <Button
                                    variant="primary"
                                    onClick={() => returnButton()}
                                >
                                    Voltar
                                </Button>
                                
                        {correct ?
                            <Button
                                variant="primary"
                                onClick={() => nextQuestion()}
                                style={{padding: "0.5% 1%", fontSize: "1.5rem"}}
                            >
                                Próxima questão
                            </Button> : <></>}
                            </div>
                            <h1 className="display-1 fw-bold">{question.phrase}</h1>
                            <h1>{question.question}</h1>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <img className="image-question" src={questionItem.image} />
                            </div>
                            <div className="col-6" style={{ display: "grid" }} id="questions">
                                {questionOptions.map((option: any) => (
                                    <Button
                                        id={"option" + option.id}
                                        style={{ margin: "1%", fontSize: "2rem" }}
                                        key={option.id}
                                        variant="primary"
                                        onClick={() => markQuestion(option.id, option.correct)}
                                    >
                                        {option.name}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </> : <>
                        <Container>
                            <div className="text-center">
                                <h1 className="display-1 fw-bold py-5">Parabéns, você completou todos os itens do {question.name}!</h1>
                            </div>
                            <div className="display-flex">

                                <Button
                                    variant="primary"
                                    onClick={() => resetWorld()}
                                    className="button-complete"
                                >
                                    Resetar fase
                                </Button>
                                {world !== "1" ?
                                <Button
                                    variant="primary"
                                    onClick={() => nextWorld()}
                                    className="button-complete"
                                >
                                    Próxima fase
                                </Button> : <></>}
                            </div>
                        </Container>  </>}
            </div> : <></>
    )
}

export default QuestionMain