"use client";

import { Button } from "@/components/ui/button";

const Step2 = ({ setStep }) => {
  return (
    <div className="flex flex-col gap-4">
      <div>Hello Step 2</div>

      <div className="flex gap-4">
        <Button
          type="button"
          onClick={() => setStep(1)} 
        >
          Back
        </Button>

        <Button type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Step2;
