function criaCalculadora() {
  return{
    
    // Atributos
    display: document.querySelector('.display'),

    // Métodos
    inicia() {
      this.cliqueBotoes();
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
      let conta = this.display.value

      try {
        conta = eval(conta)

        if(!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta); // Transforma em string
      } catch (error) {
        alert('Conta inválida');
        return;
      }
    },

    cliqueBotoes() {
      document.addEventListener('click', e => {
        const el = e.target; // Oque foi clicado

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.display.value = '';
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm()
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }

      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor
    }
  };
}
const calculadora = criaCalculadora();
calculadora.inicia();