function Calcular() {

    let idadeCanina = prompt("Qual a idade do cachorrinho?");

   let mostraResultado = document.querySelector(".mostra-resultado");
   
   mostraResultado.textContent = "Resultado: a idade humana do cachorrinho é " + idadeCanina * 7 ;
}
