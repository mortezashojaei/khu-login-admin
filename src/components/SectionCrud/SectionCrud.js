import React, { useState, useEffect } from "react";
import CRUDTable, {
  Fields,
  Field,
  CreateForm,
  UpdateForm,
} from "react-crud-table";
import { addSection, getAllSections, updateSection } from "../../API";

const CrudSectionItems = () => {
  const [items, setItems] = useState([]);

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

  const styles = {
    container: { margin: "auto", width: "fit-content" },
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
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
  );
};

export default CrudSectionItems;
