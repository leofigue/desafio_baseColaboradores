import React, { useState } from 'react'

const Buscador = ({setColaboradores, colaboradores, colaboradoresOriginal}) => {
    
    const onchange = (valor)=>{
        
        if(valor.target.value!=''){
            const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
                if(colaborador.nombre.toLowerCase().includes(valor.target.value.toLowerCase()) ||
                   colaborador.correo.toLowerCase().includes(valor.target.value.toLowerCase()) ||
                   colaborador.edad.includes(valor.target.value) ||
                   colaborador.telefono.includes(valor.target.value) ||
                   colaborador.cargo.toLowerCase().includes(valor.target.value.toLowerCase())){
                    return true;
                }
                return false;
            });
            setColaboradores(colaboradoresFiltrados)
        }
        else{
            setColaboradores(colaboradoresOriginal)
        }
        
    }   

  return (
    <>
      <input type="text" placeholder='Buscar colaborador' onChange={onchange}  />
    </>
  )
}

export default Buscador
