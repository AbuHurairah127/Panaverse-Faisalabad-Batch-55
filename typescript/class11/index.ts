import inquirer from "inquirer";
import { askPin } from "./askpin.js";

const data = {
  accountNo: 123,
  pin: 1234,
};

const pin = await askPin();

if (pin) {
  console.log("pin.pin", pin);
  console.log(pin.pin == data.pin);
}
