import "./normal.css";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginForm from "./components/login/LoginForm";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import {  PLAIN_MSG, RECIPIENT, NONCE, parseHashParams, stringToUint8Array, getCallbackUrl} from "./context/data";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

  const RequireAuth = ({ children }) => {
      console.log("RequireAuth", currentUser)
    return currentUser ? children : <Navigate to="auth/login" />;
  };

    useEffect(() => {
        const hashParams = parseHashParams(window.location.hash);
        const nonce = localStorage.getItem("nonce");
        if (hashParams.signature && nonce) {
            const auth = {
                account_id: hashParams.accountId,
                public_key: hashParams.publicKey,
                signature: hashParams.signature,
                callback_url: getCallbackUrl(),
                message: PLAIN_MSG,
                nonce
            };

            localStorage.setItem("user", `Bearer ${JSON.stringify(auth)}`);

            // cleanup url
            console.log("cleanup url", window.location.pathname)

            dispatch({ type: "SIGNUP", payload: `Bearer ${JSON.stringify(auth)}` });
            navigate("/");
        }
    }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          index
          exact
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route exact path="auth/login" element={<Login />} />
        <Route exact path="login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
