"use client";
import React, { useState } from "react";
import ModalComponent from "@/components/modal";
type FormDataType = {
  name: string;
  day: daysType;
};

type daysType = {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  Thurday: boolean;
  Friday: boolean;
  Saturday: boolean;
  Sunday: boolean;
};

const initDays: daysType = {
  monday: false,
  tuesday: false,
  wednesday: true,
  Thurday: false,
  Friday: false,
  Saturday: false,
  Sunday: false,
};
const initFormData = {
  name: "",
  day: initDays,
};

export default function HelloForm() {
  const [firstName, setfirstName] = useState("");
  const [day, setDay] = useState("");

  // Modal
  const [isModal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  // const [formData, setFormData] = useState<FormData>(initFormData)
  const handSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    openModal();

    console.log(
      "Submitted Sucessfully " + "\nFirst Name: " + firstName + "\nDay: " + day
    );
  };

  return (
    <div className="w-full flex justify-center items-center h-[80vh]">
      <div className="bg-neutral-900 rounded-lg border-1 border-neutral-600 shadow-xl shadow-neutral-900 text-neutral-200 w-fit px-8 py-12 space-y-4">
        <h1 className="text-center font-bold text-lg">Simple User Form</h1>

        <form>
          <div className="flex flex-col gap-4">
            <div className="space-x-4">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                onChange={(e) => setfirstName(e.target.value)}
                placeholder="John"
                required
                className="border-2 border-neutral-800
                  rounded-lg pl-2"
              />
            </div>

            <div className="flex flex-row gap-4">
              <label htmlFor="day">Select Day</label>
              <select
                name="select"
                id="select"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="bg-neutral-800 px-11.5 rounded-lg"
              >
                <option value={""} disabled className="text-neutral-200">
                  Choose Here
                </option>

                <option value={"monday"}> monday</option>

                <option value={"tuesday"}> tuesday</option>

                <option value={"wednesday"}> wednesday</option>

                <option value={"thursday"}>thursday</option>

                <option value={"friday"}>friday</option>

                <option value={"saturday"}>saturday</option>

                <option value={"sunday"}>sunday</option>
              </select>
            </div>

            <button
              type="submit"
              onClick={(e) => handSubmit(e)}
              className="bg-white/80 text-neutral-900 px-2 py-1 rounded-lg font-bold"
            >
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>

      {isModal && (
        <ModalComponent isOpen={isModal} onClose={closeModal}>
          <div className="w-full">
            <h3 className="text-emerald-500 text-center py-2">Sucess</h3>
            <div className="w-full px-5">
              <p>Name: {firstName}</p>
              <p>Day: {day}</p>
            </div>
          </div>
        </ModalComponent>
      )}
    </div>
  );
}
