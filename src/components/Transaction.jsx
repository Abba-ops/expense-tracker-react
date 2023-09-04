import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

export default function Transaction({ transaction }) {
  const { dispatch } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={sign === "+" ? "plus" : "minus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount).toFixed(2)}
      </span>
      <button
        className="delete-btn"
        onClick={() =>
          dispatch({ type: "DELETE_TRANSACTION", id: transaction.id })
        }>
        &#10005;
      </button>
    </li>
  );
}
