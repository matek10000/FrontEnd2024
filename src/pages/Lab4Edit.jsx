import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container, Form } from 'react-bootstrap';
import { AppContext } from '../data/AppContext'; // Use named import


const Lab4Edit = ({ person }) => {
  const { dispatch } = useContext(AppContext);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: person // Set default values from the selected person
  });

  const onSubmit = (data) => {
    dispatch({ type: 'edit', payload: data });
    // Optionally redirect or reset the form after submission
  };

  return (
    <Container>
      <h1>Edit Person</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            {...register("name", { required: true })}
            id="name"
            type="text"
            placeholder="Enter name"
          />
          {errors.name && <p className="text-danger">Name is required.</p>}
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label htmlFor="birth">Birth Date</Form.Label>
          <Form.Control
            {...register("birth", { required: true })}
            id="birth"
            type="date"
          />
          {errors.birth && <p className="text-danger">Birth date is required.</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="eyes">Eye Color</Form.Label>
          <Form.Control
            {...register("eyes", { required: true })}
            id="eyes"
            type="text"
            placeholder="Enter eye color"
          />
          {errors.eyes && <p className="text-danger">Eye color is required.</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="rating">Rating (0-10)</Form.Label>
          <Form.Control
            {...register("rating", { required: true, min: 0, max: 10 })}
            id="rating"
            type="number"
          />
          {errors.rating && <p className="text-danger">Rating must be between 0 and 10.</p>}
        </Form.Group>

        <input type="hidden" {...register("id")} />

        <Button type="submit" variant="outline-primary" size="lg">
          Edit Person
        </Button>
      </Form>
    </Container>
  );
};

export default Lab4Edit;
