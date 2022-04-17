// React Boostrap components
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { useState } from "react";

const NewTransaction = () => {
  const [value, setValue] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <Form className="px-2">
        <FormGroup>
          <lable>input</lable>
          <FormControl
            type="text"
            placeholder="transaction..."
            size="sm"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label>Value</label>
          <FormControl
            type="number"
            min={0}
            placeholder="amount"
            size="sm"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormGroup>
        <Button size="sm" className="w-100 mt-3" onClick={() => alert(value,amount)}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewTransaction;
