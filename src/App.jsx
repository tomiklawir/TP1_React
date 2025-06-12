import './App.css'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import { useState, useEffect } from 'react'

function App() {
  // Inicializar estado desde localStorage o vacío
  const [citas, setCitas] = useState(() => {
    const citasGuardadas = localStorage.getItem('citas')
    return citasGuardadas ? JSON.parse(citasGuardadas) : []
  })

  // Guardar en localStorage cada vez que cambian las citas
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas))
  }, [citas])

  const agregarCita = (cita) => {
    const confirmacion = confirm('¿Estás seguro que querés agregar esta cita?')
    if (!confirmacion) return

    setCitas([...citas, cita])
  }

  const eliminarCita = (index) => {
    const nuevasCitas = [...citas]
    nuevasCitas.splice(index, 1)
    setCitas(nuevasCitas)
  }

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <Formulario agregarCita={agregarCita} />
          <Listado citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
    </>
  )
}

export default App
