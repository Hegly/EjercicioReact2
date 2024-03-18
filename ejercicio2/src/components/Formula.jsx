import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Formula = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!a || !b || !c) {
      setError('Por favor, complete todos los campos.');
      return;
    }
   
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);
    
    if (numA === 0) {
      setError('El coeficiente a debe ser diferente de 0.');
      return;
    }
    
    const discriminant = numB * numB - 4 * numA * numC;
    if (discriminant < 0) {
      setError('La ecuación no tiene soluciones reales.');
      setResult('');
    } else {
      const x1 = (-numB + Math.sqrt(discriminant)) / (2 * numA);
      const x2 = (-numB - Math.sqrt(discriminant)) / (2 * numA);
      setResult(`x1 = ${x1}, x2 = ${x2}`);
      setError('');
    }
  };

  const handleReset = () => {
    setA('');
    setB('');
    setC('');
    setResult('');
    setError('');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Calculadora de Fórmula Cuadrática</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formA">
          <Form.Label className="fw-bold">Coeficiente a:</Form.Label>
          <Form.Control type="number" className="shadow p-3" placeholder="Ingrese el valor numérico del coeficiente que representa a 'a'" value={a} onChange={(e) => setA(e.target.value)} />
        </Form.Group>
        <Form.Group className="mt-3" controlId="formB">
          <Form.Label className="fw-bold">Coeficiente b:</Form.Label>
          <Form.Control type="number" className="shadow p-3" placeholder="Ingrese el valor numérico del coeficiente que representa a 'b'" value={b} onChange={(e) => setB(e.target.value)} />
        </Form.Group>
        <Form.Group className="mt-3" controlId="formC">
          <Form.Label className="fw-bold">Coeficiente c:</Form.Label>
          <Form.Control type="number" className="shadow p-3" placeholder="Ingrese el valor numérico del coeficiente que representa a 'c'" value={c} onChange={(e) => setC(e.target.value)} />
        </Form.Group>
        <Button className="mt-4 fw-bold" variant="outline-info border-3 shadow-sm" type="submit">
          Calcular valores de x
        </Button>
        <Button className="mt-4 fw-bold" variant="outline-warning border-3 shadow-sm" onClick={handleReset} style={{ marginLeft: '10px' }}>
          Limpiar Formulario
        </Button>
      </Form>
      {result && <Alert className="mt-4" variant="success">{result}</Alert>}
    </div>
  );
};

export default Formula;