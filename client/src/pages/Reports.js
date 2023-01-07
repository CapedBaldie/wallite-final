import styles from "./Reports.module.css";

const Reports = () => {
  return (
    <div className={styles.reports}>
      <div className={styles.spendFreq}>
        <div className={styles.spendFrequencyParent}>
          <div className={styles.spendFrequency}>Spend Frequency</div>
          <div className={styles.arrowDropDownParent}>
            <img
              className={styles.arrowDropDownIcon}
              alt=""
              src="../arrow-drop-down.svg"
            />
            <div className={styles.thisWeek}>This Week</div>
          </div>
        </div>
        <img className={styles.image2Icon} alt="" src="../image-2@2x.png" />
      </div>
      <div className={styles.accountExpenseParent}>
        <div className={styles.accountExpense}>
          <div className={styles.spendFrequencyParent}>
            <div className={styles.accountsSummary}>Accounts Summary</div>
            <div className={styles.arrowDropDownParent}>
              <img
                className={styles.arrowDropDownIcon}
                alt=""
                src="../arrow-drop-down.svg"
              />
              <div className={styles.thisWeek}>This Week</div>
            </div>
          </div>
          <img className={styles.image3Icon} alt="" src="../image-3@2x.png" />
        </div>
        <div className={styles.summary}>
          <div className={styles.expenseByCategoryParent}>
            <div className={styles.expenseByCategory}>Expense by Category</div>
            <div className={styles.arrowDropDownParent}>
              <img
                className={styles.arrowDropDownIcon}
                alt=""
                src="../arrow-drop-down.svg"
              />
              <div className={styles.thisWeek}>This Week</div>
            </div>
          </div>
          <div className={styles.pieChartWrapper}>
            <div className={styles.pieChart}>
              <div className={styles.pieChart1} />
              <img
                className={styles.image1Icon}
                alt=""
                src="../image-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
