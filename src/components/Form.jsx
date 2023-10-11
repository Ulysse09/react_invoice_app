import React from "react";

const Form = ({
  handleSubmit,
  amount,
  date,
  status,
  closedModal,
  name,
  setName,
  setAmount,
  setDate,
  setStatus,
  add,
}) => {
  return (
    <div>
      <div className="fixed inset-0 md:inset-x-22 md:inset-y-0 md:w-1/2  bg-sidebar rounded-2xl">
        <form
          onSubmit={handleSubmit}
          action="/"
          method="get"
          id="form"
          on
          className="flex flex-col space-y-4  justify-center p-6 "
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-white font-semibold">
              Enter name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name1"
              className="border-collapse text-white rounded-2xl p-4   bg-sbar "
              placeholder=""
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-white font-semibold ">
              Enter amount
            </label>

            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              id="amount"
              className="border-collapse  rounded-2xl p-4 text-white bg-sbar"
              placeholder="Enter your amount"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-white font-semibold">
              Date
            </label>

            <div></div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border-collapse text-white border-black rounded-2xl  p-4   bg-sbar"
              name=""
              id="message"
              placeholder="Enter your message"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-white font-semibold">
              Status
            </label>

            <select
              value={status}
              id=""
              onChange={(e) => setStatus(e.target.value)}
              className="border-collapse text-white border-black rounded-2xl  p-4  bg-sbar"
            >
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </div>

          <div className="space-x-6 flex justify-center p-6">
            <button
              type="submit"
              className="px-6 py-2 bg-beaver font-semibold text-white rounded-2xl  "
              id="btn1"
              onClick={add}
            >
              Submit
            </button>
            <button
              type=""
              className="px-6 py-2 bg-red-500  font-semibold text-white rounded-2xl  "
              id="btn1"
              onClick={closedModal}
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
