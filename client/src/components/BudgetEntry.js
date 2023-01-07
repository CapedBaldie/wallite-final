import styles from "./BudgetEntry.module.css";
import { Progress, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const BudgetEntry = (props) => {
  const [disp, setDisp] = useState("none");
  const [progress, setProgress] = useState(0)
  const [bal, setBal] = useState(0);
  useEffect(() => {
    if (props.duration == "All") setDisp("block");
    else {
      if (props.budget.duration != props.duration) setDisp("none");
      else setDisp("block");
    }
  }, [props.duration]);

  useEffect(() => {
    var spend = 0;
    {
      props.data.map((d) => {
        if (d.category == props.budget.category && d.tType == "Expense")
          spend = spend + parseFloat(d.amount);
      });
    }
    setBal(parseFloat(props.budget.amount) - spend)
    setProgress((spend / parseFloat(props.budget.amount))*100)
  }, [props.data]);

  return (
    <Box w="100%" display={disp}>
      <div className={styles.budgetEntry}>
        <div className={styles.categoryName}>{props.budget.category}</div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <Box w="100%">
            <Progress
              w="100%"
              value={progress}
              size="md"
              borderRadius="15px"
              colorScheme="blue"
            />
            <div className={styles.budgetLimits}>
              <Text fontSize="17px">0</Text>
              <Text fontSize="17px">{props.budget.amount}</Text>
            </div>
          </Box>
          <div className={styles.balanceParent}>
            <div className={styles.balance}>Balance :</div>
            <div className={styles.rs123321}><Text color={bal<0? '#E91717':'#30BA00'}>Rs. {bal}</Text></div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default BudgetEntry;
