class CajaIndustrial{
	constructor(alto, ancho, prof){
		this.alto = parseInt(alto);
		this.ancho = parseInt(ancho);
		this.prof = parseInt(prof);
	}

	cuerpoRemachadoCNC()
	{
		let altoCuerpo = this.alto;
		let anchoCuerpo = (2 * this.prof) + this.ancho + 118;
		let kGolpeProf = 'K1';
		let iDistProf = this.prof - 40;
		let kGolpeAncho = 'K1';
		let iDistAncho = (this.ancho - 160) / 3;
		let reposicion = '';

		if (this.prof >= 200 && this.prof < 250){
			kGolpeProf = 'K2';
			iDistProf = (this.prof - 40) / 2;
		}else if(this.prof >= 250){
			kGolpeProf = 'K3';
			iDistProf = (this.prof - 40) / 3;
		}

		if (this.ancho >= 500){
			kGolpeAncho = 'K3';
			iDistAncho = (this.ancho - 160) / 5;
		}

		if (anchoCuerpo >= 1020){
			reposicion = `G70 X${anchoCuerpo / 2}. Y${altoCuerpo / 2}.<br>
			G27 X${anchoCuerpo - 1000}.<br>`;
		}

		if (this.ancho <= 300 && anchoCuerpo < 1020){
			document.querySelector(".codigoRemachada").innerHTML = 
			`<span>TROQUELADO DE CUERPO</span><br>
			(LAMINA ${anchoCuerpo} X ${altoCuerpo} MM)<br>
			(T313 RD 4MM)<br>
			(T309 RD 5MM)<br>
			(T203 RD 6.35MM)<br>
			(T336 RD 7.25MM)<br>
			(T105 PP 20MM)<br>
			G92 X1000. Y1000.<br>
			X${anchoCuerpo - 48}. Y87.5 T336<br>
			Y112.5<br>
			Y${altoCuerpo - 112.5}<br>
			Y${altoCuerpo - 87.5}<br>
			X81.5 Y${altoCuerpo - 8}. T309<br>
			X${this.prof + 41.5}<br>
			X${this.prof + 79}.<br>
			X${(anchoCuerpo / 2) - 30}.<br>
			G28 I30. J0. K2<br>
			X${anchoCuerpo - (this.prof + 79)}. Y${altoCuerpo - 8}.<br>
			X${anchoCuerpo - (this.prof + 41.5)}<br>
			X${anchoCuerpo - 81.5}<br>
			X${this.prof + 99}. Y65. T313<br>
			A1 G36 I${this.ancho - 80}. P1 J${altoCuerpo - 130}. K1<br>
			X${this.prof + 99}. Y65. T105<br>
			B1<br>
			X5.5 Y-5. T255<br>
			G37 I${anchoCuerpo - 11}. P1 J${altoCuerpo - 2}. K1<br>
			G50<br>
			<span>DAR LA VUELTA</span><br>
			X43. Y${altoCuerpo - 7}. T203<br>
			X${anchoCuerpo - 43}.<br>
			X81.5 Y${altoCuerpo - 8}.<br>
			X${this.prof + 41.5}<br>
			X${this.prof + 79}.<br>
			X${(anchoCuerpo / 2) - 30}.<br>
			G28 I30. J0. K2<br>
			X${anchoCuerpo - (this.prof + 79)}. Y${altoCuerpo - 8}.<br>
			X${anchoCuerpo - (this.prof + 41.5)}<br>
			X${anchoCuerpo - 81.5}<br>
			G50`

		}else{

			document.querySelector(".codigoRemachada").innerHTML = 
			`<span>TROQUELADO DE CUERPO</span><br>
			(LAMINA ${anchoCuerpo} X ${altoCuerpo} MM)<br>
			(T309 RD 5 MM)<br>
			(T336 RD 7.25 MM)<br>
			(T313 RD 4 MM)<br>
			(T105 PP 20 MM)<br>
			(T255 RE 55 X 50 A 0)<br>
			(T203 RD 6.35 MM)<br>
			G92 X1000. Y1000.<br>
			X81.5 Y${altoCuerpo - 8}. T309<br>
			A1 G28 I${iDistProf}. J0. ${kGolpeProf}<br>
			X${this.prof + 79}. Y${altoCuerpo - 8}.<br>
			A2 G28 I30. J0. K2<br>
			X${this.prof + iDistAncho + 139}. Y${altoCuerpo - 8}.<br>
			G28 I${iDistAncho}. J0. ${kGolpeAncho}<br>
			X${anchoCuerpo - (this.prof + 139)}. Y${altoCuerpo - 8}.<br>
			B2<br>
			X${this.prof + 99}. Y65. T313<br>
			A3 G36 I${this.ancho - 80}. P1 J${altoCuerpo - 130}. K1<br>
			X${this.prof + 99}. Y65. T105<br>
			B3<br>
			X5.5 Y-5. T255<br>
			Y${altoCuerpo - 7}.<br>
			${reposicion}
			X${this.prof + this.ancho + 76.5} Y${altoCuerpo - 8}. T309<br>
			B1<br>
			X${anchoCuerpo - 48}. Y87.5 T336<br>
			Y112.5<br>
			Y${altoCuerpo - 112.5}<br>
			Y${altoCuerpo - 87.5}<br>
			X${anchoCuerpo - 5.5} Y${altoCuerpo - 7}. T255<br>
			Y-5.<br>
			G50<br>
			<span>DAR LA VUELTA</span><br>
			X43. Y${altoCuerpo - 7}. T203<br>
			X81.5 Y${altoCuerpo - 8}.<br>
			A1 G28 I${iDistProf}. J0. ${kGolpeProf}<br>
			X${this.prof + 79}. Y${altoCuerpo - 8}.<br>
			A2 G28 I30. J0. K2<br>
			X${this.prof + iDistAncho + 139}. Y${altoCuerpo - 8}.<br>
			G28 I${iDistAncho}. J0. ${kGolpeAncho}<br>
			X${anchoCuerpo - (this.prof + 139)}. Y${altoCuerpo - 8}.<br>
			B2<br>
			${reposicion}
			X${this.prof + this.ancho + 76.5} Y${altoCuerpo - 8}.<br>
			B1<br>
			X${anchoCuerpo - 43}. Y${altoCuerpo - 7}.<br>
			G50`;
		}

		
	}

	tapaRemachadaCNC()
	{
		let anchoTapaSup = this.ancho + 40;
		let profTapaSup  = this.prof + 83;
		let anchoTapaInf = this.ancho + 31;
		let profTapaInf  = this.prof + 75;

		let distHueco = 0;

		let cantHueco = 0;

		let kGolpeAncho = 'K1';
		let iDistAncho = (anchoTapaSup - 200) / 3;

		if (this.ancho >= 500){
			kGolpeAncho = 'K3';
			iDistAncho = (anchoTapaSup - 200) / 5;
		}


		if(this.prof < 200){

			distHueco = this.prof - 40;
			cantHueco = 1;

		}else if(this.prof >= 200 && this.prof < 250){

			distHueco = (this.prof - 40) / 2;
			cantHueco = 2

		}else{

			distHueco = (this.prof - 40) / 3;
			cantHueco = 3
		}

		if(this.ancho <= 300)
		{
			document.querySelector(".codigoRemachada").innerHTML = 
			`<span>TROQUELADO DE TAPA SUPERIOR</span><br>
			(LAMINA ${anchoTapaSup} X ${profTapaSup} MM)<br>
			(T203 RD 6.35MM)<br>
			(T255 RE 55 X 50 A 0)<br>
			G92 X1000. Y1000.<br>
			X${anchoTapaSup - 32}. Y42. T203<br>
			X32.<br>
			X8. Y83.<br>
			G37 I${anchoTapaSup - 16}. P1 J${distHueco}. K${cantHueco}<br>
			X40. Y${profTapaSup - 8}.<br>
			X${anchoTapaSup / 2 - 30}.<br>
			G28 I30. J0. K2<br>
			X${anchoTapaSup - 40}. Y${profTapaSup - 8}.<br>
			X11.5 Y5. T255<br>
			X-9.5 Y36.<br>
			X-7.5 Y${profTapaSup + 6}.<br>
			X${anchoTapaSup + 7.5}<br>
			X${anchoTapaSup + 9.5} Y36.<br>
			X${anchoTapaSup - 11.5} Y5.<br>			
			G50<br><br>

			<span>TROQUELADO DE TAPA INFERIOR</span><br>
			(LAMINA ${anchoTapaInf} X ${profTapaInf} MM)<br>
			(T309 RD 5 MM)<br>
			(T255 RE 55 X 50 A 0)<br>
			G92 X1000. Y1000.<br>
			X10. Y81. T309<br>
			G37 I${anchoTapaInf - 20}. P1 J${distHueco}. K${cantHueco}<br>
			X35.5 Y${profTapaInf - 10}.<br>
			X${anchoTapaInf / 2 - 30} 135.5<br>
			G28 I30. J0. K2<br>
			X${anchoTapaInf - 35.5} Y${profTapaInf - 10}.<br>
			X22. Y10. T255<br>
			X-10. Y40.<br>
			X-8.5 Y${profTapaInf + 6}.<br>
			X${anchoTapaInf + 8.5}<br>
			X${anchoTapaInf + 10}. Y40.<br>
			X${anchoTapaInf - 22}. Y10.<br>			
			G50`
			
		}else{

			document.querySelector(".codigoRemachada").innerHTML = 
			`<span>TROQUELADO DE TAPA SUPERIOR</span><br>
			(LAMINA ${anchoTapaSup} X ${profTapaSup} MM)<br>
			(T203 RD 6.35MM)<br>
			(T255 RE 55 X 50 A 0)<br>
			G92 X1000. Y1000.<br>
			X${anchoTapaSup - 32}. Y42. T203<br>
			X32.<br>
			X8. Y83.<br>
			G37 I${anchoTapaSup - 16}. P1 J${distHueco}. K${cantHueco}<br>
			X40. Y${profTapaSup - 8}.<br>
			A1 G28 I30. J0. K2<br>
			X${iDistAncho + 100}. Y${profTapaSup - 8}.<br>
			G28 I${iDistAncho}. J0. ${kGolpeAncho}.<br>
			X${anchoTapaSup - 100}. Y${profTapaSup - 8}.<br>
			B1<br>
			X11.5 Y5. T255<br>
			X-9.5 Y36.<br>
			X-7.5 Y${profTapaSup + 6}.<br>
			X${anchoTapaSup + 7.5}<br>
			X${anchoTapaSup + 9.5} Y36.<br>
			X${anchoTapaSup - 11.5} Y5.<br>			
			G50<br><br>

			<span>TROQUELADO DE TAPA INFERIOR</span><br>
			(LAMINA ${anchoTapaInf} X ${profTapaInf} MM)<br>
			(T309 RD 5 MM)<br>
			(T255 RE 55 X 50 A 0)<br>
			G92 X1000. Y1000.<br>
			X10. Y81. T309<br>
			G37 I${anchoTapaInf - 20}. P1 J${distHueco}. K${cantHueco}<br>
			X35.5 Y${profTapaInf - 10}.<br>
			A1 G28 I30. J0. K2<br>
			X${iDistAncho + 95.5} Y${profTapaInf - 10}.<br>
			G28 I${iDistAncho}. J0. ${kGolpeAncho}.<br>
			X${anchoTapaInf - 95.5} Y${profTapaInf - 10}.<br>
			B1<br>
			X22. Y10. T255<br>
			X-10. Y40.<br>
			X-8.5 Y${profTapaInf + 6}.<br>
			X${anchoTapaInf + 8.5}<br>
			X${anchoTapaInf + 10}. Y40.<br>
			X${anchoTapaInf - 22}. Y10.<br>			
			G50`
		}
		
	}

	cuerpoSoldadoCNC()
	{
		let altoLam = this.alto - 3;
		let anchoLam = (2 * this.prof) + this.ancho + 117;
		let reposicion = '';

		if (anchoLam > 1020)
		{
			reposicion = `<span>REPOSICION</span><br>
						G70 X${anchoLam / 2} Y${altoLam / 2}<br>
						G27 X${anchoLam - 1000}.<br>`;
		}

		if (isNaN(this.alto) || isNaN(this.ancho) || isNaN(this.prof))
		{
			alert("los campos no deben estar vacios");

		}else{
			
			document.querySelector(".codigoSoldada").innerHTML =
			`<span>CUERPO CAJA SOLDADA</span><br>
			(LAMINA ${altoLam} x ${anchoLam} MM)<br>
			(T313 RD 4 MM)<br>
			(T309 RD 5 MM)<br>
			(T336 RD 7.25 MM)<br>
			(T105 PP 20 MM)<br>
			(T255 RE 55 X 50 MM)<br>
			G92 X1000. Y1000.<br>
			X${this.prof + 98.5} Y63.5 T313<br>
			A1 G36 I${this.ancho - 80}. P1 J${this.alto - 130}. K1<br>
			X${this.prof + 98.5} Y63.5<br>
			B1<br>
			X${this.prof + 78.5} Y${altoLam - 13.5} T309<br>
			X${this.prof + 138.5}<br>
			X${anchoLam - (this.prof + 138.5)}<br>
			X${anchoLam - (this.prof + 78.5)}<br>
			X20.5 Y5. T255<br>
			A2 G36 I1.5 P1 J${altoLam - 10}. K1<br>
			${reposicion}
			X${anchoLam - 47}. Y91. T336<br>
			Y116.<br>
			Y${altoLam - 116}.<br>
			Y${altoLam - 91}.<br>
			X${anchoLam - 35.5} Y5. T255<br>
			B2<br>
			G50<br>
			<span>DAR LA VUELTA</span><br>
			X${this.prof + 78.5} Y${altoLam - 13.5} T309<br>
			X${this.prof + 138.5}<br>
			X${anchoLam - (this.prof + 138.5)}<br>
			X${anchoLam - (this.prof + 78.5)}<br>
			G50`;
		}
	}

	cuerpoPasoCNC()
	{
		let doblez = 20;
		let huecos = 0;
		let codeG37 = '';
		let desarrollo = (this.prof * 2) + this.ancho + (2 * doblez) - 10;
		let codeTapa = '';


		if(this.alto == 150 || this.alto == 200){
			huecos = 2;
		}else if(this.alto == 250 || this.alto == 300){
			huecos = 3;
		}else{
			huecos = 4;
		}

		if(this.ancho == 150){
			doblez = 15;
			desarrollo = (this.prof * 2) + this.ancho + (2 * doblez) - 10;
			codeG37 = `X5. Y9. T313<br>
						G37 I${desarrollo - 10}. P1 J${(this.alto - 20) / (huecos - 1)} k${huecos - 1}<br>`;

			codeTapa = `X8. Y${this.prof + 7}. T315<br>
						X${this.ancho - 8}<br>`;
		}else{
			codeG37 = `X10. Y9. T313<br>
						G37 I${desarrollo - 20}. P1 J${((this.alto - 20) / (huecos - 1)).toFixed(2)} k${huecos - 1}<br>`;

			codeTapa = `X3. Y${this.prof + 7}. T315<br>
						X12.<br>
						Y${this.prof + 12}.<br>
						X${this.ancho - 12}.<br>
						Y${this.prof + 7}.<br>
						X${this.ancho - 3}.<br>`;
		}

		//alert(`envio de datos correctos alto ${this.alto} mm ancho ${this.ancho} mm prof ${this.prof} mm`);
		document.querySelector(".codigoPaso").innerHTML =
		`<span>CAJA DE PASO SOLDADA</span><br>
		 DESARROLLO DEL CUERPO: ${this.alto - 2} x ${desarrollo}<br>
		 <span>TROQUELADO DE CUERPO</span><br>
		 G92 X1000. Y1000.<br>
		 (T313 RD 4 MM)<br>
		 ${codeG37}
		 G50<br>
		 <span>TROQUELADO DE TAPA</span><br>
		 DESARROLLO DE LA TAPA: ${this.ancho} X ${this.prof + 12}<br>
		 G92 X1000. Y1000.<br>
		 (T315 SQ 16 MM)<br>
		 ${codeTapa}
		 G50`
	}
}


let cajaRemachada = document.getElementById("enviarCuerpoRemachada");
let tapaRemachada = document.getElementById("enviarTapaRemachada");
let cajaSoldada = document.getElementById("enviarCuerpoSoldado");
let cajaPaso = document.getElementById("enviarCuerpoPaso");
let tapaPaso = document.getElementById("enviarTapaPaso");

cajaPaso.addEventListener("click", function(e)
{
	e.preventDefault();
	let alto = document.querySelector("#altoPaso").value;
	let ancho = document.querySelector("#anchoPaso").value;
	let prof = document.querySelector("#profPaso").value;
	const troquelarCuerpoPaso = new CajaIndustrial(alto, ancho, prof);
	troquelarCuerpoPaso.cuerpoPasoCNC();
});

cajaRemachada.addEventListener("click", function(e)
{
	e.preventDefault();
	let alto = document.querySelector("#alto").value;
	let ancho = document.querySelector("#ancho").value;
	let prof = document.querySelector("#prof").value;
	const troquelarCuerpo = new CajaIndustrial(alto, ancho, prof);
	troquelarCuerpo.cuerpoRemachadoCNC();
});

tapaRemachada.addEventListener("click", function(e)
{
	e.preventDefault();
	let alto = document.querySelector("#alto").value;
	let ancho = document.querySelector("#ancho").value;
	let prof = document.querySelector("#prof").value;
	const troquelarTapa = new CajaIndustrial(alto, ancho, prof);
	troquelarTapa.tapaRemachadaCNC();
});

cajaSoldada.addEventListener("click", function(e)
{
	e.preventDefault();
	let altoSold  = document.querySelector("#altoSold").value;
	let anchoSold = document.querySelector("#anchoSold").value;
	let profSold  = document.querySelector("#profSold").value;
	const troquelarCuerpoSold = new CajaIndustrial(altoSold, anchoSold, profSold);
	troquelarCuerpoSold.cuerpoSoldadoCNC();
});