"use client";

import useRentModal from "@/app/hooks/useRentModal copy";
import Modal from "./Modal";
import { useMemo, useState } from "react";
import Heading from "../Heading";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const rentModal = useRentModal();

  const [step, setStep] = useState(STEPS.CATEGORY); //initialState = 0

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      //first step so there is no backButton
      return undefined;
    }

    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading 
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
    </div>
  )

  return (
    <div>
      <Modal
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={rentModal.onClose}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.CATEGORY ? undefined: onBack}
        title="Airbnb you home!"
        body={bodyContent}
      />
    </div>
  );
};

export default RentModal;
