import React, { useState, useEffect } from "react";
import CRUDTable, {
  Fields,
  Field,
  CreateForm,
  UpdateForm,
} from "react-crud-table";
import SelectSection from "../SelectSection";
import {
  addSection,
  getAllSections,
  updateSection,
  changeActiveSections as changeActiveSectionsApi,
  getActiveSections as getActiveSectionsApi,
} from "../../API";

const CrudSectionItems = () => {
  const [items, setItems] = useState([]);
  const [activeSectionOne, setActiveSectionOne] = useState();
  const [activeSectionTwo, setActiveSectionTwo] = useState();

  function fetchItems() {
    getAllSections().then((response) => {
      setItems(response.data.data);
    });
  }

  function addItem(item) {
    return addSection(item).then((response) => {
      fetchItems();
      return response.data;
    });
  }

  function updateItem(item) {
    return updateSection(item).then((response) => {
      fetchItems();
      return response.data;
    });
  }

  function getActiveSections() {
    getActiveSectionsApi().then((response) => {
      setActiveSectionOne(response.data.data[0].section._id);
      setActiveSectionTwo(response.data.data[1].section._id);
    });
  }

  function changeActiveSections() {
    changeActiveSectionsApi({
      section_one: activeSectionOne,
      section_two: activeSectionTwo,
    }).then(() => {
      getActiveSections();
    });
  }

  const styles = {
    container: { margin: "auto", width: "fit-content" },
  };

  useEffect(() => {
    fetchItems();
    getActiveSections();
  }, []);

  return (
    <>
      <div className="dis-flex p-t-12 p-b-12">
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
        className="crud-button crud-button--primary "
      >
        بروز رسانی بخش های فعال
      </button>
      <div style={styles.container}>
        <CRUDTable
          caption="بخش های صفحه لاگین"
          actionsLabel="عملیات"
          items={items.map((item) => item)}
        >
          <Fields>
            <Field name="title" label="عنوان" />
          </Fields>
          <CreateForm
            title="ایجاد آیتم"
            trigger="ایجاد"
            onSubmit={(item) => addItem(item)}
            submitText="ایجاد آیتم"
          />

          <UpdateForm
            title="ویرایش آیتم"
            trigger="ویرایش"
            onSubmit={(item) => updateItem(item)}
            submitText="ویرایش"
          />
        </CRUDTable>
      </div>
    </>
  );
};

export default CrudSectionItems;
