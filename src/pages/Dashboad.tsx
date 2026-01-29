import styles from "./Dashboard.module.css";
import MainHeader from "../components/MainHeader/MainHeader";
import LeftSidebar from "../sections/LeftSidebar/LeftSidebar";
import StatsSection from "../sections/StatsSection/StatsSection";
import ChartSection from "../sections/ChartSection/ChartSection";

const Dashboad = () => {
  return (
    <>
      <div className={styles.dashboardPage}>
        <div className={styles.leftSection}>
          <LeftSidebar />
        </div>
        <div className={styles.mainSection}>
          <MainHeader headerTitle="Dashboard Overview" />
          <StatsSection />
          <ChartSection />
        </div>
      </div>
    </>
  );
};

export default Dashboad;
