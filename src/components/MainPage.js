import React, { useState } from "react";
import { fetchNews } from "../API";
import CrudSectionItems from "./CrudSectionItems/CrudSectionItems";
import SelectSection from "./SelectSection";

const MainPage = () => {
  const [selectedSection, setSelectedSection] = useState();

  function updateNews() {
    fetchNews()
      .then(() => {
        alert("به روز رسانی به زودی خواهد شد");
      })
      .catch(() => {
        alert("مشکلی رخ داد");
      });
  }

  return (
    <section>
      <h1 className="p-r-24 p-t-64 p-b-24">مدیریت محتوا</h1>

      <button
        onClick={updateNews}
        className="m-r-64 crud-button crud-button--primary "
      >
        بروز رسانی دستی اخبار
      </button>
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
