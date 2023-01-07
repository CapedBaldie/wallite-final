import styles from "./Reports.module.css";
import { expenses, income, balance, Piechart, Linechart } from "../components/Overall";
import {
  Button,
  ChakraProvider,
  Box,
} from "@chakra-ui/react";

const Reports = (props) => {
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
        <Box w='100%' h='100%' bg='white'><Linechart data={props.data} accounts={props.accounts} /></Box>
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
          <Box w='100%' h='100%' display='flex' justifyContent='center' alignItems='center'>Coming Soon</Box>
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
            <Piechart data={props.data} categories={props.categories} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
