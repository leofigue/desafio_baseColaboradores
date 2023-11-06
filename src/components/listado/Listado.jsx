import { Table } from "react-bootstrap";

export const Listado = ({ colaboradores, setColaboradores, setAlert }) => {

  const eliminarColaborador = (id) => {
    const filtrarSinEliminado = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(filtrarSinEliminado);
    setAlert({
      color: "success",
      mensaje: "Colaborador Eliminado !",
    });
  };
  
  return (
    <>
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td>
                <button className='eliminar' onClick={() => eliminarColaborador(colaborador.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

          
        </tbody>
      </Table>
    </>
  );
};
