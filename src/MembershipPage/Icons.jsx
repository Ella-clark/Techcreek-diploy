import logo from "../assests/logo-blue.png"
import { Link } from "react-router-dom";
import '../MembershipPage/membership.scss'

const Icons = () => {
    return ( 
        
        <div className="icons__container">
            <div className="Back"><Link to = '/'>Back</Link></div>
         <a className="logo__box" href=""><img src={logo} alt="" /></a>
        </div>
     );
}
 




export default Icons;




