import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Root() {
  return (
    <Router>
      <div className={styles.navbar}>
        <div className="title">MFE Application</div>
        <div className={styles["navbar-links"]}>
          <ul>
            <li>
              <Link to="/">React MFE</Link>
            </li>
            <li>
              <Link to="/angular">Angular MFE</Link>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
}
