import React from 'react'
import member from '../assests/ic_member.svg'

import '../members.scss'

import { Link } from 'react-router-dom'




const Member = () => {
  

  return (
 <div className='img_bg'>
   <div className='members'>
         <Link to ='/membership' > <img src={member} alt="" /></Link>
         
    </div>

   </div>

  )
}

export default Member