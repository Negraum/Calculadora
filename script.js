function criaCalculadora() {
  return{
    // Atrubutos
    display: document.querySelector('.display'),

    // Métodos
    clearDisplay() {
      this.display.value = '';
    },

    inicia() {
      this.cliqueBotoes();
    },

    cliqueBotoes() {
      document.addEventListener('click', function(e) {
        const el = e.target; // Oque foi clicado

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.display.value = '';
        }

      }.bind(this));
    },

    btnParaDisplay(valor) {
      this.display.value += valor
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();