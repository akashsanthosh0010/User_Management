import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { set_Authentication } from '../../../Redux/authentication/authenticationSlice';
import userimg from '../../../images/user.png'
function UserHeader() {
  const authentication_user = useSelector(state => state.authentication_user)
  const user_basic_details = useSelector(state => state.user_basic_details)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = ()=>{
    localStorage.clear();
    dispatch(
      set_Authentication({
        name: null,
        isAuthenticated: false,
        isAdmin:false
      })
    );
    navigate('/')

  }
  return (
    // <!-- Navbar -->
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <!-- Container wrapper --> */}
      <div className="container-fluid">
        {/* <!-- Toggle button --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
    
        {/* <!-- Collapsible wrapper --> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Navbar brand --> */}
          <Link className="navbar-brand mt-2 mt-lg-0" to='/'>
            Home
          </Link>
        {/* //  <!-- Left links --> */}
          
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}
    
        {/* <!-- Right elements --> */}
        <div className="d-flex align-items-center">
       
        {/* <!-- Notifications --> */}
          
          {/* <!-- Avatar --> */}
          <div className="dropdown">
            <Link
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <p>Menu</p>
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              
             
              <li>
              {!authentication_user.isAuthenticated?<Link className="dropdown-item" to='/login'>Login</Link>: 
               <button className="dropdown-item" onClick={logout}>Logout</button>}
             
              </li>
              

             {/*  <li>
                <Link className="dropdown-item" href="#">Logout</Link>
              </li> */}
            </ul>
          </div>
        </div>
        {/* <!-- Right elements --> */}
      </div>
      {/* <!-- Container wrapper -->// */}
    </nav>
    // <!-- Navbar -->
  )
}

export default UserHeader