import { useCallback, useContext, useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.scss";
import Task13 from "./components/Task13";
import UserContext from "./context";
import ColorContext from "./context/ColorContext";
import About from "./routes/About";
import Login from "./routes/Login";
import PrivateElement from "./routes/PrivateRoute";

function Main() {
  const { name } = useContext(UserContext);
  return (
    <>
      <div>
        <Link to="about">About</Link>
        <Link to="login">Login</Link>
        <Link to="profile">Profile</Link> | {name}
      </div>
      <Outlet />
    </>
  );
}

function App() {
  const [user, setUser] = useState(undefined);
  const [displayName, setDisplayName] = useState(user?.name || "test name");
  const { type } = useContext(ColorContext);

  useEffect(() => {
    console.log(displayName)
  }, [displayName])

  useEffect(() => {
    const id = setTimeout(() => {
      setUser({
        userId: "userId",
        name: "Julius",
        active: true,
      });
    }, 1);

    return () => {
      clearTimeout(id);
    };
  }, []);
  const handleSetDisplayName = useCallback((name) => {
    setDisplayName(name);
  }, []);


  if (!user) {
    return <div>Loading</div>;
  }


  return (
    <UserContext.Provider
      value={{ ...user, name: displayName, setNewName: handleSetDisplayName }}
    >
      <div className={`App ${type}`}>
        <Routes>
          <Route path="/" element={<Task13 />}>
            {/* <Route index element={<div>Landing</div>} />
            <Route
              path="about/*"
              element={
                <PrivateElement>
                  <About />
                </PrivateElement>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<div>profile</div>} /> */}
          </Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
