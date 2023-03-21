class CeldaIndustrial{
	constructor(nema, modelo, calibre, alto, ancho, prof, pieza){
		this.nema = nema;
		this.modelo = modelo;
		this.calibre = parseInt(calibre);
		this.alto = parseInt(alto);
		this.ancho = parseInt(ancho);
		this.prof = parseInt(prof);
		this.pieza = pieza;
	}

	infoCNC()
	{
		document.querySelector("#info-contenido").innerHTML =
		`<p>La opcion es celda nema ${this.nema}
		modelo ${this.modelo}, de calibre ${this.calibre}<br>
		las medidas son ${this.alto} de alto x ${this.ancho} de ancho x ${this.prof} de profundidad</p>`;
	}

	troquelarPiezs(){
		if (this.pieza == 0){
			alert('Debe seleccionar una pieza de la lista');
		}else if (this.pieza == 1){
			let altoBase   = document.getElementById("baseCNC").value;
			let tipoBase   = document.querySelector("input[type=radio][name=tipo-base]:checked").value;
			let codigoBase = document.getElementById("codigoPieza");
			codigoBase.innerHTML = `Hola soy un codigo generado y has seleccionado una base de ${altoBase} mm tipo ${tipoBase}`;
		}
	}

	
}

// DECLARACION DE VARIABLES...

const enviarInfo = document.getElementById("infoCelda");
const enviarCNC = document.getElementById("enviarTroquelado");

let set_modelo  = document.getElementById("celda");
let set_calibre = document.getElementById("calibre");
let set_alto    = document.getElementById("alto");
let set_ancho   = document.getElementById("ancho");
let set_prof    = document.getElementById("prof");
let set_piezas  = document.getElementById("piezas");
let set_boton   = document.getElementById("enviarTroquelado");
let set_codigo1 = document.getElementById("codigoPieza");

enviarInfo.addEventListener("click", function(e)
{
	let nema    = document.querySelector("input[type=radio][name=nema]:checked").value;
	let modelo  = set_modelo.value;
	let calibre = set_calibre.value;
	let alto    = set_alto.value;
	let ancho   = set_ancho.value;
	let prof    = set_prof.value;

	e.preventDefault();
	const informeCelda = new CeldaIndustrial(nema,modelo,calibre,alto,ancho,prof,0);
	informeCelda.infoCNC();
	set_modelo.setAttribute('disabled', '');
	set_calibre.setAttribute('disabled', '');
	set_alto.setAttribute('disabled', '');
	set_ancho.setAttribute('disabled', '');
	set_prof.setAttribute('disabled', '');
	set_piezas.removeAttribute("disabled");
	set_boton.removeAttribute("disabled");
});


// OPCIONES DE EL SELECT DE LAS PIEZAS...


const $piezas = document.querySelector("#piezas");
const foto_celdas = document.getElementById("fotoCeldas");
const opcionCambiada = () => {
  	//console.log("Cambio");
  	//const indice = $piezas.selectedIndex;
  	//const opcionSeleccionada = $select.options[indice];
  	
	set_codigo1.innerHTML = '';

  	let seleccion = document.getElementById("opciones-piezas");
	let valor = $piezas.value;

	if (valor == 1){
		seleccion.innerHTML = `<label for="inlineCheckbox1">Tipo de base</label>
	                            	<br>
									<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="tipo-base" id="inlineRadio1" value="ESTANDAR">
									<label class="form-check-label" for="inlineRadio1">ESTANDAR</label>
									</div>
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" name="tipo-base" id="inlineRadio2" value="PATA">
										<label class="form-check-label" for="inlineRadio2">TIPO PATA</label>
									</div>

	                            	<select id="baseCNC" class="form-select mt-3" aria-label="Default select example">
									  <option selected>Alto de la base</option>
									  <option value="200">200 mm</option>
									  <option value="100">100 mm</option>
									  <option value="50">50 mm</option>
									</select>`;
	}else if (valor == 2 || valor == 3){
		seleccion.innerHTML = `<label for="">Tipo de Tapa</label>
								<br>
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
									<label class="form-check-label" for="inlineRadio1">CON ACCESO</label>
								</div>
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
									<label class="form-check-label" for="inlineRadio2">CERRADO</label>
								</div>`;
	}else if(valor == 4){
		seleccion.innerHTML = `<label for="">Tipo de Paral</label>
								<br>
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
									<label class="form-check-label" for="inlineRadio1">FRONTAL</label>
								</div>
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
									<label class="form-check-label" for="inlineRadio2">POSTERIOR</label>
								</div>
								<br><br>
								<label for="">Cortes</label>
								<br>
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
									<label class="form-check-label" for="inlineCheckbox1">BISAGRAS</label>
								</div>
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
									<label class="form-check-label" for="inlineCheckbox2">ACOPLES</label>
								</div>`;
	}else if(valor == 5){
		seleccion.innerHTML = `<label for="">Cerradura</label>
								<br>
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="manilla" id="inlineRadio1" value="llave">
									<label class="form-check-label" for="inlineRadio1">Con Llave</label>
								</div>
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="manilla" id="inlineRadio2" value="candado">
									<label class="form-check-label" for="inlineRadio2">Porta-Candado</label>
								</div>`;

	}else if(valor == 6){
		seleccion.innerHTML = ``;
	}else if(valor == 7){
		seleccion.innerHTML = `<label for="">Tipo de tapa</label>
								<br>
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="tapa" id="inlineRadio1" value="1">
									<label class="form-check-label" for="inlineRadio1">Sencilla</label>
								</div>
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="tapa" id="inlineRadio2" value="2">
									<label class="form-check-label" for="inlineRadio2">Doble</label>
								</div>`;
	}else if (valor == 8 || valor == 9){
		seleccion.innerHTML = `<label for="">Altura pieza</label>
								<br>
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="soporte" id="soporte1" value="1">
									<label class="form-check-label" for="soporte1">50mm</label>
								</div>
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="soporte" id="soporte2" value="2">
									<label class="form-check-label" for="soporte2">75mm</label>
								</div>
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="soporte" id="soporte3" value="3">
									<label class="form-check-label" for="soporte3">100mm</label>
								</div>`;
	}
  	//seleccion.innerHTML = `${valor}`;  
};



$piezas.addEventListener("change", opcionCambiada);

enviarCNC.addEventListener("click", function(e){
	e.preventDefault();
	let nema    = document.querySelector("input[type=radio][name=nema]:checked").value;
	let modelo  = set_modelo.value;
	let calibre = set_calibre.value;
	let alto    = set_alto.value;
	let ancho   = set_ancho.value;
	let prof    = set_prof.value;
	let pieza   = set_piezas.value;
	//alert('Has presionado el boton');
	const piezaCNC = new CeldaIndustrial(nema,modelo,calibre,alto,ancho,prof,pieza);
	piezaCNC.troquelarPiezs();
});
