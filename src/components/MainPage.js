import React, { useEffect } from "react";
import CRUDTable, {
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm
} from "react-crud-table";
import axios from "axios";

let tasks = [
  {
    id: 1,
    title: "Create an example",
    description: "Create an example of how to use the component"
  },
  {
    id: 2,
    title: "Improve",
    description: "Improve the component!"
  }
];

const SORTERS = {
  NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a))
};

const getSorter = data => {
  const mapper = x => x[data.field];
  let sorter = SORTERS.STRING_ASCENDING(mapper);

  if (data.field === "id") {
    sorter =
      data.direction === "ascending"
        ? SORTERS.NUMBER_ASCENDING(mapper)
        : SORTERS.NUMBER_DESCENDING(mapper);
  } else {
    sorter =
      data.direction === "ascending"
        ? SORTERS.STRING_ASCENDING(mapper)
        : SORTERS.STRING_DESCENDING(mapper);
  }

  return sorter;
};

let count = tasks.length;
const service = {
  fetchItems: payload => {
    let result = Array.from(tasks);
    result = result.sort(getSorter(payload.sort));
    return Promise.resolve(result);
  },
  create: task => {
    count += 1;
    tasks.push({
      ...task,
      id: count
    });
    return Promise.resolve(task);
  },
  update: data => {
    const task = tasks.find(t => t.id === data.id);
    task.title = data.title;
    task.description = data.description;
    return Promise.resolve(task);
  },
  delete: data => {
    const task = tasks.find(t => t.id === data.id);
    tasks = tasks.filter(t => t.id !== task.id);
    return Promise.resolve(task);
  }
};

const styles = {
  container: { margin: "auto", width: "fit-content" }
};

const MainPage = () => {
  useEffect(() => {
    axios
      .post("http://localhost:3000/api/v1/sections/add-section", {
      })
      .then(response => {
        
      })
      .catch(error => {
        alert("رمز عبور یا نام کاربری شما اشتباه است");
      });
  }, []);
  return (
    <div style={styles.container}>
      <CRUDTable
        caption="آیتم های صفحه لاگین"
        actionsLabel="عملیات"
        fetchItems={payload => service.fetchItems(payload)}
      >
        <Fields>
          <Field name="title" label="عنوان" />
          <Field name="link" label="لینک" />
          <Field
            name="is_pinned"
            label="اولویت بالا"
            render={({ field }) => <input type="checkbox" {...field} />}
          />
        </Fields>
        <CreateForm
          title="ایجاد آیتم"
          trigger="ایجاد"
          onSubmit={task => service.create(task)}
          submitText="ایجاد آیتم"
        />

        <UpdateForm
          title="ویرایش آیتم"
          trigger="ویرایش"
          onSubmit={task => service.update(task)}
          submitText="ویرایش"
        />

        <DeleteForm
          title="حذف آیتم از لیست"
          message="آیا از حذف آیتم از لیست اطمینان دارید؟"
          trigger="حذف"
          onSubmit={task => service.delete(task)}
          submitText="حذف"
        />
      </CRUDTable>
    </div>
  );
};

export default MainPage;
