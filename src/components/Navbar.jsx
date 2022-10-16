import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userActions';

function Navbar() {

    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch=useDispatch()

    return (
        <div>
            <nav className="navbar navbar-expand-sm shadow-lg p-3  mb-5 text-white rounded  navvv">
                <a className="navbar-brand text-white"  href="/">
                    DNC FOOD SHOP
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto mx-4 ">

                        {/* current user name */}
                        {currentUser ? (
                            <div className="dropdown mt-2">
                                <a className=" dropdown-toggle"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   {currentUser.name}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {/* <a className="dropdown-item" href="/orders">Orders</a> */}
                                    <a className="dropdown-item " href="#" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></a>

                                </div>
                            </div>
                        ) : (
                            <li className="nav-item text-white">
                                <a className="nav-link" href="/login">
                                    Login 
                                </a>
                            </li>
                        )}


                        <li className="nav-item text-white">
                            <a className="nav-link" href="/cart">
                                Cart {cartstate.cartItems.length}
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar