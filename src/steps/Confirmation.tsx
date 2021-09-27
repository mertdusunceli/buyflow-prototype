import { FC, ChangeEvent } from "react";
import { StepComponentProps } from "../App";

const PaymentBlock: FC<StepComponentProps> = ({ onChange }) => {
  return (
    <div>
      <h1>Hello world from Confirmation</h1>
    </div>
  );
};

export default PaymentBlock;
