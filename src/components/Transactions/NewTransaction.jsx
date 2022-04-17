import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

const NewTransaction = () => {
  return (
    <div>
      <Form className="px-2">
        <FormGroup>
          <lable>input</lable>
          <FormControl type="text" placeholder="transaction..." size="sm" />
        </FormGroup>
        <FormGroup>
          <label>Value</label>
          <FormControl type="number" min={0} placeholder="amount" size="sm" />
        </FormGroup>
        <Button size="sm" className="w-100 mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewTransaction;
