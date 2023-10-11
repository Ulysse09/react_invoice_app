import React, { useState } from "react";
import { Link } from "react-router-dom";

const RenderedList = ({ formData, count }) => {
  return (
    <div>
      {formData.map((user) => {
        return (
          <>
            <div className="space-x-12">
              <Link
                to={`/invoice/${formData}`}
                //path="/invoice"
                className="space-x-12"
                //   element={<Invoice />}
              >
                <div className=" bg-secondary rounded-lg text-white flex  space-y-24 md:space-y-2 flex-col md:flex-row  justify-evenly  p-4 px-10 md:px-22  md:py-2 font-semibold text-3xl hover:border-2 hover:border-blue-400 container mx-auto mb-14  items-center ">
                  <p className="font-semibold text-xl">1</p>
                  <p className="font-normal text-xl ">{user.date}</p>
                  <p className="font-normal text-xl">{user.name}</p>

                  <p className="font-semibold text-2xl ">{user.amount}</p>
                  <p className="px-4 py-2 bg-pending text-orange-500 text-3xl items-center rounded-lg  ">
                    {user.status}
                  </p>
                </div>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default RenderedList;
