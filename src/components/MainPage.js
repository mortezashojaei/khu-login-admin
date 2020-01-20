import React, { useEffect, useState } from "react";
import CrudSectionItems from "./CrudSectionItems/CrudSectionItems";
import { Link } from "react-router-dom";
import SelectSection from "./SelectSection";

const MainPage = () => {
  const [selectedSection, setSelectedSection] = useState();

  return (
    <>
      <div className="dis-flex p-t-12 p-b-12">
        <SelectSection value={selectedSection} onChange={setSelectedSection} />
      </div>
      <div className="dis-flex p-t-12 p-b-12">
        <Link className="m-l-r-auto" to="/sections">
          <button className="crud-button crud-button--primary ">
            مدیریت بخش ها
          </button>
        </Link>
      </div>
      {selectedSection && (
        <CrudSectionItems selectedSection={selectedSection} />
      )}
    </>
  );
};

export default MainPage;
