import useRentModal from "@/app/hooks/useRentModal copy";
import Modal from "./Modal";

const RentModal = () => {
  const rentModal = useRentModal();

  return (
    <div>
      <Modal 
        isOpen={rentModal.isOpen} 
        onClose={rentModal.onClose} 
        title="Airbnb you home!"
        onSubmit={rentModal.onClose}
        actionLabel="Submit"
        />
    </div>
  );
};

export default RentModal;
