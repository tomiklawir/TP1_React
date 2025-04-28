import Cita from "./Cita";
import './Listado.css'
function Listado(){
    return(
        <div className="one-half column">
            <h2>Administra tus citas</h2>
            <Cita mascota="doggo" dueno="luco" fecha="2023-07-02" hora="18:25" sintomas="mocos"/>
            <Cita mascota="miau" dueno="matute" fecha="2023-08-01" hora="16:55" sintomas ="diarrea"/>
            <Cita mascota="tiger" dueno="norberto" fecha="2024-09-09" hora="12:15" sintomas="tos"/>
        </div>
    )
}
export default Listado;