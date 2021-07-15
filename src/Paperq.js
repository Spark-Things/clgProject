import React, {useState} from "react";

function Paperq(){

    const [question, setQuestion] = useState("");
    const [questions, setQuestions] = useState([]);

    function handleChange(event){
        const userQuestion = event.target.value;

        setQuestion(userQuestion);
        event.preventDefault();
    }

    function handleSubmit(event){
        setQuestions((prevQuestion) => {
            return [...prevQuestion, question];
        });

        setQuestion("");

        event.preventDefault(); 
    }

    function handleRemove(event){
        const questionID = Number(event.target.id);

        setQuestions((prevQuestions) => {
            return prevQuestions.filter((preQuestion, index) => {
                return index !== questionID;
            });
        })
    }

    const displayQuestions = questions.map((elem, index) => {
        return <li 
            key={index} 
            style={{color: "white"}}>
            <button id={index} onClick={handleRemove} type="button">Remove</button>
            {elem}
        </li>
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter question"
                    required
                    onChange={handleChange}
                    value={question}
                    />
                <button type="submit">Enter</button>
            </form>

            {displayQuestions}
        </div>
    )
}

export default Paperq;