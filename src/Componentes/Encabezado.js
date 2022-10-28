import React,{Component} from "react";

class Encabezado extends Component{
    render(){
        return(
            <div className="bg-dark">
                <img className="mx-auto center d-block" height="200" width="auto" src={process.env.PUBLIC_URL + "./Recursos/trueke.png"} />
            </div>
        );
    }
}

export default Encabezado;