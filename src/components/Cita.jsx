import './Cita.css'
function Cita({mascota, dueno, fecha, hora, sintomas }) {
    return(
        <div className="cita">
              <p>Mascota: <span>{mascota}</span></p>
              <p>Dueño: <span>{dueno}</span></p>
              <p>Fecha: <span>{fecha}</span></p>
              <p>Hora: <span>{hora}</span></p>
              <p>Sintomas: <span>{sintomas}</span></p><button className="button elimnar u-full-width">Eliminar ×</button>
            </div>
    )
}
export default Cita;