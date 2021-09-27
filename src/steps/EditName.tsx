import { FC, ChangeEvent } from "react";
import { StepComponentProps } from "../App";

const EditName: FC<StepComponentProps> = ({ onChange }) => {
  return (
    <div>
      <h1>Hello world from EditName</h1>
    </div>
  );
};

export default EditName;
