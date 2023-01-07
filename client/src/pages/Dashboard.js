import TransactionSmall from "../components/TransactionSmall";
import BudgetSmall from "../components/BudgetSmall";
import AccSmall from "../components/AccSmall";
import styles from "./Dashboard.module.css";
import { useEffect, useState } from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  ChakraProvider,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { expenses, income, balance, Piechart, Linechart } from "../components/Overall";

const Dashboard = (props) => {
  const [budgetDuration, setbudgetDuration] = useState("All");
  const [spendDuration, setspendDuration] = useState("This Week");
  const [overallDuration, setoverallDuration] = useState("Today");
  const accounts = props.accounts.slice(0,4);
  const data = props.data.slice(0,5);
  const budgets = props.budgets.slice(0,3);

  return (
    <div className={styles.dashboard}>
      <div className={styles.spendFreqParent}>
        <div className={styles.spendFreq}>
          <div className={styles.spendFrequencyParent}>
            <h1 className={styles.spendFrequency}>Spend Frequency</h1>
            <div className={styles.arrowDropDownParent}>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  {spendDuration}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => setspendDuration("Today")}>
                    Today
                  </MenuItem>
                  <MenuItem onClick={() => setspendDuration("This Week")}>
                    This Week
                  </MenuItem>
                  <MenuItem onClick={() => setspendDuration("This Month")}>
                    This Month
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
          <div className={styles.spendChart}><Box w='100%' h='100%' bg='white'><Linechart data={props.data} accounts={props.accounts} /></Box></div>
        </div>
        <div className={styles.recentBudget}>
          <div className={styles.recent} id="recent-dash">
            <div className={styles.recentTransactionsWrapper}>
              <div className={styles.recentTransactions}>
                Recent Transactions
              </div>
            </div>
            {data.map((trans) => (
              <TransactionSmall data={trans} />
            ))}
          </div>
          <div className={styles.budget}>
            <div className={styles.spendFrequencyParent}>
              <div className={styles.budget1}>Budget</div>
              <div className={styles.arrowDropDownGroup}>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {budgetDuration}
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => setbudgetDuration("All")}>
                      All
                    </MenuItem>
                    <MenuItem onClick={() => setbudgetDuration("Weekly")}>
                      Weekly
                    </MenuItem>
                    <MenuItem onClick={() => setbudgetDuration("Monthly")}>
                      Monthly
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
            {budgets.map((b) => (
              <BudgetSmall
                duration={budgetDuration}
                data={props.data}
                budget={b}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.summaryParent}>
        <div className={styles.summary}>
          <div className={styles.overallSummaryParent}>
            <div className={styles.overallSummary}>Overall Summary</div>
            <div className={styles.arrowDropDownParent}>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  {overallDuration}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => setoverallDuration("Today")}>
                    Today
                  </MenuItem>
                  <MenuItem onClick={() => setoverallDuration("This Week")}>
                    This Week
                  </MenuItem>
                  <MenuItem onClick={() => setoverallDuration("This Month")}>
                    This Month
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
          <div className={styles.numbersParent}>
            <div className={styles.numbers} id="overall-summary-numbers">
              <div className={styles.exp}>
                <div className={styles.frameContainer}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameInner} />
                    <img
                      className={styles.walletLightIcon}
                      alt=""
                      src="../wallet-light.svg"
                    />
                  </div>
                  <div className={styles.totalExpenses}>Total Expenses</div>
                </div>
                <div className={styles.rs000}>Rs. {expenses(props.data,overallDuration)}</div>
              </div>
              <div className={styles.exp}>
                <div className={styles.frameContainer}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.rectangleDiv} />
                    <img
                      className={styles.walletLightIcon1}
                      alt=""
                      src="../wallet-light.svg"
                    />
                  </div>
                  <div className={styles.totalExpenses}>Total Income</div>
                </div>
                <div className={styles.rs000}>Rs. {income(props.data,overallDuration)}</div>
              </div>
              <div className={styles.exp}>
                <div className={styles.frameContainer}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.rectangleDiv} />
                    <img
                      className={styles.walletLightIcon}
                      alt=""
                      src="../money-light.svg"
                    />
                  </div>
                  <div className={styles.totalExpenses}>Total Balance</div>
                </div>
                <div className={styles.rs000}>Rs. {balance(props.accounts)}</div>
              </div>
            </div>
            <div className={styles.pieChart}><Piechart data={props.data} categories={props.categories} /></div>
          </div>
        </div>
        <div className={styles.accounts}>
          <div className={styles.accountsWrapper}>
            <div className={styles.overallSummary}>Accounts</div>
          </div>
          <div className={styles.accParent}>
            {accounts.map( a => (
            <AccSmall data={a} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
