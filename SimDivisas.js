

const compra=0





while(true){
 let seleccion =parseInt(prompt("seleccion:\n1.Agregar Usuario.\n2.Simular Compra.\n3.Compra por Usuario "))//ojo con el parseo a numero 
 //ahora esta como string pero despues proobar pasaarlo a numero en caso de usar el nan como en el anterior codigo
  
 switch(seleccion){
        case 1: 
             AgregarUsuario()
        break
    
        case 2 :
            simularcompra()
            
            break
            

        case 3 :
            compraXusuario()
            
            break
            default:
            alert("Ingrese opcion valida")
            break



   




}
















































function simularcompra(){
    const dolar = 738
    const euro = 678 
    const real = 137
    const uru = 16
   
    let opcion=parseInt(prompt("eliga la moneda a comprar\n1.Dolar \n2.Euro \n3.Real \n4.Uru"))

    while(isNaN(opcion) ||opcion < 1 || opcion > 4 ){
        opcion=parseInt(prompt("eliga la moneda a comprar\n1.Dolar \n2.Euro \n3.Real \n4.Uru"))
        
     
        }
        let montoIngresado = parseInt(prompt("Ingresa Monto a Comprar en AR$"))
   
        switch(opcion){
   
          case 1:
           alert("Elegiste Dolar")
           montoIngresado     
           cotizar()
           
           break
           
   
        case 2:
           alert("Elegiste Euro")
           montoIngresado
           cotizar()
           break
   
        case 3:
           alert("Elegiste Real")
           montoIngresado
           cotizar()
           break
       
        case 4:
           alert("Elegiste Uru")
           montoIngresado
           cotizar()
           break    
        default:
           
           alert("Ingrese una opcion valida")
                   
           break
           
           
        }
                    

        function cotizar (){
            if(opcion==1){
                let compra= montoIngresado / dolar
                parseFloat(alert("compraste Dolar" + " " +compra.toFixed(2)))
                alert("Gracias por su compra")
        
            }else if (opcion==2){
                let compra= montoIngresado / euro
                parseFloat(alert("compraste Euro" + " " + compra.toFixed(2)))
                alert("Gracias por su compra")
            }else if(opcion==3){
                let compra= montoIngresado / real
                parseFloat(alert("compraste Real" + " " + compra.toFixed(2)))
                alert("Gracias por su compra")
            }else if(opcion==4){
                let compra= montoIngresado / uru
                parseFloat(alert("compraste Uru" + " " + compra.toFixed(2)))
                alert("Gracias por su compra")
        
            }
        }
        



}
    

function AgregarUsuario(){
    
    let nombre=prompt("nombre")
    let dni=parseInt(prompt("dni"))
    let contraseña=parseInt(prompt("contraseña"))
    Usuarios=[nombre,dni,contraseña]
    if(nombre ==="1" || isNaN(dni) || contraseña === 1){
        alert("Ingresa datos validos ")
    }else if(seleccion===1){

    
   
    
         Usuarios.forEach((Usuarios)=>{
         const nuevoUsuario =[]
         nuevoUsuario.forEach((nuevoUsuario)=>{
            switch(nuevoUsuario){
                case 1:
                    nuevoUsuario.push(Usuarios)
                    break
            }
         }) 
         })
        console.log(Usuarios)
  }else{alert("usuario cargado")}
  

    }
   
    
   



    }


   
    

    
    
   
    
    



   
    
   
    
    














    








