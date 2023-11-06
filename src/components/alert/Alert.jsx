import { Alert as AlertB } from "react-bootstrap";

export const Alert = ({ mensaje }) => {
  return <AlertB className="alert" variant={mensaje.color}>{mensaje.mensaje}</AlertB>;
};
