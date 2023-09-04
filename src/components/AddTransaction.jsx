import { GlobalContext } from "../context/GlobalState";
import { useContext, useState } from "react";

export default function AddTransaction() {
  const { dispatch } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      text,
      amount: +amount,
      id: crypto.randomUUID(),
    };
    dispatch({ type: "ADD_TRANSACTION", transaction: newTransaction });
    setAmount("");
    setText("");
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            id="text"
            type="text"
            name="text"
            value={text}
            placeholder="Enter text here..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            <div>
              Amount <span>(negative - expense, positive - income)</span>
            </div>
          </label>
          <input
            id="amount"
            type="number"
            name="amount"
            value={amount}
            placeholder="Enter amount here..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}
