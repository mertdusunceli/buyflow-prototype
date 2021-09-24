import { useState, FC } from "react";
import { Button } from "@appfolio/react-gears";
import schema from "./default.json";
import * as steps from "./steps";

export interface StepComponentProps {
  onChange: (cue: string) => void;
}

type ComponentsMap = Record<string, FC<StepComponentProps>>;
interface Schema {
  start: string;
  steps: Record<string, Record<string, string>>;
}

function App() {
  const [currentStep, setCurrentStep] = useState(schema.start);
  const [cue, setCue] = useState<string>();
  const StepComponent = (steps as ComponentsMap)[currentStep];

  const handleNext = () => {
    console.log(cue);
    let next;
    if (cue) {
      next = (schema as Schema).steps[currentStep][cue];
      console.log(currentStep);
      console.log((schema as Schema).steps[currentStep]);
      console.log(schema);
    } else {
      next = (schema as Schema).steps[currentStep]._next;
    }
    setCurrentStep(next);
    setCue(undefined);
  };

  return (
    <div className="App">
      <StepComponent onChange={setCue} />
      <Button onClick={handleNext} color="primary">
        Next
      </Button>
    </div>
  );
}

export default App;
