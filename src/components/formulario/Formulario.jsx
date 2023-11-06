import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";

export const Formulario = ({ setAlert, setColaboradores, setColaboradoresOriginal, colaboradores }) => {
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  const [formulario, setFormulario] = useState({
    correo: "",
    nombre: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const onchange = (valor) => {
    setFormulario({ ...formulario, [valor.target.name]: valor.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();

    setAlert({
      color: "success",
      mensaje: "Colaborador agregado !",
    });

    if (
      formulario.nombre == "" ||
      formulario.correo == "" ||
      formulario.edad == "" ||
      formulario.cargo == "" ||
      formulario.telefono == ""
    ) {
      setAlert({
        color: "danger",
        mensaje: "Completa todos los campos!",
      });
      return;
    }

    if (!validEmail.test(formulario.correo)) {
      setAlert({ mensaje: "Email incorrecto", color: "danger" });
      return;
    }

    setFormulario({
      correo: "",
      nombre: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
    // Agregar registro
    // id unico / UUID
    var newId = Number(colaboradores[colaboradores.length-1].id) + 1;
    const newColaborador = { ...formulario, id: newId };
    setColaboradores([...colaboradores, newColaborador]);
    setColaboradoresOriginal([...colaboradores, newColaborador])
  };

  return (
    <Form onSubmit={onsubmit}>
      <Form.Group className="mb-3">
        <Form.Control size="sm"
          name="nombre"
          type="text"
          placeholder="Nombre"
          onChange={onchange}
          value={formulario.nombre}
        />
        <Form.Control size="sm"
          name="correo"
          type="email"
          placeholder="correo"
          onChange={onchange}
          value={formulario.correo}
        />
        <Form.Control size="sm"
          name="edad"
          type="number"
          placeholder="Edad"
          onChange={onchange}
          value={formulario.edad}
        />
        
        <Form.Control size="sm"
          name="cargo"
          type="text"
          placeholder="Cargo"
          onChange={onchange}
          value={formulario.cargo}
        />
        
        
          <Form.Control size="sm" placeholder="Teléfono"
            name="telefono"
            type="number"
            onChange={onchange}
            value={formulario.telefono}
          />
        

        <Button variant="primary" type="submit" className="w-100">
          Agregar Colaborador
        </Button>
      </Form.Group>
    </Form>
  );
};
