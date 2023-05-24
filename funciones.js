           /*var Nombre = document.getElementById('Nombre');
            var Apellido = document.getElementById('Apellido');
            var email = document.getElementById('email');
            var Cantidad = document.getElementById('Cantidad');
            var Categoria = document.getElementById('Categoria');
            var Limpiar = document.getElementById('Limpiar');

            function Limpiar() {
            Nombre.value = '';
            Apellido.value = '';
            email.value = '';
            Cantidad.value = '';
            Categoria.value = '';
            }
            

            Limpiar.addEventListener('click', Limpiar);

            document.getElementById('Limpiar').onclick=Limpiar;*/
            
            console.log ('hola')
    
            function calcular()
            {
            var cantidad=document.getElementById("Cantidad").value;
            
            
            var select=document.getElementById("tipoDescuento");
            var select_activa=select.options[select.selectedIndex].value;
            var precio=200;
            var result=0;
            
            switch(select_activa)
            {
                case 1:
                     result=(precio-(precio*0.8))*cantidad;
                            
                      break;
                case 2:
                    result=(precio-(precio*0.5))*cantidad;
                      break;
                case 3:
                    result=(precio-(precio*0.15))*cantidad;
                    break;
                
            }
            
            
          document.getElementById("result").value= result;
            
            }