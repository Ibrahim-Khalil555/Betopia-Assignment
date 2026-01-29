import Chart from "../../components/Chart/Chart";
import styles from "./ChartSection.module.css";

const ChartSection = () => {
  return (
    <>
      <div className={styles.chartContainer}>
        <Chart />
      </div>
    </>
  );
};

export default ChartSection;
