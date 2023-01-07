import styles from "./Settings.module.css";
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

const Settings = () => {
  const [currency, setCurrency] = useState("Rupee (₹)");
  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("Light");

  const currencies = [
    "Rupee (₹)",
    "USD ($)",
    "EUR (€)",
    "GBP (£)",
    "AUD (A$)",
    "CAD (C$)",
    "CHF",
  ];

  return (
    <div className={styles.settings}>
      <div className={styles.headParent}>
        <div className={styles.head}>
          <div className={styles.settings1}>Settings</div>
        </div>
        <div className={styles.currency}>
          <div className={styles.currency1}>Currency</div>
          <div className={styles.rupeeParent}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {currency}
              </MenuButton>
              <MenuList>
                {currencies.map((c) => (
                  <MenuItem onClick={() => setCurrency(c)}>{c}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className={styles.currency}>
          <div className={styles.language1}>Language</div>
          <div className={styles.rupeeParent}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {language}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setLanguage("English")}>
                  English
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className={styles.currency}>
          <div className={styles.currency1}>Theme</div>
          <div className={styles.rupeeParent}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {theme}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setTheme("Light")}>
                  Light
                </MenuItem>
                <MenuItem onClick={() => setTheme("Dark")}>
                  Dark
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className={styles.currency}>
          <div className={styles.updateProfile}>Update Profile</div>
          <button className={styles.expandRightWrapper}>
            <img
              className={styles.arrowDropDownIcon}
              alt=""
              src="../expand-right.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
