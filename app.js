const prviBroj = document.querySelector('#prvi-broj');
const drugiBroj = document.querySelector('#drugi-broj');
const rezultat = document.querySelector('#rezultat');
const operacija = document.querySelector('.operacija');
const btnIzracunaj = document.querySelector('.btn-izracunaj');

btnIzracunaj.addEventListener('click', () => {

    let brojA = Number(prviBroj.value);
    let brojB = Number(drugiBroj.value);

    let oper = operacija.value;

    const digitron = () => {
        switch (oper) {
            case '1':
                return brojA + brojB;
            case '2':
                return brojA - brojB;
            case '3':
                return brojA * brojB;
            case '4':
                return brojA / brojB;
                default:
                    return(`niste odabrali operaciju`);
        }
    }
    rezultat.value = digitron(brojA,brojB);
});