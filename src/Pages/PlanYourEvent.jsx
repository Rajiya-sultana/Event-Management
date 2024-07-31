import { useState } from "react";
import plan_event from "../assets/plan_event";
import plan_event2 from "../assets/plan_event2";
import plan_event3 from "../assets/plan_event3";
import plan_event4 from "../assets/plan_event4";
import ReceiptModal from "../Components/ReceiptModal";

const PlanYourEvent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showReceipt, setShowReceipt] = useState(false);
  const [charges, setCharges] = useState({
    venueCharge: 0,
    decorationCharge: 0,
    comfortZoneCharge: 0,
    serviceCharge: 85000,
    portalCharge: 15000,
    peopleCharge: 21000,
  });
  const [selectedCard, setSelectedCard] = useState({});

  const pages = [
    {
      title: "Which type of event do you want to plan?",
      plans: plan_event,
    },
    {
      title: "What do you want to celebrate?",
      plans: plan_event2,
    },
    {
      title: "Which type of venue do you prefer?",
      plans: plan_event3,
    },
    {
      title: "Theme of Decoration",
      plans: plan_event4,
    },
  ];

  const totalPages = pages.length;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleShowReceipt = () => {
    setShowReceipt(true);
  };

  const handleCloseReceipt = () => {
    setShowReceipt(false);
  };

  const handleCardClick = (index, charge, category) => {
    setSelectedCard((prevSelected) => ({
      ...prevSelected,
      [currentPage]: index,
    }));
    if (currentPage > 1) {
      setCharges((prevCharges) => {
        const updatedCharges = { ...prevCharges };
        if (selectedCard[currentPage] !== undefined) {
          const previousIndex = selectedCard[currentPage];
          const previousCharge =
            pages[currentPage - 1].plans[previousIndex].charge;
          updatedCharges[category] -= previousCharge;
        }
        updatedCharges[category] += charge;
        return updatedCharges;
      });
    }
  };

  const handleBookNow = () => {
    setShowReceipt(false);
    window.location.reload();
  };

  const allPagesSelected = Object.keys(selectedCard).length === totalPages;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg sm:text-2xl text-customRed font-bold my-10">
        {pages[currentPage - 1].title}
      </h1>
      <div>
        <div className="p-4 flex items-center gap-x-2 sm:gap-x-12 gap-y-4 sm:gap-y-14 flex-wrap ml-2 sm:ml-4 max-w-[800px] sm:h-96">
          {pages[currentPage - 1].plans.map((plan, i) => (
            <div
              key={i}
              onClick={() => {
                if (currentPage === 1) {
                  setSelectedCard((prevSelected) => ({
                    ...prevSelected,
                    [currentPage]: i,
                  }));
                } else if (currentPage === 2) {
                  handleCardClick(i, plan.charge, "venueCharge");
                } else if (currentPage === 3) {
                  handleCardClick(i, plan.charge, "comfortZoneCharge");
                } else if (currentPage === 4) {
                  handleCardClick(i, plan.charge, "decorationCharge");
                }
              }}
              className={`flex flex-col gap-y-3 items-center rounded-xl p-4 border-2 border-customColor w-[150px] h-[150px] cursor-pointer ${
                selectedCard[currentPage] === i ? "bg-gray-300" : ""
              }`}
            >
              <img src={plan.img} alt="" />
              <p>{plan.text}</p>
              <p>{plan.charge}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 px-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="sm:px-6 sm:py-2 sm:border-[3px] border-customColor rounded-xl text-black"
          >
            Previous
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={` px-2 sm:px-4 sm:py-2 py-1 border rounded ${
                  currentPage === i + 1 ? "bg-gray-300" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          {currentPage === totalPages ? (
            <div className="flex justify-center">
              <button
                onClick={handleShowReceipt}
                disabled={!allPagesSelected}
                className={`sm:px-4 sm:py-2 sm:border-[3px] border-customColor rounded-xl text-black ${
                  !allPagesSelected ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Make Receipt
              </button>
            </div>
          ) : (
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="sm:px-10 sm:py-2 sm:border-[3px] border-customColor rounded-xl text-black"
            >
              Next
            </button>
          )}
        </div>
      </div>
      <ReceiptModal
        show={showReceipt}
        onClose={handleCloseReceipt}
        charges={charges}
        onBookNow={handleBookNow}
      />
    </div>
  );
};

export default PlanYourEvent;
