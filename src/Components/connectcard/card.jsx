import { Link } from "react-router-dom";
import "../connectcard/card.scss"
const Cards = ({ student }) => {
    return (
      <div className="layout">
        <div className="student--section">
          <div className="header">
          <h6> {student.fullName} </h6>
            <Link to ='/'> <p>{student.email}</p> </Link>
           
            <p>{student.gender}</p>
            <p>{student.stateOfOrigin}</p>
            <p>{student.job}</p>
          
          </div>
        </div>
      </div>
    );
  };
  
  export default Cards;
 