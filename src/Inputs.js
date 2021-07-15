import React,{useContext, useState} from 'react'
import Look from './Look';
import LookMCQ from './LookMCQ';

export const Inputs = () => { 
  const [Questions, setQuestions] = useState([
    {  
      Uname:"",
      Stream:"",
      Subjectcode:"",
      Subjectname:"",
      date:"",
      TimeStart:"",
      TimeEnd:"",
      TotalMarks:"",
      Qnumber:"1",
      Question: "",
      optionA: "",
      optionB: "",
      optionC:"",
      optionD:""
    }
  ])
    const [Details,setDetails] = useState([
      {
       Uname:"",
      Stream:"",
      Subjectcode:"",
      Subjectname:"",
      date:"",
      TimeStart:"",
      TimeEnd:"",
      TotalMarks:""
      }
    ])  
   const [Question,setQuestion]= useState('')
   const [optionA,setOptionA] = useState('')
   const [optionB, setOptionB] = useState('')
   const [optionC, setOptionC] = useState('')
   const [optionD, setOptionD] = useState('')
   const [Uname, setUname] = useState('')
   const [stream, setStream] = useState('')
   const [date,setDate] = useState('')
   const [Subjectcode,setSubjectcode] = useState('')
   const [Subjectname,setSubjectname] = useState('')
   const [TimeStart,setTimestart] = useState('')
   const [TimeEnd,setTimeEnd] = useState('')
   const [TotalMarks,setTotalMarks] = useState('')

   const updateQuestion = (e) =>{
      setQuestion(e.target.value);
   }
   const updateOptionA = (e) =>{
    setOptionA(e.target.value);
  }
   const updateOptionB = (e) =>{
   setOptionB(e.target.value);
  }
  const updateOptionC = (e) =>{
    setOptionC(e.target.value);
  }
  const updateOptionD = (e) =>{
    setOptionD(e.target.value);
  }
  const updateUname = (e) => {
    setUname(e.target.value.toUpperCase())
  } 
  const updateStream = (e) =>{
    setStream(e.target.value)
  }
  const updateDate = (e) => {
    setDate(e.target.value)
  }
  const updateSubjectcode = (e) =>{
    setSubjectcode(e.target.value)
  }
  const updateSubjectname =(e) =>{
    setSubjectname(e.target.value)
  }
  const updateTimeStart=(e) =>{
    setTimestart(e.target.value)
  }
  const updateTimeEnd = (e) =>{
    setTimeEnd(e.target.value)
  }
  const updateTotalMarks = (e) =>{
    setTotalMarks(e.target.value)
  }
   const AddQuestion = (e) => {
    e.preventDefault();
    setQuestions(preQuestions =>[ ...preQuestions,{Question:Question,optionA:optionA,optionB:optionB,optionC:optionC,optionD:optionD}])
   }
  
   const Showpreview = (e) => {
     e.preventDefault()
     setDetails(preValue =>[{Uname:Uname,Stream:stream,date:date,Subjectcode:Subjectcode,Subjectname:Subjectname,TimeStart:TimeStart,TimeEnd:TimeEnd,TotalMarks:TotalMarks}])
   }
  
    return ( 
         
      <div id="Contenttab">
             <h1> Question Paper Style 1 (OMR format) </h1>
      <div id="Inputtab">
         <form onSubmit={Showpreview}>
           <label >Univercity/collage name : </label>
           <input type="text" className="questions" value={Uname} onChange={updateUname}></input><br/>
           <label>Enter Stream : </label>
           <input type="text" className="questions" value={stream} onChange={updateStream}></input><br/>
          <label>subject code : </label>
          <input type="text" className="mcqs" value={Subjectcode} onChange={updateSubjectcode}></input><br/>
          <label>subject name : </label>
          <input type="text" className="mcqs" value={Subjectname} onChange={updateSubjectname}></input><br/>
          <label>Date:</label>
          <input type="Date" className="mcqs" value={date} onChange={updateDate} ></input><br/>  
          <label >Time:</label><input type="time" value={TimeStart} onChange={updateTimeStart}></input>
          <label > To </label><input type="time" value={TimeEnd} onChange={updateTimeEnd}></input><br/>
          <label>Total marks : </label>
          <input type="number"className="mcqs" value={TotalMarks} onChange={updateTotalMarks}></input><br/>
           <button className="AddQ" type="submit">Preview</button>
        </form>   
        <hr/>  
        <form onSubmit={AddQuestion}>
         <label>Question: </label><input type="text" className="questions" name="Question" value={Question} onChange={updateQuestion}/><br/>
         <label>A:</label><input type="text" className="mcqs" name="optionA" value={optionA} onChange={updateOptionA}/>
        <label>B:</label><input type="text" className="mcqs" name="optionB" value={optionB} onChange={updateOptionB}/> <br/>
         <label>C:</label><input type="text" className="mcqs" name="optionC" value={optionC} onChange={updateOptionC}/>
        <label>D:</label><input type="text" className="mcqs" name="optionD" value={optionD} onChange={updateOptionD}/><br/><br/>
         <button className="AddQ">Add Question</button>
        </form>
           
        </div>
        <div id="previewtab">
          <span className="topleft">Enrollment No: ______________</span> 
          <span className="topright">Seat No :_____________</span><br/>
          {Details.map(detail => (<Look
            Uname = {detail.Uname} 
            stream ={detail.Stream}
            Subjectcode={detail.Subjectcode}
            Subjectname ={detail.Subjectname}
            Date={detail.date}
            TimeStart={detail.TimeStart}
            TimeEnd={detail.TimeEnd}
            TotalMarks={detail.TotalMarks} />))}
          <table>
            {Questions.map(questions =>
           (
             <>
            <LookMCQ Question={questions.Question}
             optionA={questions.optionA}
             optionB={questions.optionB}
            optionC={questions.optionC}
           optionD={questions.optionD} />
           </>
         ))}
         </table>

        </div>

        </div>
    )
}