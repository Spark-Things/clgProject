import React from 'react'

const Look = (props) =>{
    return(
      <>
         <h2>{props.Uname}</h2>
         <h4>{props.stream}</h4><br/>
         <p className="center">Subjectcode : {props.Subjectcode}</p>
         <p className="center">Subjectname :{props.Subjectname}</p>
         <span>Date :{props.Date}</span> 
         <p className="topright">Time: {props.TimeStart} to {props.TimeEnd} </p>
         <br/>
         <span className="topright">Total marks:{props.TotalMarks}</span><br/>
      </>
    )
}

export default Look;