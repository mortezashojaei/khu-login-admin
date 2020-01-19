import React, { useEffect, useState } from "react";
import axios from "axios";
import CrudSectionItems from "./CrudSectionItems/CrudSectionItems";

const MainPage = () => {
  const [selectedSection, setSelectedSection] = useState();
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
    <>
      <div className="dis-flex p-t-12 p-b-12">
        <select
          defaultValue=""
          value={selectedSection}
          onChange={e => {
            setSelectedSection(e.target.value);
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
      </div>
      {selectedSection && (
        <CrudSectionItems selectedSection={selectedSection} />
      )}
    </>
  );
};

export default MainPage;
