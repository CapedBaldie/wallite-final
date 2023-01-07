import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import dayjs from "dayjs";

const app = express();
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const PORT = process.env.PORT || 27017;
const CONNECTION_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/wallite";

mongoose.set("strictQuery", true);
const { Schema } = mongoose;

const transactionSchema = new Schema({
  user: String,
  categories: [
    "All",
    "Shopping",
    "Food",
    "Travel",
    "Entertainment",
    "Medical",
    "Miscellaneous",
    "Income",
    "Savings",
  ],
  data: [
    {
      name: String,
      category: String,
      tType: String,
      account: String,
      amount: String,
      date: String,
      time: String,
      to: String,
    },
  ],
  accounts: [
    {
      name: String,
      bal: String,
      tType: String,
    },
  ],
  budgets: [
    {
      category: String,
      amount: String,
      duration: String,
    },
  ],
});

const Transaction = mongoose.model("transaction", transactionSchema);

const userSchema = new Schema({
  username: String,
  password: String,
});

const User = mongoose.model("user", userSchema);

mongoose
  .connect(CONNECTION_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    throw err;
  });

app.post("/wallite/userdata", (req, res) => {
  Transaction.findOne({ user: req.body.user }).then((data) => {
    res.send(data);
  });
});

app.post("/wallite/addtransaction", (req, res) => {
  console.log(req.body);
  Transaction.updateOne(
    { user: req.body.user },
    {
      $push: {
        data: {
          name: req.body.name,
          category: req.body.category,
          tType: req.body.tType,
          account: req.body.account,
          amount: req.body.amount,
          date: req.body.date,
          time: req.body.time,
          to: req.body.to,
        },
      },
    },
    function (err, docs) {
      if (err) console.log(err);
      else {
        console.log("Transaction added");
        res.send(true);
      }
    }
  );
});

app.post("/wallite/addaccount", (req, res) => {
  console.log(req.body);
  Transaction.updateOne(
    { user: req.body.user },
    {
      $push: {
        accounts: {
          name: req.body.name,
          bal: req.body.bal,
          tType: req.body.tType,
        },
      },
    },
    function (err, docs) {
      if (err) console.log(err);
      else {
        console.log("Account added");
        res.send(true);
      }
    }
  );
});

app.post("/wallite/addbudget", (req, res) => {
  console.log(req.body);
  Transaction.updateOne(
    { user: req.body.user },
    {
      $push: {
        budgets: {
          category: req.body.category,
          amount: req.body.amount,
          duration: req.body.duration,
        },
      },
    },
    function (err, docs) {
      if (err) console.log(err);
      else {
        console.log("Budget added");
        res.send(true);
      }
    }
  );
});

app.post("/wallite/updateAccount", (req, res) => {
  Transaction.updateOne(
    { user: req.body.user, "accounts.name": req.body.account },
    {
      $set: {
        "accounts.$.bal": req.body.bal,
      },
    },
    function (err, docs) {
      if (err) console.log(err);
      else {
        console.log("Transaction added");
        res.send(true);
      }
    }
  );
});

app.get("/wallite", (req, res) => {
  const newTrans = new Transaction({
    user: "Saarang",
    categories: [
      "All",
      "Shopping",
      "Food",
      "Travel",
      "Entertainment",
      "Medical",
      "Miscellaneous",
      "Income",
      "Savings",
    ],
    data: [
      {
        name: "Dominos",
        category: "Food",
        tType: "Expense",
        account: "Account 4",
        amount: "425",
        date: "2023-01-22",
        time: "08:30 PM",
        to: "Dominos",
      },
      {
        name: "Groceries",
        category: "Shopping",
        tType: "Expense",
        account: "Account 1",
        amount: "953",
        date: "2023-01-04",
        time: "10:15 AM",
        to: "Malakaar",
      },
    ],
    accounts: [
      { name: "Account 1", bal: "2000", tType: "credit" },
      { name: "Account 2", bal: "5000", tType: "savings" },
    ],
    budgets: [
      {
        category: "Shopping",
        amount: "2000",
        duration: "Monthly",
      },
      {
        category: "Food",
        amount: "500",
        duration: "Weekly",
      },
    ],
  });
  newTrans.save();
  res.send("done");
});

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
