import React from "react";
import "./PaymentSuccess.css";

const PaymentSuccess = ({ transactionId }) => {
  return (
    <div className="payment-success-container">
      <h1>Payment Successful!</h1>
      <p>
        Your transaction has been completed and your payment has been processed.
      </p>
      <p>Transaction ID: {transactionId}</p>
      <button onClick={() => window.location.reload()}>
        Make Another Payment
      </button>
    </div>
  );
};

export default PaymentSuccess;
