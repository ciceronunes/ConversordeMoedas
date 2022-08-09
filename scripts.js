const button = document.getElementsByTagName('button')[0]
const select = document.getElementById('converterPara')

const valorDoDolar = 7.8
const valorDoEuro = 12
const valorDoBitcoin = 120209.72;

const converter = () => {
    let valorparaconverter = document.getElementById('valorparaconverter').value;
    const valorOrigem = document.getElementById('valorOrigem')
    const valorDestino = document.getElementById('valorDestino')

    valorparaconverter = valorparaconverter.replaceAll(".", "").replace(",", ".")

    valorOrigem.innerHTML = new Intl.NumberFormat('pt-Br', {
        style: 'currency',
        currency: 'BRL'
    }).format(valorparaconverter)

    if (select.value === 'US$ Dolar Americano') {
        valorDestino.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorparaconverter / valorDoDolar)
    }

    if (select.value === '€ Euro') {
        valorDestino.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(valorparaconverter / valorDoEuro)
    }

    if (select.value === '₿ Bitcoin') {
        valorDestino.innerHTML = new Intl.NumberFormat('de-DE', {
            maximumSignificantDigits: 2
        }).format(valorparaconverter / valorDoBitcoin)

    }
}


const mudeiPaisDestino = () => {

    const textoMoedaConversao = document.getElementById('textoMoedaConversao')
    const bandeiraConversão = document.getElementById('bandeiraDestino')
    const valorDestino = document.getElementById('valorDestino')
    const valorOrigem = document.getElementById('valorOrigem')

    valorOrigem.innerHTML = new Intl.NumberFormat('pt-Br', {
        style: 'currency',
        currency: 'BRL'
    }).format(0)

    if (select.value === 'US$ Dolar Americano') {
        textoMoedaConversao.innerHTML = 'US$ Dolar Americano'
        bandeiraConversão.src = "./assets/USA.svg"
        valorDestino.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(0)
    }
    if (select.value === '€ Euro') {
        textoMoedaConversao.innerHTML = 'Euro'
        bandeiraConversão.src = "./assets/EURO.svg"
        valorDestino.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(0)
    }
    if (select.value === '₿ Bitcoin') {
        textoMoedaConversao.innerHTML = 'Bitcoin'
        bandeiraConversão.src = "./assets/BITCOIN.svg"
        valorDestino.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(0)

    }
}

function k(i) {
    
    let v = i.value.replace(/\D/g, '');
    v = (v / 100).toFixed(2); // + ''
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3})(\d{3}),/g, "$1.$2.$3.$4,");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    i.value = v;
}

button.addEventListener('click', converter)
select.addEventListener('change', mudeiPaisDestino)