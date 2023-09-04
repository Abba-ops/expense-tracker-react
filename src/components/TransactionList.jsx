import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
import { useContext } from "react";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      {transactions.length ? (
        <ul className="list">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      ) : (
        <div>No Transactions</div>
      )}
    </>
  );
}
