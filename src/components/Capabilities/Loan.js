import React from "react";
import "./ourcapabilities.css";
const Loan = () => {
  return (
    <div className="secondary-div">
      <div className="secondary-div-heading">
        We are with you through the entirety of your loan process – starting
        from calculations to origination, covenant tracking, collateral
        management, etc.
      </div>
      <hr />
      <div className="secondary-div-content">
        <p>
          There are certain loans that are secured on your home or your car or
          other assets by the lender as collateral in case you are unable to pay
          back the loan. Secured loans have a lower rate of interest and
          generally there is no need for a guarantor. This is a good option for
          long-term borrowers or those who require a large sum of money.
        </p>

        <p>
          Unsecured loans are also called personal loans and tend to have higher
          interest rates. In this case, the borrower agrees to make regular
          payments to the bank or any other lender until the loan is repaid in
          full, along with the interest due. Additional charges are incurred if
          the payment is missed or made late. Unsecured loans are a better
          option if you require immediate cash for short-term expenditures.
        </p>

        <p>We are motivated to help you make the better choice for yourself.</p>
      </div>
    </div>
  );
};

export default Loan;
