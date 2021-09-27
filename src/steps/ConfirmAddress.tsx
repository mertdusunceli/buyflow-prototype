import { FC, ChangeEvent } from "react";
import { StepComponentProps } from "../App";

const ConfirmName: FC<StepComponentProps> = ({ onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <div>
      <h1>Hello world from ConfirmAddress</h1>
      <div className="radio-buttons">
        <input
          value="edit"
          name="platform"
          type="radio"
          onChange={handleChange}
        />
        Edit address
        <input
          value="different"
          name="platform"
          type="radio"
          onChange={handleChange}
        />
        This policy is for a different address
      </div>
    </div>
  );
};

export default ConfirmName;
