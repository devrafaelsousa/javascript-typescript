function createCalc () {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        
        init() {
            this.clickButton();
            this.pressEnter();
        },


        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        clearDisplay() {
            this.display.value = '';
        },

        delOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta Inválida!');
                    return;
                }
                this.display.value = String(conta);
            } catch(e) {
                alert('Conta Inválida!');
                return;
            }
        },
 
        // método que pega o click dos botões
        clickButton() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.delOne();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnForDisplay(valor) {
            this.display.value += valor;

        }
    };
}

const calculator = createCalc();
calculator.init();
