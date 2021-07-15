import React from 'react'

const LookQuestion = (props) => {
  return(
    <> 
       <h3>{props.Question}</h3>
       <h4>{props.QuestionA}</h4>
       <h4>{props.QuestionB}</h4>
    </>
  )
}
export default LookQuestion;