import DigNavbar from "./Components/DigNavbar/DigNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Establishments from "./Pages/Establishments/Establishments";
import Establishment from "./Pages/Establishment/Establishment";
import Profile from "./Pages/Profile/Profile";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.main__container}>
      <div className={styles.main__layout}>
        <DigNavbar />
        <div className={styles.main__content}></div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/establishments" element={<Establishments />} />
          <Route exact path="/establishment/:id" element={<Establishment />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
