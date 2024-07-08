import React from "react";
import Form from "react-bootstrap/Form";
import EditorForDetails from "./EditorForDetails";
import Link from "next/link";

const AddGlossary = () => {
  return (
    <div className="container">
      <h4 className="text-white fs-2 fw-bold text-center">Add Glossary</h4>

      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="text-white">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            className="costField"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="text-white">Keyword</Form.Label>
          <Form.Control
            type="text"
            placeholder="Keyword"
            className="costField"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="text-white">Description</Form.Label>
          <EditorForDetails className="bg-white" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="text-white">Meta Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            className="costField"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="text-white">Meta Keyword</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            className="costField"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="text-white">Meta Description</Form.Label>
          <EditorForDetails />
        </Form.Group>

        <div className="d-flex justify-content-center my-5">
          <div className="d-grid gap-2 col-md-5">
            <Link
              href="/"
              className="btnStyles fs-6 fw-bold rounded-2 px-5 py-3 border-0 text-center text-white text-decoration-none"
            >
              Add Glossary
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddGlossary;
