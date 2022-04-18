// React Bootstrap components
import { Card, Row, Col } from "react-bootstrap";
// Context API
// Context API
import { useContext } from "react";
import { ExpenseTracker } from "../../context/ExpenseTrackerContext";
// Prop Types
import PropTypes from "prop-types";
// icons
import { XCircleIcon } from "@heroicons/react/outline";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const { deleteTransaction } = useContext(ExpenseTracker);

  return (
    <div>
      <Card
        className="py-2 my-1"
        style={{
          borderRight: `3px solid ${transaction.amount < 0 ? "red" : "green"}`,
        }}
      >
        <Row>
          <Col onClick={() => deleteTransaction(transaction.id)}>
            <XCircleIcon
              style={{ width: "1rem", cursor: "pointer" }}
              className="text-danger"
            />
          </Col>
          <Col>{transaction.text} </Col>
          <Col>
            ({sign}
            {Math.abs(transaction.amount)}){" "}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.object,
};

export default Transaction;
