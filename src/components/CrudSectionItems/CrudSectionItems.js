import React, { useState, useEffect } from "react";
import CRUDTable, {
  Fields,
  Field,
  CreateForm,
  UpdateForm,
} from "react-crud-table";

import {
  addItem as addItemApi,
  getAllSections,
  updateItem as updateItemApi,
} from "../../API";

const CrudSectionItems = ({ selectedSection }) => {
  const [items, setItems] = useState([]);
  function fetchItems() {
    getAllSections().then((response) => {
      setItems(response.data.data);
    });
  }

  function addItem(item) {
    return addItemApi({
      ...item,
      section: selectedSection,
    }).then((response) => {
      fetchItems();
      return response.data;
    });
  }

  function updateItem(item) {
    return updateItemApi({
      ...item,
      section: selectedSection,
    }).then((response) => {
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
        caption="آیتم های صفحه لاگین"
        actionsLabel="عملیات"
        items={items
          .filter((item) => item.section == selectedSection)
          .map((item) => ({
            ...item,
            is_active_status: item.is_active ? "فعال" : "غیرفعال",
            is_pinned_status: item.is_pinned ? "اولویت بالا" : "بدون اولویت",
          }))}
      >
        <Fields>
          <Field name="title" label="عنوان" />
          <Field name="link" label="لینک" />
          <Field
            name="is_pinned"
            tableValueResolver="is_pinned_status"
            label="وضعیت اولویت"
            render={({ field }) => (
              <input type="checkbox" checked={field.value} {...field} />
            )}
          />
          <Field
            name="is_active"
            tableValueResolver="is_active_status"
            label="وضعیت فعال بودن"
            render={({ field }) => (
              <input type="checkbox" checked={field.value} {...field} />
            )}
          />
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

        <UpdateForm
          title="بازیابی از آرشیو"
          trigger="بازیابی "
          onSubmit={(item) => updateItem(item)}
          submitText="بازیابی از آرشیو"
        />
      </CRUDTable>
    </div>
  );
};

export default CrudSectionItems;
