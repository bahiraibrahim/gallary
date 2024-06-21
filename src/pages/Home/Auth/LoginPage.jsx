import { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "../Home.jsx";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [accept, setAccept] = useState(false);
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    setAccept(true);
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div>
      <div className="page">
        {home ? (
          <form onSubmit={handleLogin}>
            <h3> الدخول</h3>

            <input
              type="email"
              className="input mt-3 mb-3"
              placeholder="ايميل... "
              onChange={(event) => setEmaillog(event.target.value)}
              required
            />

            <input
              type="password"
              className="input mt-3 mb-3"
              placeholder="كلمة السر..."
              onChange={(event) => setPasswordlog(event.target.value)}
              required
            />
            {passwordlog.length < 8 && accept && (
              <p className="error">Password must be more than 8 char</p>
            )}

            <button type="submit" className="create mt-3 mb-5 me-2">
              تسجيل دخول
            </button>

            {flag && (
              <Alert color="primary" variant="warning">
                Fill correct Info else keep trying.
              </Alert>
            )}
          </form>
        ) : (
          <Home />
        )}
      </div>
    </div>
  );
}

export default Login;
