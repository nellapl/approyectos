// PROGRAMA PARA TROQUELADO DE BANDEJAS TABLERO BETA

class TableroBeta{
	constructor(ppal, montaje, cantCircuitos){
		this.ppal = ppal;
		this.montaje = montaje;
		this.cantCircuitos = cantCircuitos;
		this.nroCtos = parseInt(this.cantCircuitos / 2);
	}

	bandejaCNC(){
		
		let altoBandeja = (this.nroCtos * 25) + 260;
		let bisagras = 2;
		let contador = 1;
		let corteBisagra = '';
		let arranque = 69;

		if (altoBandeja >= 460 && altoBandeja < 710){

			bisagras = 3;			

		}else if (altoBandeja >= 710 && altoBandeja < 800){
			
			bisagras = 4;

		}else if (altoBandeja >= 800){

			bisagras = 5;
		}

		let ejeBisagra = (altoBandeja - 161) / (bisagras - 1);		

		if (this.ppal == "TIPO L")
		{
			while (contador < bisagras) {
			  //text += "el arranque es " + contador + "<br>";
			  corteBisagra += 	`G72 X${(arranque + ejeBisagra).toFixed(2)} Y353.00<br> 
			  			B3<br>`;
			  contador++;
			  arranque += ejeBisagra;
			}

			if (this.montaje == "embutido")
			{

				document.querySelector(".troquelado").innerHTML = 
				`<img class="img-thumbnail mb-3" src="img/bandeja.png" alt="bandeja"><br>
				<span>CANTIDAD DE BISAGRAS: ${bisagras}</span><br>
				<span>DISTANCIA ENTRE BISAGRAS: ${ejeBisagra.toFixed(2)}</span><br>
				G92 X1000. Y1000. <br>
				(LAMINA ${altoBandeja} X 374 MM)<br>
				(T304 SQ 6.00 MM)<br>
				(T315 SQ 16.00 MM)<br>
				(T342 RC 20 X 4 MM A 90.0)<br>
				(T351 RC 20 X 2 MM A 0.0)<br>
				<span>SECCION CORTE SECUNDARIOS</span><br>
				X130.00 Y70.00 T342<br>
				A1 G37 I25.00 P${this.nroCtos} J15.33 K3<br>
				X130.00  Y258.00<br>
				B1<br>
				X142.50 Y61.00 T351<br>
				A2 G36 I25. P${this.nroCtos - 1} J64.00 K1<br>
				X142.50 Y249.00<br>
				B2<br>
				<span>SECCION CERRADURA Y BISAGRAS</span><br>
				G72 X${(altoBandeja / 2 - 15).toFixed(2)} Y36.00<br>
				G66 I30.00 J0.00 P6.00 T304<br>
				G72 X69.00 Y353.00<br>
				A3 G66 I23.00 J0.00 P6.00 T304<br>
				${corteBisagra}
				<span>SECCION CORTE EXTERNO</span><br>
				X3.00 Y3.00 T315<br>
				A4 G36 I13.00 P3 J6.00 K1<br>
				X3.00 Y365.00<br>
				B4<br>
				X${(altoBandeja - 42).toFixed(2)} Y365.00<br>
				B4<br>
				X${(altoBandeja - 42).toFixed(2)} Y3.00<br>
				B4<br>
				X40.00 Y19.00<br>
				A5 G37 I2.00 P1 J11.00 K2<br>
				X40.00 Y333.00<br>
				B5<br>
				X${(altoBandeja - 42).toFixed(2)} Y333.00<br>
				B5<br>
				X${(altoBandeja - 42).toFixed(2)} Y19.00<br>
				B5<br>
				G50`

			}else{

				altoBandeja = (this.nroCtos * 25) + 223;

				document.querySelector(".troquelado").innerHTML = 
				`<img class="img-thumbnail mb-3" src="img/bandeja2.png" alt="bandeja"><br>
				G92 X1000. Y1000. <br>
				(LAMINA ${altoBandeja} X 373 MM)<br>
				(T315 SQ 16.00 MM)<br>
				(T331 RD 8.00 MM)<br>
				(T342 RC 20 X 4 MM A 90.0)<br>
				(T351 RC 20 X 2 MM A 0.0)<br>
				<span>SECCION CORTE SECUNDARIOS</span><br>
				X96.50 Y81.50 T331<br>
				G36 I${(altoBandeja - 193).toFixed(2)} P1 J210.00 K1<br>
				X111.50 Y69.50 T342<br>
				A1 G37 I25.00 P${this.nroCtos} J15.33 K3<br>
				X111.50 Y257.50<br>
				B1<br>
				X124.00 Y60.50 T351<br>
				A2 G36 I25. P${this.nroCtos - 1} J64.00 K1<br>
				X124.00 Y248.50<br>
				B2<br>
				<span>SECCION CORTE EXTERNO</span><br>
				X5.00 Y5.00 T315<br>
				G37 I${(altoBandeja - 10).toFixed(2)} P1 J363.00 K1<br>
				G50`
			}

		}else if (this.ppal == "TQD"){

			if (this.montaje == "embutido")
			{
				altoBandeja = (this.nroCtos * 25) + 470;
				arranque = 74;

				if (altoBandeja >= 460 && altoBandeja < 710){

					bisagras = 3;			

				}else if (altoBandeja >= 710 && altoBandeja < 800){
					bisagras = 4;

				}else if (altoBandeja >= 800){

					bisagras = 5;
				}

				ejeBisagra = (altoBandeja - 171) / (bisagras - 1);

				while (contador < bisagras) {
				  //text += "el arranque es " + contador + "<br>";
				  corteBisagra += 	`G72 X${(arranque + ejeBisagra).toFixed(2)} Y363.00<br> 
				  			B3<br>`;
				  contador++;
				  arranque+= ejeBisagra;
				}

				document.querySelector(".troquelado").innerHTML = 
				`<img class="img-thumbnail mb-3" src="img/bandeja3.png" alt="bandeja"><br>
				<span>CANTIDAD DE BISAGRAS: ${bisagras}</span><br>
				<span>DISTANCIA ENTRE BISAGRAS: ${ejeBisagra.toFixed(2)}</span><br>
				G92 X1000. Y1000. <br>
				(LAMINA ${altoBandeja} X 384 MM)<br>
				(T255 RC 55 X 50 MM)<br>
				(T304 SQ 6.00 MM)<br>
				(T315 SQ 16.00 MM)<br>
				(T342 RC 20 X 4 MM A 90.0)<br>
				(T351 RC 20 X 2 MM A 0.0)<br>
				<span>SECCION PPAL Y SECUNDARIOS</span><br>
				X172.50 Y163.50 T255<br>
				G36 I45.00 P1 J28.50 K2<br>
				X335.00 Y75.00 T342<br>
				A1 G37 I25.00 P${this.nroCtos} J15.33 K3<br>
				X335.00  Y263.00<br>
				B1<br>
				X347.50 Y66.00 T351<br>
				A2 G36 I25. P${this.nroCtos - 1} J64.00 K1<br>
				X347.50 Y254.00<br>
				B2<br>
				<span>SECCION CERRADURA Y BISAGRAS</span><br>
				G72 X${(altoBandeja / 2 - 55).toFixed(2)} Y40.00<br>
				G66 I110.00 J0.00 P6.00 T304<br>
				G72 X74.00 Y363.00<br>
				A3 G66 I23.00 J0.00 P6.00 T304<br>
				${corteBisagra}
				<span>SECCION CORTE EXTERNO</span><br>
				X3.00 Y3.00 T315<br>
				A4 G36 I14.67 P3 J11.00 K1<br>
				X40.00 Y24.00<br>
				A5 G37 I7.00 P1 J11.00 K2<br>
				X3.00 Y370.00<br>
				B4<br>
				X40.00 Y338.00<br>
				B5<br>
				X${(altoBandeja - 47).toFixed(2)} Y370.00<br>
				B4<br>
				X${(altoBandeja - 47).toFixed(2)} Y338.00<br>
				B5<br>
				X${(altoBandeja - 47).toFixed(2)} Y3.00<br>
				B4<br>
				X${(altoBandeja - 47).toFixed(2)} Y24.00<br>
				B5<br>
				G50`

			}else{

				altoBandeja = (this.nroCtos * 25) + 423;

				document.querySelector(".troquelado").innerHTML = 
				`<img class="img-thumbnail mb-3" src="img/bandeja4.png" alt="bandeja"><br>
				G92 X1000. Y1000.<br>
				(LAMINA ${altoBandeja} X 373 MM)<br>
				(T255 RC 55 X 50 MM)<br>
				(T315 SQ 16.00 MM)<br>
				(T331 RD 8.00 MM)<br>
				(T342 RC 20 X 4 MM A 90.0)<br>
				(T351 RC 20 X 2 MM A 0.0)<br>
				<span>SECCION CORTE SECUNDARIOS</span><br>
				X296.50 Y81.50 T331<br>
				G36 I${(altoBandeja - 393).toFixed(2)} P1 J210.00 K1<br>
				X149.00 Y158.00 T255<br>
				G36 I45.00 P1 J28.50 K2<br>
				X311.50 Y69.50 T342<br>
				A1 G37 I25.00 P${this.nroCtos} J15.33 K3<br>
				X311.50 Y257.50<br>
				B1<br>
				X324.00 Y60.50 T351<br>
				A2 G36 I25. P${this.nroCtos - 1} J64.00 K1<br>
				X324.00 Y248.50<br>
				B2<br>
				<span>SECCION CORTE EXTERNO</span><br>
				X5.00 Y5.00 T315<br>
				G37 I${(altoBandeja - 10).toFixed(2)} P1 J363.00 K1<br>
				G50`

			}
		}else if (this.ppal == "THQC"){
			// BANDEJA TIPO THQC...
			if (this.montaje == "embutido")
			{
				//nroCtos = parseInt(this.cantCircuitos / 2);
				altoBandeja = (this.nroCtos * 25) + 335;

				if (altoBandeja >= 460 && altoBandeja < 710){

				bisagras = 3;			

				}else if (altoBandeja >= 710 && altoBandeja < 800){
					
					bisagras = 4;

				}else if (altoBandeja >= 800){

					bisagras = 5;
				}

				ejeBisagra = (altoBandeja - 161) / (bisagras - 1);

				while (contador < bisagras) {
				  //text += "el arranque es " + contador + "<br>";
				  corteBisagra += 	`G72 X${(arranque + ejeBisagra).toFixed(2)} Y353.00<br> 
				  			B1<br>`;
				  contador++;
				  arranque += ejeBisagra;
				}

				document.querySelector(".troquelado").innerHTML = 
				`<img class="img-thumbnail mb-3" src="img/bandeja5.png" alt="bandeja"><br>
				<span>CANTIDAD DE BISAGRAS: ${bisagras}</span><br>
				<span>DISTANCIA ENTRE BISAGRAS: ${ejeBisagra.toFixed(2)}</span><br>
				G92 X1000. Y1000. <br>
				(LAMINA ${altoBandeja} X 374 MM)<br>
				(T304 SQ 6.00 MM)<br>
				(T315 SQ 16.00 MM)<br>
				(T342 RC 20 X 4 MM A 90.0)<br>
				(T351 RC 20 X 2 MM A 0.0)<br>
				<span>SECCION SECUNDARIOS</span><br>
				X130.00 Y70.00 T342<br>
				G37 I25.00 P${this.nroCtos + 3} J15.33 K3<br>
				X205.00  Y258.00<br>
				G37 I25.00 P${this.nroCtos} J15.33 K3<br>
				X142.50 Y61.00 T351<br>
				G36 I25. P${this.nroCtos + 2} J64.00 K1<br>
				X217.50 Y249.00<br>
				G36 I25. P${this.nroCtos - 1} J64.00 K1<br>
				G72 X${(altoBandeja / 2 - 15).toFixed(2)} Y36.00<br>
				G66 I30.00 J0.00 P6.00 T304<br>
				<span>SECCION CERRADURA Y BISAGRAS</span><br>
				G72 X69.00 Y353.00<br>
				A1 G66 I23.00 J0.00 P6.00 T304<br>
				${corteBisagra}
				<span>SECCION CORTE EXTERNO</span><br>
				X3.00 Y3.00 T315<br>
				A2 G36 I13.00 P3 J6.00 K1<br>
				X40.00 Y19.00<br>
				A3 G37 I2.00 P1 J11.00 K2<br>
				X3.00 Y365.00<br>
				B2<br>
				X40.00 Y333.00<br>
				B3<br>
				X${(altoBandeja - 42).toFixed(2)} Y365.00<br>
				B2<br>
				X${(altoBandeja - 42).toFixed(2)} Y333.00<br>
				B3<br>
				X${(altoBandeja - 42).toFixed(2)} Y3.00<br>
				B2<br>
				X${(altoBandeja - 42).toFixed(2)} Y19.00<br>
				B3<br>
				G50`
			}else{

				altoBandeja = (this.nroCtos * 25) + 298;

				document.querySelector(".troquelado").innerHTML = 
				`<img class="img-thumbnail mb-3" src="img/bandeja6.png" alt="bandeja"><br>
				G92 X1000. Y1000. <br>
				(LAMINA ${altoBandeja} X 373 MM)<br>
				(T315 SQ 16.00 MM)<br>
				(T331 RD 8.00 MM)<br>
				(T342 RC 20 X 4 MM A 90.0)<br>
				(T351 RC 20 X 2 MM A 0.0)<br>
				<span>SECCION SECUNDARIOS</span><br>
				X96.50 Y81.50 T331<br>
				G36 I${(altoBandeja - 193).toFixed(2)} P1 J210.00 K1<br>
				X111.50 Y69.50 T342<br>
				G37 I25.00 P${this.nroCtos + 3} J15.33 K3<br>
				X186.50 Y257.50<br>
				G37 I25.00 P${this.nroCtos} J15.33 K3<br>
				X124.00 Y60.50 T351<br>
				G36 I25. P${this.nroCtos + 2} J64.00 K1<br>
				X199.00 Y248.50<br>
				G36 I25. P${this.nroCtos - 1} J64.00 K1<br>
				<span>SECCION CORTE EXTERNO</span><br>
				X5.00 Y5.00 T315<br>
				G37 I${(altoBandeja - 10).toFixed(2)} P1 J363.00 K1<br>
				G50`
			}
		}else{
			alert("ESCOJA UNA OPCION");
		}
	};
	cuerpoCNC(){

		let altoCuerpo = 0;
		let anchoCuerpo = 0;
		let huecosPuerta = 2;
		let arranqueHueco = 50;
		let ejeHuecos = 0; 

		if (this.montaje == "embutido")
		{
			if (this.ppal == "TIPO L")
			{
				altoCuerpo = (this.nroCtos * 25) + 300;

				if (altoCuerpo >=500 && altoCuerpo <=800){
					huecosPuerta = 3;
				}
				ejeHuecos = (altoCuerpo - 100) / (huecosPuerta - 1);

				// MOSTRAR TROQUELADO...
				document.querySelector(".troquelado1").innerHTML = 
				`<img class="img-thumbnail mb-3" src="img/bandeja7.png" alt="bandeja"><br>
				<span>CANTIDAD DE HUECOS: ${huecosPuerta}</span><br>
				<span>DISTANCIA ENTRE HUECOS: ${ejeHuecos.toFixed(2)}</span><br>
				G92 X1000. Y1000. <br>
				(LAMINA ${altoCuerpo} X 620 MM)<br>
				(T205 PP 20.00 MM)<br>
				(T313 RD 4.00 MM)<br>
				(T345 OV 8.05 X 3.65 MM A 90.0)<br>
				<span>SECCION CORTE INTERNO</span><br>
				X50.00 Y6.00 T313<br>
				G37 I${ejeHuecos.toFixed(2)} P${huecosPuerta - 1} J608.00 K1<br>
				X35.00 Y217.50<br>
				A1 G36 I50.00 P1 J185.00 K1<br>
				X135.00 Y215.00<br>
				A2 G36 I${(altoCuerpo - 270).toFixed(2)} P1 J190.00 K1<br>
				X35.00 Y217.50 T205<br>
				B1<br>
				X135.00 Y215.00<br>
				B2<br>
				<span>SECCION HUECOS EXTERNOS</span><br>
				X6.50 Y27.00 T345<br>
				G37 I${(altoCuerpo - 13).toFixed(2)} P1 J566.00 K1<br>
				X6.50 Y97.00<br>
				G37 I${(altoCuerpo - 13).toFixed(2)} P1 J213.00 K2<br>
				G50`
			}else if (this.ppal == "TQD"){
				alert("PRINCIPAL TQD");
			}else{
				alert("PRINCIPAL THQC");
			}
		}
	};
	puertaCNC(){

		let altoPuerta = (this.nroCtos * 25) + 340;
		let anchoPuerta = 440;
		let ejeHuecos = (altoPuerta - 140) / 2;

		if (this.ppal == "TIPO L")
		{

			// MOSTRAR TROQUELADO...
			document.querySelector(".codigoPuerta").innerHTML = 
			`<img class="img-thumbnail mb-3" src="img/puerta1.png" alt="puerta"><br>
			<span>DESARROLLO DE PUERTA: ${altoPuerta} X ${anchoPuerta}</span><br>
			<span>DISTANCIA ENTRE HUECOS: ${ejeHuecos.toFixed(2)}</span><br>
			G92 X1000. Y1000. <br>
			(LAMINA ${altoPuerta} X ${anchoPuerta})<br>
			(T203 RD 6.35 MM)<br>
			(T315 SQ 16.00 MM)<br>
			(T318 SQ 18.00 MM)<br>
			(T336 RD 7.25 MM)<br>
			(T342 RE 20 X 4 MM A 90.0)<br>
			(T351 RE 20 X 2 MM A 0.0)<br>
			<span>HUECOS DE FIJACION</span><br>
			X70.00 Y27.50 T203<br>
			A1 G36 I${ejeHuecos.toFixed(2)} P2 J1.50 K2<br>
			X70.00 Y409.50.00<br>
			B1<br>
			<span>CORTE CERRADURA</span><br>
			X${(altoPuerta / 2).toFixed(2)} Y129.25 T336<br>
			G28 I1.50 J90.00 K4<br>
			X${(altoPuerta / 2 - 12).toFixed(2)} Y91.00 T318<br>
			G36 I24.00 P1 J23.00 K1<br>
			X${(altoPuerta / 2 - 5.5).toFixed(2)} Y114.00<br>
			X${(altoPuerta / 2 + 5.5).toFixed(2)}<br>
			X${(altoPuerta / 2 - 6.5).toFixed(2)} Y91.00 T315<br>
			G36 I13.00 P1 J14.00 K1<br>
			<span>CORTE BISAGRAS</span><br>
			X115.00 Y370.00 T351<br>
			X126.00<br>
			X${(altoPuerta - 126).toFixed(2)}<br>
			X${(altoPuerta - 115).toFixed(2)}<br>
			<span>CORTE BATIENTE</span><br>
			G72 X65.00 Y373.00<br>
			A2 G66 I${(altoPuerta - 130).toFixed(2)} J0.00 P20.00 Q2.00 T351<br>
			G72 X65.00 Y65.00<br>
			B2<br>
			G72 X69.00 Y65.00<br>
			A3 G66 I310.00 J90.00 P20.00 Q4.00 T342<br>
			G72 X${(altoPuerta - 65).toFixed(2)} Y65.00<br>
			B3<br>
			G50`
		}
	};
};

// OPCIONES DE EL SELECT DE LAS BANDEJAS...

const $select = document.querySelector("#miSelect");
const opcionCambiada = () => {
  //console.log("Cambio");
  const indice = $select.selectedIndex;
  //const opcionSeleccionada = $select.options[indice];

  if(indice === 0)
  {
  	document.querySelector("#circuitos").innerHTML = '';

  }else if(indice === 1 || indice === 2){
  	document.querySelector("#circuitos").innerHTML = 
  						`<option value="8">06-08 CTOS</option>
						<option value="12">10-12 CTOS</option>
						<option value="16">14-16 CTOS</option>
						<option value="20">18-20 CTOS</option>
						<option value="24">22-24 CTOS</option>
						<option value="28">26-28 CTOS</option>
						<option value="32">30-32 CTOS</option>
						<option value="36">34-36 CTOS</option>
						<option value="40">38-40 CTOS</option>
						<option value="44">42-44 CTOS</option>
						` 	
  }else{
  	document.querySelector("#circuitos").innerHTML = 
  						`<option value="6">04-06 CTOS</option>
						<option value="10">08-10 CTOS</option>
						<option value="14">12-14 CTOS</option>
						<option value="18">16-18 CTOS</option>
						<option value="22">20-22 CTOS</option>
						<option value="26">24-26 CTOS</option>
						<option value="30">28-30 CTOS</option>
						<option value="34">32-34 CTOS</option>
						<option value="38">36-38 CTOS</option>
						<option value="42">40-42 CTOS</option>
						` 
  }
};
$select.addEventListener("change", opcionCambiada);

// OPCIONES DE EL SELECT DE LAS PUERTAS...

const $select1 = document.querySelector("#miSelect1");
const opcionCambiada1 = () => {
  //console.log("Cambio");
  const indice = $select1.selectedIndex;
  //const opcionSeleccionada = $select.options[indice];

  if(indice === 0)
  {
  	document.querySelector("#circuitos2").innerHTML = '';

  }else if(indice === 1 || indice === 2){
  	document.querySelector("#circuitos2").innerHTML = 
  					`<option value="8">06-08 CTOS</option>
						<option value="12">10-12 CTOS</option>
						<option value="16">14-16 CTOS</option>
						<option value="20">18-20 CTOS</option>
						<option value="24">22-24 CTOS</option>
						<option value="28">26-28 CTOS</option>
						<option value="32">30-32 CTOS</option>
						<option value="36">34-36 CTOS</option>
						<option value="40">38-40 CTOS</option>
						<option value="44">42-44 CTOS</option>
						` 	
  }else{
  	document.querySelector("#circuitos2").innerHTML = 
  					`<option value="6">04-06 CTOS</option>
						<option value="10">08-10 CTOS</option>
						<option value="14">12-14 CTOS</option>
						<option value="18">16-18 CTOS</option>
						<option value="22">20-22 CTOS</option>
						<option value="26">24-26 CTOS</option>
						<option value="30">28-30 CTOS</option>
						<option value="34">32-34 CTOS</option>
						<option value="38">36-38 CTOS</option>
						<option value="42">40-42 CTOS</option>
						` 
  }
};
$select1.addEventListener("change", opcionCambiada1);

// OPCIONES DE EL SELECT DE LOS CUERPOS...

let radioTipo = document.querySelectorAll('input[type=radio][name="radio2"]');
radioTipo.forEach(radio => radio.addEventListener('change', () =>{

	if (radio.value == "TIPO L" || radio.value == "TQD"){
		document.querySelector("#circuitos1").innerHTML = 
  					`<option value="8">06-08 CTOS</option>
						<option value="12">10-12 CTOS</option>
						<option value="16">14-16 CTOS</option>
						<option value="20">18-20 CTOS</option>
						<option value="24">22-24 CTOS</option>
						<option value="28">26-28 CTOS</option>
						<option value="32">30-32 CTOS</option>
						<option value="36">34-36 CTOS</option>
						<option value="40">38-40 CTOS</option>
						<option value="44">42-44 CTOS</option>
						` 
	}else if (radio.value == "THQC"){
		document.querySelector("#circuitos1").innerHTML = 
  					`<option value="6">04-06 CTOS</option>
						<option value="10">08-10 CTOS</option>
						<option value="14">12-14 CTOS</option>
						<option value="18">16-18 CTOS</option>
						<option value="22">20-22 CTOS</option>
						<option value="26">24-26 CTOS</option>
						<option value="30">28-30 CTOS</option>
						<option value="34">32-34 CTOS</option>
						<option value="38">36-38 CTOS</option>
						<option value="42">40-42 CTOS</option>
						`
	}else{
		document.querySelector("#circuitos1").innerHTML = '';
	}	

})); 

let boton = document.getElementById("enviarBandeja");
boton.addEventListener("click", function(e)
{
	e.preventDefault();
	let tipoPpal = document.querySelector("#miSelect").value;
	let tipoBandeja = document.querySelector("#tipo").value;
	let cant = document.querySelector("#circuitos").value;
	const troquelarBandeja = new TableroBeta(tipoPpal, tipoBandeja, cant);
	troquelarBandeja.bandejaCNC();
});


let boton1 = document.getElementById("enviarCuerpo");
boton1.addEventListener("click", function(e)
{
	e.preventDefault();
	let tipoCuerpo = document.querySelector("input[type=radio][name=radio1]:checked").value;
	let tipoPrincipal = document.querySelector("input[type=radio][name=radio2]:checked").value;
	let cant1 = document.querySelector("#circuitos1").value;
	const troquelarCuerpo = new TableroBeta(tipoPrincipal, tipoCuerpo, cant1);
	troquelarCuerpo.cuerpoCNC();
});

let boton2 = document.getElementById("enviarPuerta");
boton2.addEventListener("click", function(e)
{
	e.preventDefault();
	let tipoPpal = document.querySelector("#miSelect1").value;
	let tipoBandeja = document.querySelector("#tipo").value;
	let cant = document.querySelector("#circuitos2").value;
	const troquelarPuerta = new TableroBeta(tipoPpal, tipoBandeja, cant);
	troquelarPuerta.puertaCNC();
});




//const prueba = new BandejaTipoL(8);
//prueba.mostrarInfo();