import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Establishments from "./Pages/Establishments/Establishments";
import Establishment from "./Pages/Establishment/Establishment";
import Signin from "./Pages/Login/Signin";
import Profile from "./Pages/Profile/Profile";
import styles from "./App.module.css";
import NotFound from "./Pages/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/establishments" element={<Establishments />} />
        <Route exact path="/establishment/:id" element={<Establishment />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/login" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
