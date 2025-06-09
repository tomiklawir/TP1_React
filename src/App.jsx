import './App.css'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import { useState, useEffect } from 'react'

function App() {
  const [citas, setCitas] = useState([])

  useEffect(() => {
    const citasLocalStorage = localStorage.getItem('citas')
    if (citasLocalStorage) {
      setCitas(JSON.parse(citasLocalStorage))
    }
  }, [])

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
