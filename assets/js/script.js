const form = document.querySelector('.imcForm');
const btn = document.querySelector('#btn');
const answer = document.querySelector('#answer')

function calcImc(){

    btn.addEventListener('click', function(e){

        e.preventDefault();

        let height = form.querySelector('#height').value;
            height = height.replace(',', '.');
            height = Number(height);

        let weight = form.querySelector('#weight').value;
            weight = weight.replace(',', '.');
            weight = Number(weight);

        const imc = weight / (height * height);
        answer.innerHTML = `${conditions(imc)}`;

        function conditions (imc) {
            if(imc <= 18.5){

                return answer.innerHTML = `Seu imc é <b style='color: rgb(255,0,0)'>${imc.toFixed(2)}</b> você está desnutrido, procure ajuda de um profissional.`;
            }else if(imc >= 18.5 && imc < 25) {
                return answer.innerHTML = ` Seu imc é <b style='color: rgb(0,128,0)'>${imc.toFixed(2)}</b>  você está com um bom peso continue assim.`
            }else if(imc >= 25 && imc < 30){
                return answer.innerHTML = ` Seu imc é <b style='color: #F0C809'>${imc.toFixed(2)}</b>  você está acima do peso, procure se alimentar de forma balanceada e faça exercícios, e claro procure um profissional.`
            }else if (imc >= 30){
                return answer.innerHTML = ` Seu imc é <b style='color: rgb(255,0,0)'>${imc.toFixed(2)}</b> você está obeso(a) procure um profissional urgentemente.`
            }
        }
    })

}
calcImc();