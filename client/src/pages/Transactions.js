import { useState, useCallback, useEffect } from "react";
import {
  Checkbox,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NewTrans from "../components/NewTrans";
import PortalPopup from "../components/PortalPopup";
import TransactionBig from "../components/TransactionBig";
import styles from "./Transactions.module.css";

const Transactions = (props) => {
  const [isNewTransPopupOpen, setNewTransPopupOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [all, setAll] = useState(true);
  const [exp, setExp] = useState(false);
  const [inc, setInc] = useState(false);
  const [type, setType] = useState("All");
  const categories = props.categories;

  useEffect(() => {
    console.log(type);
  }, [type]);

  const openNewTransPopup = useCallback(() => {
    setNewTransPopupOpen(true);
  }, []);

  const closeNewTransPopup = useCallback(() => {
    setNewTransPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.transactions}>
        <div className={styles.transacHistoryParent}>
          <div className={styles.transacHistory}>
            <div className={styles.transactionHistoryParent}>
              <div className={styles.transactionHistory}>
                Transaction History
              </div>
            </div> 
            {props.data.map( trans => (
              <TransactionBig data={trans} category={category} type={type} />
            ))}
          </div>
          <div className={styles.filterParent}>
            <div className={styles.filter}>
              <Box w="100%" px="5px">
                <Menu>
                  <MenuButton
                    mt="15px"
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
                    {categories.map((t) => (
                      <MenuItem onClick={() => setCategory(t)}>
                        {t}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </Box>
              <div className={styles.options}>
                <Checkbox
                  iconColor="#141326"
                  color="#141326"
                  isChecked={all}
                  onChange={(e) => {
                    setType("All");
                    setExp(false);
                    setInc(false);
                    setAll(true);
                  }}
                  spacing="0.5rem"
                >
                  All
                </Checkbox>
                <Checkbox
                  iconColor="#141326"
                  color="#141326"
                  isChecked={exp}
                  onChange={(e) => {
                    setType("Expense");
                    setExp(true);
                    setInc(false);
                    setAll(false);
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
                    setAll(false);
                  }}
                  spacing="0.5rem"
                >
                  Income
                </Checkbox>
              </div>
            </div>
            <button className={styles.new} onClick={openNewTransPopup}>
              <img
                className={styles.addRingLightIcon}
                alt=""
                src="../add-ring-light.svg"
              />
              <b className={styles.new1}>New</b>
            </button>
          </div>
        </div>
      </div>
      {isNewTransPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNewTransPopup}
        >
          <NewTrans setNT={props.setNT} nT={props.nT} data={props.data} accounts={props.accounts} categories={props.categories} onClose={closeNewTransPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Transactions;
