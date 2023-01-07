import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Slide1693 from "./pages/Slide1693";
import Top from "./pages/Top";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Budget from "./pages/Budget";
import Tags from "./pages/Tags";
import Accounts from "./pages/Accounts";
import Transactions from "./pages/Transactions";
import Dashboard from "./pages/Dashboard";
import WeekMonthDropdown from "./pages/WeekMonthDropdown";
import WeeklyMonthlyDropdown from "./pages/WeeklyMonthlyDropdown";
import { useEffect, useState } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  Button,
  Hide,
} from "@chakra-ui/react";


function App() {

  // const accounts = [
  //   { name: 'Account 1', bal: '26883', type: 'credit' },
  //   { name: 'Account 2', bal: '246883', type: 'savings' },
  //   { name: 'Account 3', bal: '2883', type: 'wallet' },
  //   { name: 'Account 4', bal: '26883', type: 'debit' },
  // ];
  // const categories = ["All","Shopping", "Food", "Travel", "Entertainment", "Medical", "Miscellaneous", "Income", "Savings"];
  // const data = [
  //   {
  //     name: 'Dominos',
  //     category: 'Food',
  //     type: 'Expense',
  //     account: 'Account 4',
  //     amount: '425',
  //     date: '2023-01-22',
  //     time: '08:30 PM',
  //     to: 'Dominos',
  //   },
  //   {
  //     name: 'Groceries',
  //     category: 'Shopping',
  //     type: 'Expense',
  //     account: 'Account 1',
  //     amount: '953',
  //     date: '2023-01-04',
  //     time: '10:15 AM',
  //     to: 'Malakaar',
  //   },
  //   {
  //     name: 'Savings amt',
  //     category: 'Savings',
  //     type: 'Income',
  //     account: 'Account 2',
  //     amount: '2500',
  //     date: '2023-01-03',
  //     time: '',
  //     to: '',
  //   },
  //   {
  //     name: 'Income',
  //     category: 'Income',
  //     type: 'Income',
  //     account: 'Account 4',
  //     amount: '5000',
  //     date: '2023-01-01',
  //     time: '',
  //     to: '',
  //   },
  //   {
  //     name: 'Random',
  //     category: 'Shopping',
  //     type: 'Expense',
  //     account: 'Account 3',
  //     amount: '500',
  //     date: '2023-01-04',
  //     time: '',
  //     to: 'some dude',
  //   },
  //   {
  //     name: 'Avatar movie',
  //     category: 'Entertainment',
  //     type: 'Expense',
  //     account: 'Account 2',
  //     amount: '800',
  //     date: '2023-01-05',
  //     time: '',
  //     to: '',
  //   },
  //   {
  //     name: 'xyz xyz x',
  //     category: 'Travel',
  //     type: 'Expense',
  //     account: 'Account 1',
  //     amount: '650',
  //     date: '2023-01-06',
  //     time: '',
  //     to: '',
  //   },
  // ]
  // const budgets = [
  //   {
  //     category: 'Shopping',
  //     amount: '2000',
  //     duration: 'Monthly',
  //   },
  //   {
  //     category: 'Food',
  //     amount: '500',
  //     duration: 'Weekly',
  //   }
  // ];

  const [accounts, setAccounts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [budgets, setBudgets] = useState([]);

  const [nT, setNT] = useState(0);
  const [nA, setNA] = useState(0);
  const [nB, setNB] = useState(0);

  const [resp, setResp] = useState();
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      user: 'Saarang',
    });
    // console.log(raw);
    // console.log(typeof props.dateQ);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://wallite-app.onrender.com/wallite/userdata', requestOptions) 
    // fetch('http://localhost:27017/wallite/userdata', requestOptions)
      .then(response => response.json())
      .then(result => {
        setResp(result);
        setAccounts(result.accounts);
        setBudgets(result.budgets);
        setCategories(result.categories);
        setData(result.data);
        console.log(result);
      })
      .catch(error => console.log('error', error));
      
  }, [nT,nA,nB]);

  

  const [tabN, setTab] = useState('Dashboard');
  useEffect(() => {
    console.log(tabN);
    console.log(resp)
      // console.log(resp.accounts)
      // console.log(resp.categories)
      // console.log(resp.data)
      // console.log(resp.budgets)
  }, [tabN])

  return (
    <ChakraProvider>
      <Box w="100%"  bg="#eaeaea">
        <Box position='fixed' top='0' w='100%' zIndex={1}><Top setTab={setTab}/></Box>
        <Box w="100%"  pt='70px' display="flex" justifyContent='center'>
          <Box mx='20px' mb='23px' display='flex' justifyContent='center' flexGrow={1}>
            {tabN == "Dashboard" && (<Dashboard accounts={accounts} categories={categories} budgets={budgets} data={data} />)}
            {tabN == "transactions" && (<Transactions setNT={setNT} nT={nT} accounts={accounts} categories={categories} data={data} />)}
            {tabN == "accounts" && (<Accounts setNA={setNA} nA={nA} accounts={accounts} />)}
            {tabN == "tags" && (<Tags />)}
            {tabN == "reports" && (<Reports data={data} accounts={accounts} categories={categories}/>)}
            {tabN == "budget" && (<Budget setNB={setNB} nB={nB} budgets={budgets} categories={categories} data={data} />)}
            {tabN == "settings" && (<Settings />)}
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
export default App;
