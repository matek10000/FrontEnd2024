import React, { useState, useContext } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import { AppContext } from "../data/AppContext"; // Importuj kontekst

const Lab4Add = () => {
  const { dispatch } = useContext(AppContext); // Uzyskaj dispatch z kontekstu
  const [errors, setErrors] = useState([]); // Stan błędów
  const [isSending, setSending] = useState(false); // Stan wysłania
  const [formData, setFormData] = useState({
    name: "",
    birth: "",
    eyes: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitFunction = async (e) => {
    e.preventDefault(); // Blokada wysyłania żądania
    setErrors([]); // Reset komunikatów błędów

    // Walidacja
    const newErrors = [];
    if (!formData.name) newErrors.push("Nazwa jest wymagana.");
    if (!formData.birth) newErrors.push("Data urodzenia jest wymagana.");
    if (!formData.eyes) newErrors.push("Kolor oczu jest wymagany.");
    if (formData.rating < 0 || formData.rating > 10) newErrors.push("Ocena musi być w przedziale 0-10.");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    // Stan blokujący przycisk submit na czas wysyłania danych
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Symulacja wysyłania
    setSending(false); // Odblokowanie przycisku submit

    // Wyślij akcję do funkcji redukującej
    dispatch({ type: "ADD", payload: { ...formData, id: Date.now() } }); // Generuj ID na podstawie czasu

    // Reset formularza
    setFormData({
      name: "",
      birth: "",
      eyes: "",
      rating: 0,
    });
  };

  return (
    <Container>
      <h1>Dodawanie osoby</h1>
      <div className="text-danger">{errors.map((e, i) => <p key={i}>{e}</p>)}</div>
      <Form className="text-primary" onSubmit={onSubmitFunction}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Nazwa</Form.Label>
          <FormControl
            required
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="birth">Data urodzenia</Form.Label>
          <FormControl
            required
            id="birth"
            type="date"
            name="birth"
            value={formData.birth}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="eyes">Kolor oczu</Form.Label>
          <FormControl
            required
            id="eyes"
            type="text"
            name="eyes"
            value={formData.eyes}
            onChange={handleChange}
            placeholder="Enter eye color"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="rating">Ocena (0-10)</Form.Label>
          <FormControl
            required
            id="rating"
            type="number"
            name="rating"
            min="0"
            max="10"
            value={formData.rating}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-grid">
          <Button disabled={isSending} type="submit" variant="outline-primary" size="lg">
            Dodaj osobę
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Lab4Add;
