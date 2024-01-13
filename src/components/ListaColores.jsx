import { ListGroup } from "react-bootstrap";
import ItemColor from "./ItemColor";

const ListaColores = ({ colores, eliminarColor }) => {
  return (
    <ListGroup>
      {colores.map((color, posicionColor) => (
        <ItemColor
          key={posicionColor}
          color={color}
          eliminarColor={eliminarColor}
        />
      ))}
    </ListGroup>
  );
};

export default ListaColores;
