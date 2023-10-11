import { useState } from "react";
import pacman from "./assets/pacman.png";
import badman from "./assets/badman.jpeg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invoice from "./pages/Invoice";
import RenderedList from "./components/RenderedList";
import Form from "./components/Form";

function App() {
  {
    /*on form submit*/
  }

  const [formData, setFormData] = useState([]);

  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newDataEntry = {
      name,
      amount,
      date,
      status,
    };

    setFormData((formData) => [...formData, newDataEntry]);

    setAmount("");
    setName("");
    setDate("");
    setStatus("");

    setIsOpen(false);
  };
  {
    /*form state-mananagement*/
  }

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Pending");

  {
    /**modal conditional rendering */
  }

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closedModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="flex contain    md:flex-col  justify-between  md:h-screen items-center   bg-sidebar w-1/18  md:rounded-tr-3xl md:rounded-br-3xl md:absolute  md:top-0 md:left-0">
        <div className="flex ">
          <img src={pacman} alt="" />
        </div>
        <div className="p-4 w-20">
          <img className="rounded-full" src={badman} alt="" />
        </div>
      </nav>
      <div className="flex-col md:flex justify-between items-center px-4 relative container mx-auto    ">
        <div className="flex flex-col  space-x-10 pt-24 px-24 justify-between container mx-auto  ">
          <div className="flex justify-between container mx-auto">
            <div className="p-8   ">
              <h1 className="text-white text-4xl font-bold">Invoices</h1>
              <p className="text-white font-medium">
                There are 7 total invoices
              </p>
            </div>
            <div className="flex justify-between space-x-10 items-center">
              <div>
                <p className="text-white font-semibold text-md">
                  Filter by status
                </p>
              </div>
              <button
                onClick={openModal}
                className="text-white px-6 py-4  space-x-2 rounded-full flex items-center  bg-beaver"
              >
                <div className="px-1 py-1 rounded-full bg-white text-secondary flex items-center">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </p>
                </div>
                <p className="text-white font-semibold text-md"> New Invoice</p>
              </button>
            </div>
          </div>
          {/*rendered list*/}
          {<RenderedList formData={formData} name={name} />}
        </div>

        {/*form modal*/}

        {isOpen && (
          <Form
            handleSubmit={handleSubmit}
            amount={amount}
            name={name}
            date={date}
            status={status}
            closedModal={closedModal}
            setName={setName}
            setAmount={setAmount}
            setDate={setDate}
            setStatus={setStatus}
            add={add}
            count={count}
          />
        )}
      </div>
    </>
  );
}

export default App;
