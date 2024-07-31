import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ReceiptModal = ({ show, onClose, charges, onBookNow }) => {
  if (!show) return null;

  const totalCharge = Object.values(charges).reduce(
    (acc, charge) => acc + charge,
    0
  );

  const chargeItems = [
    { label: "Venue Charge", value: charges.venueCharge },
    { label: "Decoration Charge", value: charges.decorationCharge },
    { label: "Comfort Zone Charge", value: charges.comfortZoneCharge },
    { label: "Service Charge", value: charges.serviceCharge },
    { label: "Portal Charge", value: charges.portalCharge },
    { label: "People per Head", value: charges.peopleCharge },
  ];

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center p-2">
      <div className="bg-white sm:p-16 py-6 rounded-lg shadow-lg max-w-xl w-full relative flex flex-col items-center">
        <h2 className="text-2xl font-bold text-customRed mb-4">YOUR INVOICE</h2>
        <div className="sm:w-[500px] w-[300px] sm:px-10 py-6 rounded-lg">
          {chargeItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between text-xl font-semibold mb-3"
            >
              <p className="w-2/3">{item.label}</p>
              <p className="w-1/3 text-right">{item.value}/-</p>
            </div>
          ))}
          <hr className="w-full my-4 h-[3px] rounded-xl bg-gray-800" />
          <div className="flex justify-between text-xl font-bold mb-3">
            <p className="w-2/3">Total</p>
            <p className="w-1/3 text-right">{totalCharge}/-</p>
          </div>
        </div>
        <button
          onClick={onBookNow}
          className="bg-customRed hover:bg-customColor text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-xl"
        >
          BOOK NOW
        </button>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 border rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          <AiOutlineClose size={24} />
        </button>
      </div>
    </div>
  );
};

export default ReceiptModal;
