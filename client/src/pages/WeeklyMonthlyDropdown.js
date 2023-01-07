import styles from "./WeeklyMonthlyDropdown.module.css";

const WeeklyMonthlyDropdown = () => {
  return (
    <div className={styles.weeklyMonthlyDropdown}>
      <div className={styles.weekly}>Weekly</div>
      <div className={styles.monthly}>Monthly</div>
    </div>
  );
};

export default WeeklyMonthlyDropdown;
