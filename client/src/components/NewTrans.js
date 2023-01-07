import { useState, useEffect } from "react";
import {
  Input,
  Checkbox,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  FormControl,
  useToast,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styles from "./NewTrans.module.css";

const NewTrans = (props) => {
  const [account, setAccount] = useState("Account");
  const [category, setCategory] = useState("Category");
  const [exp, setExp] = useState(false);
  const [inc, setInc] = useState(false);
  const [type, setType] = useState("All");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [to, setTo] = useState("");

  const toast = useToast();
  const handleSave = () => {
    if (
      title != "" &&
      category != "Category" &&
      type != "All" &&
      account != "Account" &&
      amount != "" &&
      date != ""
    ) {
      const transaction = {
        user: "Saarang",
        name: title,
        category: category,
        tType: type,
        account: account,
        amount: amount,
        date: date,
        time: time,
        to: to,
      };
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(transaction);

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
      fetch("http://localhost:27017/wallite/addtransaction", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          props.setNT(props.nT + 1);
        })
        .catch((error) => console.log("error", error));
      console.log(transaction);
      const acc = props.accounts.find((a) => a.name == account);
      const newBal =
        type == "Expense"
          ? parseFloat(acc.bal) - parseFloat(amount)
          : parseFloat(acc.bal) + parseFloat(amount);
      var myHeaders1 = new Headers();
      myHeaders1.append("Content-Type", "application/json");

      var raw1 = JSON.stringify({
        user: "Saarang",
        account: acc.name,
        bal: newBal,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders1,
        body: raw1,
        redirect: "follow",
      };
      // fetch(
      //   'https://event-calendar.onrender.com/calendar/addEvent',
      //   requestOptions
      // )
      fetch("http://localhost:27017/wallite/updateAccount", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log("error", error));
      props.onClose();
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
    <div className={styles.newTrans}>
      <div className={styles.div}>
        <div className={styles.title}>
          <div className={styles.title1}>Title</div>
          <Input
            className={styles.titleChild}
            variant="outline"
            focusBorderColor="#141326"
            placeholder="Input"
            onChange={() => setTitle(event.target.value)}
          />
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
      </div>
      <div className={styles.div1}>
        <Checkbox
          iconColor="#141326"
          color="#141326"
          isChecked={exp}
          onChange={(e) => {
            setType("Expense");
            setExp(true);
            setInc(false);
          }}
          spacing="0.5rem"
        >
          Expense
        </Checkbox>
        <Checkbox
          iconColor="#141326"
          color="#141326"
          isChecked={inc}
          onChange={(e) => {
            setType("Income");
            setExp(false);
            setInc(true);
          }}
          spacing="0.5rem"
        >
          Income
        </Checkbox>
      </div>
      <div className={styles.div2}>
        <div className={styles.account}>
          <img
            className={styles.creditCardDuotoneIcon}
            alt=""
            src="../credit-card-duotone.svg"
          />
          <div className={styles.input}>
            <div className={styles.title1}>Account</div>
            <Menu>
              <MenuButton
                h="40px"
                w="100%"
                as={Button}
                _hover={{}}
                _pressed={{}}
                rightIcon={<ChevronDownIcon />}
              >
                {account}
              </MenuButton>
              <MenuList color="#141326">
                {props.accounts.map((t) => (
                  <Tooltip
                    hasArrow
                    bg="#141326"
                    placement="right"
                    label={`balance : ${t.bal}`}
                  >
                    <MenuItem
                      fontSize="15px"
                      onClick={() => setAccount(t.name)}
                    >
                      {t.name}
                    </MenuItem>
                  </Tooltip>
                ))}
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className={styles.account}>
          <img
            className={styles.creditCardDuotoneIcon}
            alt=""
            src="../money-duotone-line.svg"
          />
          <div className={styles.input}>
            <div className={styles.title1}>Amount</div>
            <Input
              className={styles.titleChild}
              variant="outline"
              focusBorderColor="#141326"
              placeholder="Input"
              onChange={() => setAmount(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.div3}>
        <div className={styles.day}>
          <img
            className={styles.creditCardDuotoneIcon}
            alt=""
            src="../calendar-add-duotone-line.svg"
          />
          <Input
            className={styles.input2}
            variant="outline"
            focusBorderColor="#141326"
            type="date"
            onChange={() => setDate(event.target.value)}
          />
        </div>
        <div className={styles.day}>
          <img
            className={styles.creditCardDuotoneIcon}
            alt=""
            src="../time-duotone-line.svg"
          />
          <Input
            className={styles.input2}
            variant="outline"
            focusBorderColor="#141326"
            type="time"
            onChange={() => setTime(event.target.value)}
          />
        </div>
      </div>
      <div className={styles.to}>
        <img
          className={styles.creditCardDuotoneIcon}
          alt=""
          src="../user-alt-fill.svg"
        />
        <div className={styles.input}>
          <div className={styles.title1}>
            To<Text fontSize="12px">(optional)</Text>
          </div>
          <Input
            className={styles.titleChild}
            variant="outline"
            focusBorderColor="#141326"
            placeholder="Input"
            onChange={() => setTo(event.target.value)}
          />
        </div>
      </div>
      <Box display="flex">
        <button
          type="submit"
          className={styles.save}
          onClick={() => {
            handleSave();
          }}
        >
          <div className={styles.save1}>Save</div>
        </button>
        <Button ml="10px" h="30px" onClick={props.onClose}>
          Cancel
        </Button>
      </Box>
    </div>
  );
};

export default NewTrans;
