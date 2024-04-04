#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("very well your pin code is correct");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: [
        "your acount type information",
        "withdraw",
        "check balance",
        "bill payment",
        "Transfer",
        "yourBranch",
        "update",
      ],
    },
  ]);

  if (operationAns.operation === "your acount type information") {
    let AcountTypes = await inquirer.prompt([
      {
        name: "myAcount",
        message: "select your Acount",
        type: "list",
        choices: [
          "currentAcount",
          "fixedDepositAcount",
          "savingAcouunt",
          "basicAcount",
          "jointAcount",
        ],
      },
    ]);
    if (AcountTypes.myAcount === "currentAcount") {
      console.log("you choose a correct account");
    } else if (AcountTypes.myAcount === "fixedDepositAcount") {
      console.log("your account is'nt fixed Deposit Acount");
    } else if (AcountTypes.myAcount === "savingAcouunt") {
      console.log(
        "its not your account but you transfer your account in to saving account"
      );
    } else if (AcountTypes.myAcount === "basicAcount") {
      console.log(
        "its not your account but you transfer your account in to basicAcount"
      );
    } else if (AcountTypes.myAcount === "jointAcount") {
      console.log(
        "its not your account but you can join your account with your relatives or friends"
      );
    } else {
      console.log("wait for new updates");
    }
  }

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "select your amount",
        type: "list",
        choices: ["option", "otherAmount"],
      },
    ]);

    if (amountAns.amount === "option") {
      let numbeR = await inquirer.prompt([
        {
          name: "AmounT",
          message: "enter your amount",
          type: "list",
          choices: ["2000", "5000", "10000", "20000"],
        },
      ]);

      myBalance -= numbeR.AmounT;
      console.log("your remaining balance is:" + myBalance);
      console.log("your transection is sccessfully");
    } else if (amountAns.amount === "otherAmount") {
      let othernum = await inquirer.prompt([
        {
          name: "Amount",
          message: "Enter your amount",
          type: "number",
        },
      ]);
      if (myBalance >= othernum.Amount) {
        console.log((myBalance -= othernum.Amount));
        console.log("your remaining balance is:" + myBalance);
      } else {
        console.log(
          "the number selected by you is less than your balance  please try again"
        );
      }
    }
  } else if (operationAns.operation === "check balance") {
    console.log("your balance is:" + myBalance);
    console.log("your transection is sccessfully");
  } else if (operationAns.operation === "bill payment") {
    let billcode = 3478;
    let code = await inquirer.prompt([
      {
        name: "bill",
        message: "enter your billCode",
        type: "number",
      },
    ]);
    if (code.bill === billcode) {
      console.log("your pin code is correct press enter");
    } else {
      console.log("your code is inncorect");
    }

    let mybill = await inquirer.prompt([
      {
        name: "billpayment",
        message: "please enter amount",
        type: "number",
      },
    ]);

    if (myBalance >= mybill.billpayment) {
      console.log((myBalance -= mybill.billpayment));
      console.log("your remaining balance is:" + myBalance);
      console.log("your transection is sccessfully");
    } else {
      console.log("the amount selected by you is less than your balance");
    }
  } else if (operationAns.operation === "Transfer") {
    let AcountNum = 4040;
    let Acc = await inquirer.prompt([
      {
        name: "cash",
        message: "enter your account number",
        type: "number",
      },
    ]);
    if (Acc.cash === AcountNum) {
      console.log("your account number is correct");
    } else {
      console.log("your acc_num is inncorect");
    }

    let Cashtransfer = await inquirer.prompt([
      {
        name: "transfeR",
        message: "please enter amount",
        type: "number",
      },
    ]);

    if (myBalance >= Cashtransfer.transfeR && Acc.cash === AcountNum) {
      console.log((myBalance -= Cashtransfer.transfeR));
      console.log("your remaining balance is:" + myBalance);
      console.log("your transection is sccessfully");
    } else {
      console.log("the amount selected by you is less than your balance");
    }
  } else if (operationAns.operation === "yourBranch") {
    console.log(
      "citizen Apartment,Plot No SL-23, Shahrah-e-usman north karachi"
    );
  }
} else {
  console.log("your pin code is incorrect");
}
