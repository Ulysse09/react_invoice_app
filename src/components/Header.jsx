import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-around items-center p-4 ">
        <div>
          <h1 className="text-white text-3xl font-semibold">Invoices</h1>
          <p className="text-white font-medium">There are 7 total invoices</p>
        </div>
        <div className="flex justify-between space-x-8 items-center">
          <div>
            <p className="text-white font-semibold text-md">Filter by status</p>
          </div>
          <button
            onClick={openModal}
            className="text-white px-6 py-4 bg-secondary rounded-full"
          >
            <p className="text-white font-semibold text-md"> New Invoice</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
