import styles from "./Logo.module.css";
import { PiLightning } from "react-icons/pi";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}>
        <PiLightning />
      </div>
    </div>
  );
};

export default Logo;
