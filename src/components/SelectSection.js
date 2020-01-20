import React, { useState, useEffect } from "react";
import axios from "axios";

const SelectSection = ({ value, onChange }) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/api/v1/sections/get-all-sections")
      .then(response => {
        setSections(response.data.data);
      })
      .catch(error => {
        alert("خطایی پیش امده لطفا دوباره امتحان کنید");
      });
  }, []);
  return (
    <select
      value={value}
      onChange={e => {
        onChange(e.target.value);
      }}
      className="m-l-r-auto"
    >
      <option value="" disabled selected>
        بخش مورد نظر خود را انتخاب نمایید
      </option>
      {sections.map(section => (
        <option value={section._id}>{section.title}</option>
      ))}
    </select>
  );
};

export default SelectSection;
