import React, { useState } from 'react'
import { set_Authentication } from "../../Redux/authentication/authenticationSlice"; 
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link ,useNavigate} from 'react-router-dom'



function UserHome() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const [newvalue, setNewvalue] = useState('')
  const authentication_user = useSelector(state => state.authentication_user)
  
  // const changeName = () => {
  //   dispatch(
  //     set_Authentication({
  //       name: newvalue
  //     })
  //   )
  // }
  // const handleName = (e) => {
  //   setNewvalue (e.target.value)
  // }
  // console.log(authentication_user.name);
  return (
    // <div className="card">
    //   <div className="card-body">
    //     <h4>
    //       {authentication_user.isAuthenticated?<>Welcome Back {authentication_user.name} ! </>:<>Login to edit profile</>}
    //     </h4>
    //   </div>
    // </div>
<div >
  <div style={{textAlign: "center", paddingTop: "30px"}}>
    <span className="" style={{color: "black", fontWeight: "bold"}}>{authentication_user.isAuthenticated?<>Welcome {authentication_user.name} </>:<></>}</span>    <br></br>
    {authentication_user.isAuthenticated?<>
      <Link type="button" className="btn btn-primary" to='/profile' style={{marginTop: "30px"}}>Go To Profile</Link></>
      :<><Link type="button" className="btn btn-primary" to='/login'> Login Here</Link></>}
      <br></br>
      <br></br>
      {/* <input type='text' name='ivalue' value={newvalue} onChange={handleName} placeholder='enter your name'/> */}
      <br></br>
      <br></br>
      
  {/* <button className="btn btn-primary" onClick={changeName}>
    Change Name
  </button> */}
    

  </div>
</div>

  )
}

export default UserHome