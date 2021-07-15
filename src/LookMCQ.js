const LookMCQ = (props) => {
  return(
    <> 
       <th colSpan="3">{props.Question}</th>
     <tr>
         <td>{props.optionA}</td>
         <td>{props.optionB}</td>
     </tr>
     <tr>
         <td>{props.optionC}</td>
         <td>{props.optionD}</td>
     </tr>
    </>
  )
}
export default LookMCQ;