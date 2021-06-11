const LeftNavBottom = (props) => {
    return (
            props.loggedIn
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
            : <LogInSignUp />
    )
}

export default LeftNavBottom


const LogInSignUp = () => {
    return (
        <>
            <a className="d-flex justify-content-center" href="./login-page/login.html"><button type="button" className="btn rounded-pill btn-sign-up" >SIGN UP</button></a>
            <a className="d-flex justify-content-center" href="./login-page/login.html"><button type="button" className="btn rounded-pill btn-log-in" >LOGIN</button></a>
            <div className='mx-auto d-flex flex-column nav-text-block'>
            <p className="nav-text-bottom m-0">Cookie    |    Privacy</p>
            <p className="nav-text-bottom"> Policy </p>  
            </div>
        </>
    )
}