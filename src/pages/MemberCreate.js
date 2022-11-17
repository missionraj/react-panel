import { useState } from "react";
import axios from "../axios";
function MemberCreate() {
  const [form, setForm] = useState({
    name: "",
    enrollId: 0,
    contactNumber: "",
    address: "",
    enrollDate: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e, type) => {
    const updatedForm = { ...form };
    switch (type) {
      case "name":
        updatedForm.name = e.target.value;
        break;
      case "enrollid":
        updatedForm.enrollId = e.target.value;
        break;
      case "contactnumber":
        updatedForm.contactNumber = e.target.value;
        break;
      case "address":
        updatedForm.address = e.target.value;
        break;
      case "enrolldate":
        updatedForm.enrollDate = e.target.value;
        break;
      case "startDate":
        updatedForm.startDate = e.target.value;
        break;
      case "enddate":
        updatedForm.endDate = e.target.value;
        break;
      default:
    }

    setForm(updatedForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postUsers(form);
  };

  const postUsers = (data) => {
    axios
      .post("/members/create", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((data) => {
        console.log("data ....", data);
      })
      .catch((err) => {
        console.log("error in ", err);
      });
  };
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="form-group mb-6">
          <label
            for="enrollId"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Enroll id
          </label>
          <input
            type="number"
            value={form.enrollId}
            onChange={(e) => {
              handleChange(e, "enrollid");
            }}
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="enrollId"
          />
        </div>
        <div className="form-group mb-6">
          <label
            for="name"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => {
              handleChange(e, "name");
            }}
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="name"
          />
        </div>
        <div className="form-group mb-6">
          <label
            for="address"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Address
          </label>
          <input
            type="textarea"
            value={form.address}
            onChange={(e) => {
              handleChange(e, "address");
            }}
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="address"
          />
        </div>
        <div className="form-group mb-6">
          <label
            for="contactnumber"
            className="form-label inline-block mb-2 text-gray-700"
          >
            contactNumber
          </label>
          <input
            type="text"
            value={form.contactNumber}
            onChange={(e) => {
              handleChange(e, "contactnumber");
            }}
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="contactnumber"
          />
        </div>
        <div className="form-group mb-6">
          <label
            for="enrolldate"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Enroll Date
          </label>
          <input
            type="date"
            value={form.enrollDate}
            onChange={(e) => {
              handleChange(e, "enrolldate");
            }}
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="enrolldate"
          />
        </div>
        <div className="form-group mb-6">
          <label
            for="startdate"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Start Date
          </label>
          <input
            type="date"
            value={form.startDate}
            onChange={(e) => {
              handleChange(e, "startDate");
            }}
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="startdate"
          />
        </div>
        <div className="form-group mb-6">
          <label
            for="enddate"
            className="form-label inline-block mb-2 text-gray-700"
          >
            End Date
          </label>
          <input
            type="date"
            value={form.endDate}
            onChange={(e) => {
              handleChange(e, "enddate");
            }}
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="enddate"
          />
        </div>
        <button
          type="submit"
          className="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MemberCreate;
