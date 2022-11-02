import React,{Component} from "react";
import Datos from './Datos.json';
import Articulo from "./Articulo";
class Cargar extends Component{
    constructor(){
        super();
        this.state={Datos};
        //console.log(this.state);
    }

    render(){
        let mostrar=this.state.Datos.map((dato,i)=>{
            return(
                
                <Articulo titulo={dato.titulo} descripcion={dato.descripcion} numero={dato.numero}  prioridad={dato.Prioridad} responsable={dato.Responsable} imagen={dato.imagen} i={i}/>
                // <div>
                //       
                // </div>
            );
        })
        return(
            <div className="row">
                {mostrar}
            </div>
        );
    }

}

export default Cargar;