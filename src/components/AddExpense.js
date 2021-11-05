import React from "react";

const AddExpense = () => {
  return (
    <form>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="col-sm">
          <label for="cost"> Cost </label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save Expense{" "}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpense;
