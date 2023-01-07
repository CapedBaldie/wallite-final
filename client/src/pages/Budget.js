import {
  Input,
  Checkbox,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  propNames,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import BudgetEntry from "../components/BudgetEntry";
import styles from "./Budget.module.css";

const Budget = (props) => {
  const [durationFilter, setdurationFilter] = useState("All");
  const [duration, setDuration] = useState("");
  const [m, setM] = useState(false);
  const [w, setW] = useState(false);
  const [category, setCategory] = useState("Category");
  const [amount, setAmount] = useState("");

  const toast = useToast();
  const handleAdd = () => {
    if (category != "Category" && amount != "" && duration != "") {
      const newBudget = {
        user: 'Saarang',
        category: category,
        amount: amount,
        duration: duration,
      };
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(newBudget);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      // fetch(
      //   'https://event-calendar.onrender.com/calendar/addEvent',
      //   requestOptions
      // )
      fetch("http://localhost:27017/wallite/addbudget", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          props.setNB(props.nB + 1);
        })
        .catch((error) => console.log("error", error));
    } else {
      toast({
        title: "Error",
        description: "Please fill required fields",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
    }
  };

  return (
    <div className={styles.budget}>
      <div className={styles.budget1}>
        <div className={styles.budgetParent}>
          <div className={styles.budget2}>Budget</div>
          <div className={styles.arrowDropDownParent}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {durationFilter}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setdurationFilter("All")}>
                  All
                </MenuItem>
                <MenuItem onClick={() => setdurationFilter("Weekly")}>
                  Weekly
                </MenuItem>
                <MenuItem onClick={() => setdurationFilter("Monthly")}>
                  Monthly
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        {props.budgets.map((b) => (
          <BudgetEntry duration={durationFilter} data={props.data} budget={b} />
        ))}
      </div>
      <div className={styles.newBudget}>
        <div className={styles.newBudget1}>
          <div className={styles.addNewBudget}>Add New Budget</div>
        </div>
        <div className={styles.body}>
          <div className={styles.amount}>
            <img
              className={styles.moneyDuotoneLineIcon}
              alt=""
              src="../money-duotone-line.svg"
            />
            <div className={styles.input}>
              <div className={styles.amount1}>Amount</div>
              <Input
                className={styles.inputChild}
                variant="outline"
                focusBorderColor="#141326"
                placeholder="Input"
                onChange={() => setAmount(event.target.value)}
              />
            </div>
          </div>
          <div className={styles.category}>
            <Menu>
              <MenuButton
                h="100%"
                w="100%"
                bg="#141326"
                as={Button}
                _hover={{}}
                _pressed={{}}
                rightIcon={<ChevronDownIcon />}
              >
                {category}
              </MenuButton>
              <MenuList color="#141326">
                {props.categories.map((t) => (
                  <MenuItem onClick={() => setCategory(t)}>{t}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          </div>
          <div className={styles.div}>
            <Checkbox
              iconColor="#141326"
              color="#141326"
              isChecked={w}
              onChange={(e) => {
                setDuration("Weekly");
                setW(true);
                setM(false);
              }}
              spacing="0.5rem"
            >
              Weekly
            </Checkbox>
            <Checkbox
              iconColor="#141326"
              color="#141326"
              isChecked={m}
              onChange={(e) => {
                setDuration("Monthly");
                setW(false);
                setM(true);
              }}
              spacing="0.5rem"
            >
              Monthly
            </Checkbox>
          </div>
          <button
            type="submit"
            onClick={() => {
              handleAdd();
            }}
            className={styles.new}
          >
            <img
              className={styles.addRingLightIcon}
              alt=""
              src="../add-ring-light2.svg"
            />
            <b className={styles.add}>Add</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Budget;
