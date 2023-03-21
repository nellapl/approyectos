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
				(T105 PP 20.00 MM)<br>
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
			}else if (this.ppal == "TQD")
			{

				altoCuerpo = (this.nroCtos * 25) + 500;
				huecosPuerta = 3;
				ejeHuecos = (altoCuerpo - 100) / (huecosPuerta - 1);

				// MOSTRAR TROQUELADO...
				document.querySelector(".troquelado1").innerHTML = 
				`<img class="img-thumbnail mb-3" src="img/bandeja8.png" alt="bandeja"><br>
				<span>CANTIDAD DE HUECOS: ${huecosPuerta}</span><br>
				<span>DISTANCIA ENTRE HUECOS: ${ejeHuecos.toFixed(2)}</span><br>
				G92 X1000. Y1000. <br>
				(LAMINA ${altoCuerpo} X 640 MM)<br>
				(T105 PP 20.00 MM)<br>
				(T313 RD 4.00 MM)<br>
				(T345 OV 8.05 X 3.65 MM A 90.0)<br>
				<span>SECCION CORTE INTERNO</span><br>
				X50.00 Y6.00 T313<br>
				G37 I${ejeHuecos.toFixed(2)} P${huecosPuerta - 1} J628.00 K1<br>
				X140.00 Y252.50<br>
				G36 I130.00 P1 J135.00 K1<br>
				X85.00 Y170.00<br>
				A1 G36 I185.00 P1 J300.00 K1<br>
				X335.00 Y225.<br>
				A2 G36 I${(this.nroCtos * 25 + 30).toFixed(2)} P1 J190.00 K1<br>
				X335.00 Y225. T205<br>
				B2<br>
				X85.00 Y170.00<br>
				B1<br>
				<span>SECCION HUECOS EXTERNOS</span><br>
				X6.50 Y27.00 T345<br>
				G37 I${(altoCuerpo - 13).toFixed(2)} P1 J586.00 K1<br>
				X6.50 Y107.00<br>
				G37 I${(altoCuerpo - 13).toFixed(2)} P1 J213.00 K2<br>
				G50`
			}else{

				altoCuerpo = (this.nroCtos * 25) + 375;

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
				(T105 PP 20.00 MM)<br>
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
			}
		}else{

			if (this.ppal == "TIPO L")
			{
				altoCuerpo = (this.nroCtos * 25) + 297;

				// MOSTRAR TROQUELADO...
				document.querySelector(".troquelado1").innerHTML = 
				`<img class="img-thumbnail mb-3" src="img/bandeja9.png" alt="bandeja"><br>
				<span>CAJA: ${altoCuerpo + 3} X 450 X 100MM</span><br>
				G92 X1000. Y1000. <br>
				(LAMINA ${altoCuerpo} X 767 MM)<br>
				(T105 PP 20.00 MM)<br>
				(T255 RE 55 X 50 MM A 0.0)<br>
				(T313 RD 4.00 MM)<br>
				(T336 RD 7.25 MM)<br>
				<span>SECCION CORTE INTERNO</span><br>
				X288.50 Y133.50 T313<br>
				A1 G36 I190.00 P1 J${(this.nroCtos * 25 + 30).toFixed(2)} K1<br>
				X291.00 Y${(altoCuerpo - 83.5).toFixed(2)}<br>
				A2 G36 I185.00 P1 J50.00 K1<br>
				X291.00 Y${(altoCuerpo - 83.5).toFixed(2)} T105<br>
				B2<br>
				X288.50 Y133.50<br>
				B1<br>
				X47.00 Y91.00 T336<br>
				Y116.00<br>
				Y${(altoCuerpo - 116).toFixed(2)}<br>
				Y${(altoCuerpo - 91).toFixed(2)}<br>
				<span>SECCION HUECOS EXTERNOS</span><br>
				X10.00 Y5.00 T255<br>
				A3 G37 I25.5 P1 J${(altoCuerpo - 10).toFixed(2)} K1<br>
				X731.5 Y5.00<br>
				B3<br>
				G50`				
			}else if (this.ppal == "TQD")
			{
				altoCuerpo = (this.nroCtos * 25) + 497;

				// MOSTRAR TROQUELADO...
				document.querySelector(".troquelado1").innerHTML = 
				`<img class="img-thumbnail mb-3" src="img/bandeja10.png" alt="bandeja"><br>
				<span>CAJA: ${altoCuerpo + 3} X 450 X 100MM</span><br>
				G92 X1000. Y1000. <br>
				(LAMINA ${altoCuerpo} X 767 MM)<br>
				(T105 PP 20.00 MM)<br>
				(T255 RE 55 X 50 MM A 0.0)<br>
				(T313 RD 4.00 MM)<br>
				(T336 RD 7.25 MM)<br>
				<span>SECCION CORTE INTERNO</span><br>
				X316.00 Y138.50 T313<br>
				G36 I135.00 P1 J130.00 K1<br>
				X233.50 Y83.50<br>
				A1 G36 I300.00 P1 J185.00 K1<br>
				X288.50 Y333.50 T313<br>
				A2 G36 I190.00 P1 J${(this.nroCtos * 25 + 30).toFixed(2)} K1<br>
				X288.50 Y333.50 T105<br>
				B2<br>
				X233.50 Y83.50<br>
				B1<br>
				X47.00 Y91.00 T336<br>
				Y116.00<br>
				Y${(altoCuerpo - 116).toFixed(2)}<br>
				Y${(altoCuerpo - 91).toFixed(2)}<br>
				<span>SECCION HUECOS EXTERNOS</span><br>
				X10.00 Y5.00 T255<br>
				A3 G37 I25.5 P1 J${(altoCuerpo - 10).toFixed(2)} K1<br>
				X731.5 Y5.00<br>
				B3<br>
				G50`
			}else{
				altoCuerpo = (this.nroCtos * 25) + 372;

				// MOSTRAR TROQUELADO...
				document.querySelector(".troquelado1").innerHTML = 
				`<img class="img-thumbnail mb-3" src="img/bandeja9.png" alt="bandeja"><br>
				<span>CAJA: ${altoCuerpo + 3} X 450 X 100MM</span><br>
				G92 X1000. Y1000. <br>
				(LAMINA ${altoCuerpo} X 767 MM)<br>
				(T105 PP 20.00 MM)<br>
				(T255 RE 55 X 50 MM A 0.0)<br>
				(T313 RD 4.00 MM)<br>
				(T336 RD 7.25 MM)<br>
				<span>SECCION CORTE INTERNO</span><br>
				X288.50 Y133.50 T313<br>
				A1 G36 I190.00 P1 J${(this.nroCtos * 25 + 105).toFixed(2)} K1<br>
				X291.00 Y${(altoCuerpo - 83.5).toFixed(2)}<br>
				A2 G36 I185.00 P1 J50.00 K1<br>
				X291.00 Y${(altoCuerpo - 83.5).toFixed(2)} T105<br>
				B2<br>
				X288.50 Y133.50<br>
				B1<br>
				X47.00 Y91.00 T336<br>
				Y116.00<br>
				Y${(altoCuerpo - 116).toFixed(2)}<br>
				Y${(altoCuerpo - 91).toFixed(2)}<br>
				<span>SECCION HUECOS EXTERNOS</span><br>
				X10.00 Y5.00 T255<br>
				A3 G37 I25.5 P1 J${(altoCuerpo - 10).toFixed(2)} K1<br>
				X731.5 Y5.00<br>
				B3<br>
				G50`
			}

		}
	}
	puertaCNC(){
		// DESARROLLO PARA PUERTA EMBUTIDA....
		if (this.montaje == "embutido")
		{
			let contador = 1;
			let altoPuerta = 0;

			if (this.ppal == "TIPO L"){

				altoPuerta = (this.nroCtos * 25) + 340;

			}else if (this.ppal == "TQD"){

				altoPuerta = (this.nroCtos * 25) + 540;

			}else if (this.ppal == "THQC"){

				altoPuerta = (this.nroCtos * 25) + 415;
			}else{

				alert("SELECCIONE EL PRINCIPAL");				
			}

			let anchoPuerta = 440;
			let ejeHuecos = (altoPuerta - 140) / 2;
			let bisagras = 2;
			let arranque = 115;
			let corteBisagra = '';

			if (altoPuerta >= 460 && altoPuerta < 710){

				bisagras = 3;			

			}else if (altoPuerta >= 710 && altoPuerta < 800){
				
				bisagras = 4;

			}else if (altoPuerta >= 800){

				bisagras = 5;
			}

			let ejeBisagra = (altoPuerta - 241) / (bisagras - 1);

			while (contador < bisagras)
			{
			  //text += "el arranque es " + contador + "<br>";
			  corteBisagra += 	`X${(arranque + ejeBisagra).toFixed(2)}<br> 
			  					X${(arranque + ejeBisagra + 11).toFixed(2)}<br>`;
			  contador++;
			  arranque += ejeBisagra;
			}
			
			// MOSTRAR TROQUELADO...
			if (this.ppal != "NADA")
			{
				document.querySelector(".codigoPuerta").innerHTML = 
				`<img class="img-thumbnail mb-3" src="img/puerta1.png" alt="puerta"><br>
				<span>DESARROLLO DE PUERTA: ${altoPuerta} X ${anchoPuerta}</span><br>
				<span>DISTANCIA ENTRE HUECOS: ${ejeHuecos.toFixed(2)}</span><br>
				<span>CANTIDAD DE BISAGRAS: ${bisagras}</span><br>
				<span>EJE ENTRE BISAGRAS: ${ejeBisagra}</span><br>
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
				<span>CORTE BISAGRAS PEQUEÑO</span><br>
				X115.00 Y370.00 T351<br>
				X126.00<br>
				${corteBisagra}
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
			}else{
				document.querySelector(".codigoPuerta").innerHTML = "";
			}
			
		}else{

			// DESARROLLO PARA PUERTA SUPERFICIAL....
			
			let contador = 1;
			let contador1 = 1;
			let altoPuerta = 0;

			if (this.ppal == "TIPO L"){

				altoPuerta = (this.nroCtos * 25) + 320;

			}else if (this.ppal == "TQD"){

				altoPuerta = (this.nroCtos * 25) + 520;

			}else if (this.ppal == "THQC"){

				altoPuerta = (this.nroCtos * 25) + 395;
			}else{

				alert("SELECCIONE EL PRINCIPAL");
			}

			let anchoPuerta = 480;
			let ejePuerta = altoPuerta / 2;
			let bisagras = 2;
			let arranque = 91;
			let arranque1 = 100;
			let corteBisagra1 = '';
			let corteBisagra2 = '';

			if (altoPuerta >= 1200){

			bisagras = 3;			

			}

			let ejeBisagra = (altoPuerta - 230) / (bisagras - 1);

			while (contador < bisagras)
			{
			  //text += "el arranque es " + contador + "<br>";
			  corteBisagra1 += 	`X${(arranque + ejeBisagra).toFixed(2)}<br> 
			  					X${(arranque + ejeBisagra + 48).toFixed(2)}<br>`;
			  contador++;
			  arranque += ejeBisagra;
			}

			contador = 1;

			while (contador1 < bisagras)
			{
			  //text += "el arranque es " + contador + "<br>";
			  corteBisagra2 += 	`X${(arranque1 + ejeBisagra).toFixed(2)} Y486.00<br> 
			  					B1<br>`;
			  contador1++;
			  arranque1 += ejeBisagra;
			}
			
			// MOSTRAR TROQUELADO...
			if (this.ppal != "NADA")
			{
				document.querySelector(".codigoPuerta").innerHTML = 
				`<img class="img-thumbnail mb-3" src="img/puerta2.png" alt="puerta"><br>
				<span>DESARROLLO DE PUERTA: ${altoPuerta} X ${anchoPuerta}</span><br>
				<span>DISTANCIA ENTRE HUECOS: ${ejePuerta.toFixed(2)}</span><br>
				<span>CANTIDAD DE BISAGRAS: ${bisagras}</span><br>
				<span>EJE ENTRE BISAGRAS: ${ejeBisagra}</span><br>
				G92 X1000. Y1000. <br>
				(LAMINA ${altoPuerta} X ${anchoPuerta})<br>
				(T255 RE 55 X 50 MM A 0.0)<br>
				(T315 SQ 16.00 MM)<br>
				(T342 RE 20 X 4 MM A 90.0)<br>				
				<span>CORTE BISAGRAS</span><br>
				X91.00 Y482.00 T342<br>
				X139.00<br>
				${corteBisagra1}
				X100.00 Y486.00 T315<br>
				A1 G28 I15.00 J0.00 K2<br>
				${corteBisagra2}
				<span>CORTE CERRADURA</span><br>
				X${(ejePuerta - 2.25).toFixed(2)} Y65.00<br>
				G36 I4.50 P1 J4.50 K1<br>
				<span>CORTE EXTERNO</span><br>
				X-5.5 Y-3.00 T255<br>
				G37 I${(altoPuerta + 11).toFixed(2)} P1 J486.00 K1<br>
				G50`

			}else{
				document.querySelector(".codigoPuerta").innerHTML = "";
			}
		}
		
	};
	chasisCNC(){

		let altoChasis = 0;

		if (this.ppal == "THQC"){

			altoChasis = Number(this.nroCtos * 25 + 125);

		}else{

			altoChasis = Number(this.nroCtos * 25 + 50);
		}

		let a= altoChasis - 70;
		let b= altoChasis - 20;
		let c= (altoChasis - 50) / 25;

		document.querySelector(".troqPerfil").innerHTML = 
				`<div class="text-center">
				<img class="img-thumbnail mb-3 shadow" src="img/perfil.PNG" alt="perfil">
				</div>
				<span>(LAMINA ${altoChasis} X 85 MM)</span><br>
				G92 X1000. Y1000.<br>
				(T313 RD 4.0 MM)<br>
				(T230 RD 5.8 MM)<br>
				X35.00 Y8.0 T230<br>
				G37 I${a.toFixed(2)} P1 J32.00 K1<br>
				X10.00 Y8.00<br>
				G37 I${b.toFixed(2)} P1 J69.00 K1<br>
				X25.00 Y77.00 T313<br>
				G28 I25.00 J0.00 K${c}<br>
				G50`

	}
}

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

// OPCIONES DE EL SELECT DE LOS CUERPOS...

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

let radioTipo3 = document.querySelectorAll('input[type=radio][name="radio3"]');
radioTipo3.forEach(radio => radio.addEventListener('change', () =>{

	if (radio.value == "TIPO L"){
		document.querySelector("#chasis").innerHTML =
		`<p>REFERENCIA</p>
		<img src="img/chasis.PNG" class="img-thumbnail shadow" alt="--">`
	}else if (radio.value == "THQC"){
		document.querySelector("#chasis").innerHTML =
		`<p>REFERENCIA</p>
		<img src="img/chasis3.PNG" class="img-thumbnail shadow" alt="--">`
	}else{
		document.querySelector("#chasis").innerHTML =
		`<p>REFERENCIA</p>
		<img src="img/chasis2.PNG" class="img-thumbnail shadow" alt="--">`
	};

	if (radio.value == "TIPO L" || radio.value == "TQD"){
		document.querySelector("#circuitos3").innerHTML = 
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
		document.querySelector("#circuitos3").innerHTML = 
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
		document.querySelector("#circuitos3").innerHTML = '';
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
	let tipoMontaje = document.querySelector("#tipo2").value;
	let cant = document.querySelector("#circuitos2").value;
	const troquelarPuerta = new TableroBeta(tipoPpal, tipoMontaje, cant);
	troquelarPuerta.puertaCNC();
});

let boton3 = document.getElementById("enviarPerfil");
boton3.addEventListener("click", function(e)
{
	e.preventDefault();
	let tipoPrincipal = document.querySelector("input[type=radio][name=radio3]:checked").value;
	let cant1 = document.querySelector("#circuitos3").value;
	const troquelarPerfil = new TableroBeta(tipoPrincipal, '', cant1);
	troquelarPerfil.chasisCNC();
});






//const prueba = new BandejaTipoL(8);
//prueba.mostrarInfo();