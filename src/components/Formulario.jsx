import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";
import Error from "./Error";

const Formulario = () => {
const colorLS = JSON.parse(localStorage.getItem('colorTarea')) || [];
  const [colores, setColores] = useState(colorLS);
  const [nombreColor, setNombreColor] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem('colorTarea', JSON.stringify(colores))
  }, [colores])

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombreColor, color].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    setColores([...colores, color]);

    setNombreColor("")
    setColor("");
  };

  const eliminarColor = (nombreColor) => {
    const colorActualizado = colores.filter((color) => color !== nombreColor);
    setColores(colorActualizado);
  };

  return (
    <>
      <section className="container">
        <div className="py-3">
          <h2 className="text-center fw-bold">Administrar Colores</h2>
        </div>

        {error && <Error>¡Introduce el nombre del color, por favor!</Error>}

        <Form onSubmit={handleSubmit}>
          <div className="form-control d-flex align-items-center gap-2">
            <input
              type="color"
              name="color"
              id="color"
              className="border-0"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />

            <input
              type="text"
              className="w-100 form-control"
              value={nombreColor}
              placeholder="Introduzca el nombre del color"
              onChange={(e) => setNombreColor(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-center">
            <Button type="submit" className="my-2 w-50">
              Guardar Color
            </Button>
          </div>
        </Form>

        <ListaColores 
            colores={colores} 
            eliminarColor={eliminarColor} 
        />
      </section>
    </>
  );
};

export default Formulario;
