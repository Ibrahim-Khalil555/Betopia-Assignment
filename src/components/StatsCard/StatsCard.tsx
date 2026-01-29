import styles from "./StatsCard.module.css";

interface StateCardProps {
  label: string;
  value: string;
  change: string;
  icon: any;
  iconBg: string;
}

const StatsCard = ({ label, value, change, icon, iconBg }: StateCardProps) => {
  return (
    <>
      <div className={styles.statCard}>
        <div className={styles.stateContent}>
          <span className={styles.statLabel}>{label}</span>
          <span className={styles.statValue}>{value}</span>
          <span
            className={
              change.startsWith("+")
                ? [styles.statChange, styles.positive].join(" ")
                : [styles.statChange, styles.negative].join(" ")
            }
          >
            {change}
          </span>
        </div>
        <div className={[styles.stateIcon, iconBg].join(" ")}>{icon}</div>
      </div>
    </>
  );
};

export default StatsCard;
