import React from "react";

import { SnapAmountInput } from "@/components/snapui/amount-input";

export default function SnapAmountInputDemo() {
  const [currency, setCurrency] = React.useState("");
  const [amount, setAmount] = React.useState("");
  return (
    <SnapAmountInput
      codeValue={currency}
      onCurrencyChange={(value) => setCurrency(value)}
      placeholder="Enter amount..."
      value={amount}
      onChange={(event) => setAmount(event.target.value)}
    />
  );
}
