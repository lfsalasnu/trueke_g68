import React,{Component} from "react";

class Encabezado extends Component{
    render(){
        return(
            <div className="bg-dark">
                <img className="mx-auto center d-block mt-4 mb-4" height="200" width="auto" src={process.env.PUBLIC_URL + "./Recursos/logo3.png"} />
            </div>
        );
    }
}

export default Encabezado;