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
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";

export function expenses(data, duration) {
  var totalExpenses = 0;
  data.map((d) => {
    if (d.tType == "Expense")
      totalExpenses = totalExpenses + parseFloat(d.amount);
  });
  return totalExpenses;
}

export function income(data, duration) {
  console.log(data);
  var totalIncome = 0;
  data.map((d) => {
    if (d.tType == "Income") totalIncome = totalIncome + parseFloat(d.amount);
  });
  return totalIncome;
}

export function balance(accounts) {
  var totalBal = 0;
  accounts.map((a) => {
    totalBal = totalBal + parseFloat(a.bal);
  });
  return totalBal;
}

export function Piechart(props) {
  const data1 = [];

  props.categories.map((c) => {
    var total = 0;
    props.data.map((d) => {
      if (d.category == c && d.tType == "Expense")
        total = total + parseFloat(d.amount);
    });
    var data = { name: c, value: total };
    data1.push(data);
  });

  return (
    <Box w="100%" h="100%">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data1}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#141326"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}

export function Linechart(props) {
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  const data1 =[];

  props.accounts.map( a => {
    var total = 0;
    props.data.map( d => {
      if(d.account == a.name && d.tType == 'Expense') total = total + parseFloat(d.amount);
    })
    var data = {"name": a.name, "pv": a.bal, "uv": total}
    data1.push(data)
  })

  return (
    <Box w="100%" h="100%">
      <ResponsiveContainer width="95%" height="95%">
      <LineChart
        width={730}
        height={250}
        data={data1}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#30BA00" />
        <Line type="monotone" dataKey="uv" stroke="#E91717" />
      </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
