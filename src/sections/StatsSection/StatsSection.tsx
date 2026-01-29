import styles from "./StatsSection.module.css";
import StatsCard from "../../components/StatsCard/StatsCard";
import { IoCallOutline } from "react-icons/io5";

const StatsSection = () => {
  return (
    <>
      <div className={styles.statSection}>
        <StatsCard
          label="Total Calls Today"
          value="127"
          change="+12%"
          icon={<IoCallOutline />}
          iconBg={styles.blue}
        />
        <StatsCard
          label="AI-Handled Calls"
          value="98"
          change="+77%"
          icon="🤖"
          iconBg={styles.purple}
        />
        <StatsCard
          label="Warm Transfer"
          value="23"
          change="+18%"
          icon="🔄"
          iconBg={styles.orange}
        />
        <StatsCard
          label="Appointments Booked"
          value="34"
          change="+8%"
          icon="📅"
          iconBg={styles.green}
        />
        <StatsCard
          label="Missed/Failed Calls"
          value="6"
          change="-3%"
          icon="❌"
          iconBg={styles.red}
        />
        <StatsCard
          label="Avg Call Duration"
          value="3:42"
          change="+15%"
          icon="⏱️"
          iconBg={styles.indigo}
        />
      </div>
    </>
  );
};

export default StatsSection;
