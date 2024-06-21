import { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "./LoginPage";
import "../../../Styles/LoginPageStyle.css";
import face from "../../../assets/facebook.png";
import goog from "../../../assets/google.png";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();
    setAccept(true);
    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      setLogin(!login);
    }
  }
  function handleClick() {
    setLogin(!login);
  }
 function showToast(){
    return (
      <div>
        <div className="bg-blue-500 p-3 text-white">
          noooooooooooooo
        </div>
      </div>)
 }
  return (
    <>
      <div>
        <div className="cover">
          <div className="page">
            {login ? (
              <form onSubmit={handleFormSubmit}>
                <h3>التسجيل</h3>

                <input
                  type="text"
                  className="input mb-3"
                  placeholder="اسم المستخدم..."
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                  required
                  />

                <input
                  type="email"
                  className="input mb-3"
                  placeholder=" email"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  />

                <input
                  type="password"
                  className="input mb-3 "
                  placeholder="كلمة السر... "
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  />
                  {password.length < 8 && accept && (
                    <p className="error">Password must be more than 8 char</p>)}

                <div className="sociol d-flex mt-3">
                  <div className="google d-flex ms-5 me-4">
                    <a href="https://www.google.com/">
                      <img src={goog} />
                      Google
                    </a>
                  </div>
                  <div className="facebook d-flex mb-4 me-5 ">
                    <a href="https://www.facebook.com/">
                      <img src={face} />
                      Facebook
                    </a>
                  </div>
                </div>
                <button type="submit" className="create mb-3 me-3" onClick={()=>showToast()}>
                  تسجيل 
                </button>
                <p onClick={handleClick} className="error">
                  لديك حساب بالفعل؟
                </p>
                {flag && (
                  <Alert color="primary" variant="danger">
                    I got it you are in hurry! But every Field is important!
                  </Alert>
                )}
              </form>
            ) : (
              <Login />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
