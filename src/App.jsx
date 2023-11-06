import { Row, Col } from "react-bootstrap";
import { Listado } from "./components/listado/Listado";
// obtener data de archivo baseColaboradores
import { baseColaboradores } from "./db/BaseColaboradores";
import { useState } from "react";
import { Formulario } from "./components/formulario/Formulario";
import { Alert } from "./components/alert/Alert";
import Buscador from "./components/buscador/Buscador";

const App = () => {
  // almacenar data en un hook
  const [colaboradores, setColaboradores] = useState(baseColaboradores); // []
  const [colaboradoresOriginal, setColaboradoresOriginal] = useState(baseColaboradores)

  const [alert, setAlert] = useState({
    color: "",
    mensaje: "",
  });

  return (
    <>
      <div className="mx-4">
        <h1 className="text-start">Lista de colaboradores</h1>
        <Row>
          <Col sm={4}>
            <Buscador setColaboradores={setColaboradores} colaboradores={colaboradores} colaboradoresOriginal={colaboradoresOriginal}></Buscador>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={9}>
            {/* Crear componente Listado */}
            <Listado colaboradores={colaboradores} setColaboradores={setColaboradores} setAlert={setAlert} />
          </Col>
          <Col md={3} className="">
            <h2>Agregar colaborador</h2>
            {/* Crear componente Formulario */}
            <Formulario
              setAlert={setAlert}
              setColaboradores={setColaboradores}
              setColaboradoresOriginal={setColaboradoresOriginal}
              colaboradores={colaboradores}
            />
            {alert.mensaje !== "" && <Alert mensaje={alert}></Alert>}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default App;
