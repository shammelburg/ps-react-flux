import React from "react";

import TextInput from "./common/TextInput";

function CourseForm({ course, onInputChange, onSubmit, errors }) {
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        id="title"
        label="Title"
        name="title"
        value={course.title}
        onChange={onInputChange}
        error={errors.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={course.authorId || ""}
            className="form-control"
            onChange={onInputChange}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>
      {
        errors.authorId && <div className="alert alert-danger">{errors.authorId}</div>
      }

      <TextInput
        id="category"
        label="Category"
        name="category"
        value={course.category}
        onChange={onInputChange}
        error={errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
