import Cita from "./Cita"
import './Listado.css'

function Listado({ citas, eliminarCita }) {
  return (
    <div className="one-half column">
      <h2>{citas.length > 0 ? "Administra tus citas" : "No hay citas"}</h2>
      {citas.map((cita, index) => (
        <Cita
          key={index}
          index={index}
          mascota={cita.mascota}
          dueno={cita.dueno}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
          eliminarCita={eliminarCita}
        />
      ))}
    </div>
  )
}

export default Listado
