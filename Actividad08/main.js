//Zona de variables 
palo = Array("&#9829","&#9830","&#9827",'&#9824') //♥ ♦ ♣ ♠
paloColor = Array("rojo", "negro");
cartasrepartidas = Array();
coloresRepartidos = Array();
var x = 0;

//Zona de generacion de cartas
   for (let i = 0; i < 5; i++) {

    paloRandom=Math.floor(Math.random(0)*(4));
    colorRandom=Math.floor(Math.random(0)*(2));

    if (paloColor[colorRandom] == "rojo") {
        cartablanca =Math.floor(Math.random() * 12) + 1; 
        console.log(cartablanca);
        
        cartajugador = Math.floor(Math.random() * 12) + 1; 
        cartasrepartidas.push(cartajugador)
        coloresRepartidos.push(paloColor[colorRandom])

     

   
        document.write(`<div id =cartajugador${[i]}>`)
   
        document.write(`<p class = palodecartaupr>${cartajugador} ${palo[paloRandom]}</p>`);
        document.write(`<br>`)
        document.write(`<br>`)
        document.write(`<br>`)
        document.write(`<p align ="center" class =cartasenelmedior>`)
        for (let i = 0; i < cartajugador; i++) {
  
            document.write(`${palo[paloRandom]} `)
            
        }
        document.write(`</p>`)
      
       
        document.write(`<br>`)
        document.write(`<br>`)
        document.write(`<br>`)
        document.write(`<br>`)
        document.write(`<p class = palodecartadownr>${cartajugador} ${palo[paloRandom]}</p>`)
        document.write(`</div>`);
        
    }else if(paloColor[colorRandom] == "negro"){

        cartablanca =Math.floor(Math.random() * 12) + 1; 
        console.log(cartablanca);
        cartajugador = Math.floor(Math.random() * 12) + 1; 
        cartasrepartidas.push(cartajugador)
        coloresRepartidos.push(paloColor[colorRandom])

        
        document.write(`<div id =cartajugador${[i]}>`);
        
     
        document.write(`<p class = palodecartaup>${cartajugador} ${palo[paloRandom]}</p>`);
        document.write(`<br>`)
        document.write(`<br>`)
        document.write(`<br>`)
        document.write(`<p align ="center" class =cartasenelmedio>`)
        for (let i = 0; i < cartajugador; i++) {
  
            document.write(`${palo[paloRandom]} `)
            
        }
        document.write(`</p>`)
        
        document.write(`<br>`)
        document.write(`<br>`)
        document.write(`<br>`)
        document.write(`<br>`)
        document.write(`<p class = palodecartadown>${cartajugador} ${palo[paloRandom]}</p>`)
        document.write(`</div>`);

    }


       
   }
   console.log(cartasrepartidas)

//Zona de comprobación
   

   if ((cartasrepartidas[0] === cartasrepartidas[1])||(cartasrepartidas[0] === cartasrepartidas[2]) ||(cartasrepartidas[0] === cartasrepartidas[3])||(cartasrepartidas[0] === cartasrepartidas[4]||(cartasrepartidas[1] === cartasrepartidas[0])||(cartasrepartidas[1] === cartasrepartidas[2])||(cartasrepartidas[1] === cartasrepartidas[3])||(cartasrepartidas[1] === cartasrepartidas[4])||(cartasrepartidas[2] === cartasrepartidas[0])||(cartasrepartidas[2] === cartasrepartidas[1])||(cartasrepartidas[2] === cartasrepartidas[3]||(cartasrepartidas[2] === cartasrepartidas[4])||(cartasrepartidas[3] === cartasrepartidas[0])||(cartasrepartidas[3] === cartasrepartidas[1])||(cartasrepartidas[3] === cartasrepartidas[2])||(cartasrepartidas[3] === cartasrepartidas[4])))) {
       console.log("Tienes pareja.")
       
   }


    if ((cartasrepartidas[0] === cartasrepartidas[1])||(cartasrepartidas[0] === cartasrepartidas[2]) ||(cartasrepartidas[0] === cartasrepartidas[3])||(cartasrepartidas[0] === cartasrepartidas[4]||(cartasrepartidas[1] === cartasrepartidas[0])||(cartasrepartidas[1] === cartasrepartidas[2])||(cartasrepartidas[1] === cartasrepartidas[3])||(cartasrepartidas[1] === cartasrepartidas[4])||(cartasrepartidas[2] === cartasrepartidas[0])||(cartasrepartidas[2] === cartasrepartidas[1])||(cartasrepartidas[2] === cartasrepartidas[3]||(cartasrepartidas[2] === cartasrepartidas[4])||(cartasrepartidas[3] === cartasrepartidas[0])||(cartasrepartidas[3] === cartasrepartidas[1])||(cartasrepartidas[3] === cartasrepartidas[2])||(cartasrepartidas[3] === cartasrepartidas[4])))) {
        console.log("Tienes Doble pareja.")
    }      


    if ((coloresRepartidos[0] ===coloresRepartidos[1])&&(coloresRepartidos[0] === coloresRepartidos[1])&&(coloresRepartidos[0] === coloresRepartidos[2])&&(coloresRepartidos[0] === coloresRepartidos[3])&&(coloresRepartidos[0] === coloresRepartidos[4])){
            console.log("Tienes color.")
    }
        
    
    
