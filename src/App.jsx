import './App.css'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import { useState, useEffect } from 'react'

function App() {
  const [citas, setCitas] = useState([])

  useEffect(() => {
    const citasLocalStorage = localStorage.getItem('citas')
    let parsedCitas = []
    if (citasLocalStorage) {
      try {
        const parsedResult = JSON.parse(citasLocalStorage)
        if (Array.isArray(parsedResult)) {
          parsedCitas = parsedResult
        }
      } catch (error) {
        // Malformed JSON, parsedCitas remains []
        console.error("Error parsing citas from localStorage:", error)
      }
    }
    setCitas(parsedCitas)
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
