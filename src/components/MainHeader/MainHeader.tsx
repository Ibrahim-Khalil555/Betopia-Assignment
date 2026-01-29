import styles from "./MainHeader.module.css";
import profile from "../../assets/profile.jpg";
import { IoMdNotificationsOutline } from "react-icons/io";

interface HeaderProps {
  headerTitle: string;
}

const MainHeader = ({ headerTitle }: HeaderProps) => {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerTitle}>{headerTitle}</div>
        <div className={styles.profileArea}>
          <span className={styles.notification}>
            <IoMdNotificationsOutline />
          </span>
          <div className={styles.profileIcon}>
            <img src={profile} alt="profile-pic" />
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
