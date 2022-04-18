// React Boostrap components
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { ExpenseTracker } from "../../context/ExpenseTrackerContext";

const NewTransaction = () => {
  const [value, setValue] = useState("");
  const [amount, setAmount] = useState(0);
    // context api 
  const { addTransaction } = useContext(ExpenseTracker);

  const onSubmit = (value,amount) =>{
    addTransaction(value,amount)
    setValue("");
    setAmount(0)
  }

  return (
    <>
      <Form className=" px-2 mt-3" style={{textAlign:"left"}} >
        <FormGroup className="pb-3">
          <Form.Label>Title of transaction:</Form.Label>
          <FormControl
            type="text"
            placeholder="transaction..."
            size="sm"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label> Amount: </Form.Label>
          <FormControl
            type="number"
            placeholder="amount"
            size="sm"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Form.Text>
            (negetive and postive amount)
          </Form.Text>
        </FormGroup>
        <Button
          size="sm"
          className="w-100 mt-3"
          onClick={() => onSubmit(value, +amount)}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default NewTransaction;
