import styles from "./LeftSidebar.module.css";
import Option from "../../components/Option/Option";
import Logo from "../../components/Logo/Logo";
import { IoMdHome, IoIosLogOut } from "react-icons/io";
import { IoCallOutline, IoSettingsOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

const LeftSidebar = () => {
  return (
    <>
      <div className={styles.leftSectionContainer}>
        <Logo />
        <div className={styles.navOptions}>
          <div>
            <Option icon={<IoMdHome />} text="Dashboard Overview" />
            <Option icon={<IoCallOutline />} text="Call Logs" />
            <Option icon={<CiCalendar />} text="Appoinments" />
            <Option icon={<IoSettingsOutline />} text="Settings" />
          </div>
          <div>
            <Option icon={<IoIosLogOut />} text="Log out" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
