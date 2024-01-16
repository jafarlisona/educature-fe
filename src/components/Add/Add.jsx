import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
function Add() {
  const [features, setFeatures] = useState([]);
  const [search, setSearch] = useState("");
  function getAll() {
    fetch("http://localhost:3000/features")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }
  useEffect(() => {
    getAll();
  }, []);

  async function deleteItem(id) {
    await fetch("http://localhost:3000/features/" + id, {
      method: "DELETE",
    });
    getAll();
  }
  async function handleSubmit(values) {
    await fetch("http://localhost:3000/features", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    getAll();
  }
  return (
    <section id="add">
      <div className="container">
        <Formik
          initialValues={{ icon: "", title: "", text: "" }}
          validationSchema={Yup.object({
            icon: Yup.string()
              .min(5, "Must be 5 characters at least")
              .required("Required"),
            title: Yup.string()
              .min(5, "Must be 5 characters at least")
              .required("Required"),
            text: Yup.string()
              .min(5, "Must be 5 characters at least")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <div className="form">
              <label htmlFor="icon">Icon :</label>
              <Field name="icon" type="text" id="icon" />
              <ErrorMessage name="icon" component="span" />
            </div>
            <div className="form">
              <label htmlFor="title">Title :</label>
              <Field name="title" type="text" id="title" />
              <ErrorMessage name="title" component="span" />
            </div>
            <div className="form">
              <label htmlFor="text">Text :</label>
              <Field name="text" type="text" id="text" />
              <ErrorMessage name="text" component="span" />
            </div>
            <button type="submit">Add</button>
          </Form>
        </Formik>
        <div className="table">
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          <table>
            <thead>
              <tr>
                <th>Icon</th>
                <th>Title</th>
                <th>Text</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {features
                .filter((x) =>
                  x.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((x) => (
                  <tr>
                    <td>
                      <i className={x.icon}></i>
                    </td>
                    <td>{x.title}</td>
                    <td>{x.text}</td>
                    <td>
                      <i
                        className="fa-solid fa-trash-can"
                        onClick={() => deleteItem(x._id)}
                      ></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Add;
