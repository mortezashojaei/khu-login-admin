import React, { useState, useEffect } from "react";
import SelectSection from "../SelectSection";
import {
  changeActiveSections as changeActiveSectionsApi,
  getActiveSections as getActiveSectionsApi,
} from "../../API";

export const ActiveSections = () => {
  const [activeSectionOne, setActiveSectionOne] = useState();
  const [activeSectionTwo, setActiveSectionTwo] = useState();

  function changeActiveSections() {
    changeActiveSectionsApi({
      section_one: activeSectionOne,
      section_two: activeSectionTwo,
    }).then(() => {
      getActiveSections();
    });
  }

  function getActiveSections() {
    getActiveSectionsApi().then((response) => {
      setActiveSectionOne(response.data.data[0].section._id);
      setActiveSectionTwo(response.data.data[1].section._id);
    });
  }

  useEffect(() => {
    getActiveSections();
  }, []);

  return (
    <>
      <div className="dis-flex p-t-12 p-b-12">
        <h3 className="m-t-12 m-b-8">دو بخش فعال مورد نظر را انتخاب کنید</h3>
        {activeSectionOne && (
          <SelectSection
            value={activeSectionOne}
            onChange={setActiveSectionOne}
          />
        )}
        {activeSectionTwo && (
          <SelectSection
            value={activeSectionTwo}
            onChange={setActiveSectionTwo}
          />
        )}
      </div>
      <button
        onClick={changeActiveSections}
        className="crud-button crud-button--primary"
      >
        بروز رسانی بخش های فعال
      </button>
    </>
  );
};
