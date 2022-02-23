import '../MembershipPage/membership.scss'
import { Link } from 'react-router-dom';

const Register = () => {
    return ( 
        <form className='Reg_form'>
        <div className="form__control">
            <input className="input" type="text" placeholder="First Name, Last Name" />
        </div>

        <div className="form__control">
            <input className="input" type="text" placeholder="email" />
        </div>

        <div className="form__control">
                <select className="input">
                    <option value>Please select.....</option>
                    <option value="enthusiast">Enthusiast</option>
                    <option value="service_professional">service professional</option>
                    <option value="Veteran">Veteran</option>
                </select>
            </div>
        
            <div className="form__control">
            <input className="input" type="text" placeholder=" Create Passwword" />
            <input className="input" type="text" placeholder=" Confirm Passwword" />
        </div>


    <div className="control_penal">
        <label>
            <input type="checkbox" name="Check 1"/> Accept <Link to = '/termsandcondition'>Terms and conditiion</Link>
        </label>
        
    </div>

    <div className="btn2">
        <button>Register</button>
    </div>
   
</form>
     );
}
 
export default Register;