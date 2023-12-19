"use client";
import "../form/style.css"; // Import the CSS file
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addItem } from "./action/action";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const Formiks = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    // Create a new item object from form values
    const newItem = {
      name: formValues.name,
      address: formValues.address,
      email: formValues.email,
    };
  
    // Dispatch actions based on the mode
    if (isEditMode) {
      // Handle edit mode
      dispatch({
        type: "UPDATE_FORM_DATA",
        payload: formValues,
      });
  
      console.log("Form updated:", formValues);
      dispatch(addItem(newItem));

      router.push("/form/confirmationPage");

    } else {
      // Handle create mode
      dispatch({
        type: "UPDATE_FORM_DATA",
        payload: formValues,
      });
  
      dispatch(addItem(newItem));
      console.log("Item added:", newItem);
  
      // Clear form values for create mode
      setFormValues({ name: "", address: "", email: "" });
    }
  };
  

  useEffect(() => {
    // Check if formData is present for edit mode
    if (formData) {
      setIsEditMode(true);
      setFormValues(formData);
    } else {
      setIsEditMode(false);
      setFormValues({ name: "", address: "", email: "" });
    }
  }, [formData]);
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={formValues.name}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            onChange={handleInputChange}
            value={formValues.address}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={formValues.email}
          />
        </label>
        <br />
        <button type="submit">{!isEditMode ? "Update" : "Submit"}</button>
      </form>

      
    </div>
  );
};

export default Formiks;
