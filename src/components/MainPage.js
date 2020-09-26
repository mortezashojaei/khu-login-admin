import React, { useEffect, useState } from "react";
import CrudSectionItems from "./CrudSectionItems/CrudSectionItems";
import SelectSection from "./SelectSection";

const MainPage = () => {
  const [selectedSection, setSelectedSection] = useState();

  return (
    <section>
      <h1 className="p-r-24 p-t-64 p-b-24">مدیریت محتوا</h1>
      <div className="dis-flex p-t-12 p-b-12">
        <SelectSection value={selectedSection} onChange={setSelectedSection} />
      </div>
      {selectedSection && (
        <CrudSectionItems selectedSection={selectedSection} />
      )}
    </section>
  );
};

export default MainPage;
