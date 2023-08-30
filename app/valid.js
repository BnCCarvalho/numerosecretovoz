function verficaSeValido(palpite) {
  const numero = +palpite;

  if (palpiteInvalido(numero)) {
    if (
      palpite.toUpperCase() === "GAME OVER." ||
      palpite.toUpperCase() === "GAME OVER" ||
      palpite.toUpperCase() === "DESISTO." ||
      palpite.toUpperCase() === "DESISTO"
    ) {
      document.body.innerHTML = `
            <h2>Game Over!!😞</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `;
      document.body.style.backgroundColor = "black";
    } else {
      elementoChute.innerHTML += `<div>Valor inválido: o palpite precisa ser um número.</div>`;
      return;
    }
  }

  if (numeroNaoPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: o palpite precisa estar entre ${menorValor} e ${maiorValor}.</div>`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>🎉Você acertou!🎉</h2>
    <h3>O número secreto era ${numeroSecreto}.</h3>

    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `;
  } else if (numero < numeroSecreto) {
    elementoChute.innerHTML += `
    <div>
        O número secreto é maior que o palpite. <i class="fa-sharp fa-solid fa-arrow-up"></i>
    </div>`;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>
        O número secreto é menor que o palpite. <i class="fa-sharp fa-solid fa-arrow-down"></i>
    </div>`;
  } else {
    return;
  }
}

function palpiteInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroNaoPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
