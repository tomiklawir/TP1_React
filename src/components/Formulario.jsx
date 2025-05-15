import './Formulario.css'
import { useState } from 'react'

function Formulario({ agregarCita }) {
  const [mascota, setMascota] = useState('')
  const [dueno, setDueno] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [sintomas, setSintomas] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([mascota, dueno, fecha, hora, sintomas].includes('')) {
      alert('Todos los campos son obligatorios')
      return
    }

    const nuevaCita = { mascota, dueno, fecha, hora, sintomas }
    agregarCita(nuevaCita)

    // Limpiar formulario
    setMascota('')
    setDueno('')
    setFecha('')
    setHora('')
    setSintomas('')
  }

  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="dueno"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          value={dueno}
          onChange={(e) => setDueno(e.target.value)}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />

        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
    </div>
  )
}

export default Formulario
