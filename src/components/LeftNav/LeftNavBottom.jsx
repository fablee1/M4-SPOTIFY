import { useState } from "react"

const LeftNavBottom = (props) => {

    const [loggedIn, setLoggedIn] = useState(false)

    return (
            loggedIn
            ? <div className="navbar-bottom">
                <p className="d-block text-white navbar-bottom-text">
                    <i className="fas fa-arrow-circle-down mr-2"></i>
                    Install App
                </p>
                <hr className="text-white" />
                <div className="dropdown">
                    <a href="hello" className="d-flex align-items-center text-white text-decoration-none " id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={props.img ? props.img : "https://github.com/mdo.png"} alt="" width="32" height="32" className="rounded-circle me-1" />
                        <strong>{props.name ? props.name : "Diego 'Ziba' Banovaz"}</strong>
                    </a>
                </div>
            </div>
            : <LogInSignUp login={setLoggedIn} />
    )
}

export default LeftNavBottom


const LogInSignUp = (props) => {
    return (
        <>
            <a className="d-flex justify-content-center"><button type="button" className="btn rounded-pill btn-sign-up" onClick={() => props.login(true)}>SIGN UP</button></a>
            <a className="d-flex justify-content-center"><button type="button" className="btn rounded-pill btn-log-in" onClick={() => props.login(true)}>LOGIN</button></a>
            <div className='mx-auto d-flex flex-column nav-text-block'>
            <p className="nav-text-bottom m-0">Cookie    |    Privacy</p>
            <p className="nav-text-bottom"> Policy </p>  
            </div>
        </>
    )
}