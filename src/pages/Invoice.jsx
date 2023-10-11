import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

function Invoice(formData) {
  const [open, setIsOpen] = useState(false);
  const isOpen = () => {
    setIsOpen(true);
  };

  const isClosed = () => {
    setIsOpen(false);
  };
  return (
    <div className="p-10 container mx-auto space-y-14">
      {console.log({ formData })}
      <Link to="/">
        <button className="text-white text-lg font-semibold">Go back</button>
      </Link>
      <div className="p-8 ">
        <div className="bg-secondary rounded-lg flex justify-between p-10 text-white text-2xl font-semibold items-center ">
          <div className="flex space-x-4">
            <p className=" font-normal">Status</p>
            <p>Paid</p>
          </div>
          <div className="flex space-x-4">
            <button
              className="bg-white text-secondary rounded-3xl px-6 py-4 hover:bg-slate-100"
              onClick={isOpen}
            >
              Edit
            </button>
            <button className="bg-red-400 text-white rounded-3xl px-6 py-4">
              Delete
            </button>
            <button className="bg-purple-400 text-white rounded-3xl px-6 py-4">
              Mark as paid
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="p-8 bg-secondary rounded-t-lg ">
          <div>
            <div className="flex justify-between text-white font-semibold text-2xl">
              <div className="space-y-8">
                <div>
                  <p>Bill To:</p>
                  <p className="font-normal">Kabalisa Paul</p>
                </div>
                <div>
                  <p>Invoice Date:</p>
                  <p className="font-normal">2021-01-29</p>
                </div>
              </div>
              <div>
                <p>Amount:</p>
                <p className="font-normal">500</p>
              </div>

              <div>
                <p>Status:</p>
                <p className="font-normal">Pending</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-black rounded-lg">
          <div>
            <div className="flex justify-between text-white font-semibold text-2xl">
              <div className="space-y-8">
                <div>
                  <p>Amount</p>
                </div>
              </div>

              <div>
                <p>5000$</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && <Form />}
    </div>
  );
}

export default Invoice;
