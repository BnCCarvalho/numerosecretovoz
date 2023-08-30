const elementoChute = document.getElementById("chute");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  palpite = e.results[0][0].transcript;
  exibePalpiteNaTela(palpite);
  verficaSeValido(palpite);
}

function exibePalpiteNaTela(palpite) {
  elementoChute.innerHTML = `
  <div>Você disse:</div>

  <span class="box">${palpite}</span>

  <div>`;
}

recognition.addEventListener("end", () => recognition.start());
