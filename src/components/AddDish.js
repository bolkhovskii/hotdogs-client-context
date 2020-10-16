import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export const AddDish = () => {
  const { token } = useContext(AuthContext);
  console.log(token);
  const [form, setForm] = useState({
    pictureName: "",
    dishesName: "",
    price: "",
    description: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const addDishHandler = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/dish", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((e) => console.log({ token }, e));
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add hotdog
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add new hotdog
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Picture name
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Picture name"
                  aria-label="Picturename"
                  name="pictureName"
                  aria-describedby="basic-addon1"
                  onChange={changeHandler}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Dish name
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Dish name"
                  aria-label="Dishname"
                  name="dishesName"
                  aria-describedby="basic-addon1"
                  onChange={changeHandler}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Price
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  aria-label="Price"
                  name="price"
                  aria-describedby="basic-addon1"
                  onChange={changeHandler}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Description
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  aria-label="Description"
                  name="description"
                  aria-describedby="basic-addon1"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={addDishHandler}
                data-dismiss="modal"
              >
                Add dish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
