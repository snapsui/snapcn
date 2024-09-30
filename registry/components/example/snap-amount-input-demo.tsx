import React from "react";

import { SnapAmountInput } from "@/components/snapui/snap-amount-input";

export default function SnapAmountInputDemo() {
  const [currency, setCurrency] = React.useState("");
  const [amount, setAmount] = React.useState(0.0);
  return (
    <SnapAmountInput
      codeValue={currency}
      onCurrencyChange={(value) => setCurrency(value)}
      placeholder="Enter amount..."
      value={amount}
      onChange={(event) => setAmount(Number(event.target.value))}
    />
  );
}
