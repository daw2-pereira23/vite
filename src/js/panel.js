/*
import { ModeloPieza } from "./modeloPieza"

//Panel Js
export 
const panel = {
    matriz:
    [
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,4,4,4,0,0,0,0,1],
         [1,0,0,0,0,4,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,3,3,0,0,0,0,0,0,1],
         [1,0,0,3,3,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,2,2,2,2,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,1,1,1,1,1,1,1,1,1,1,0],
    ],
    metodos: ()=>{
        var tabla = ``
        
        for(let index=1;index<panel.propiedades.length-1;index++){
            tabla += `
            <div class="piezaFila"> 
            `
            for(let index1=2;index1<panel.propiedades[index].length;index1++){
                if(panel.propiedades[index][index1-1]==2){
                  var color = 'primary'
                }
                else{
                    color = ' '
                    if(panel.propiedades[index][index1-1]==3){
                        var color = 'success'
                    }
                    if(panel.propiedades[index][index1-1]==4){
                        var color = 'warning'
                    }
                }
                tabla +=`
                
                <div class="celda bg-${color}">${panel.propiedades[index][index1-1]}</div>
                `
            }
            tabla +=`
                </div>
            `
            
        }

       
        
        document.querySelector("#panel").innerHTML = tabla

        crearNuevaPieza = ()=>{
            modelo = Math.floor(Math.random() * 3);


            nuevaPieza = new ModeloPieza(nuevaPieza)
            xPieza = Math.floor(Math.random() * 3)

                //Creamos una nueva instancia
                modeloPieza.modelo = modelo
                modeloPieza.angulo = anguloPieza
                modeloPieza.y = 1
                modeloPieza.x = xPieza
                
            
        }

    }

   
}

*/