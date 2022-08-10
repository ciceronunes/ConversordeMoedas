const button = document.getElementsByTagName('button')[0]
const select = document.getElementById('convertTo')
const input = document.getElementById('valueToBeConverted')

const dollarValue = 7.8
const euroValue = 12
const bitcoinValue = 120209.72;

const inputmask = () => {
    let inputValue = document.getElementById('valueToBeConverted')

    let convertedValue = inputValue.value.replace(/\D/g, '');
    convertedValue = (convertedValue / 100).toFixed(2).replace(".", ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    inputValue.value = convertedValue;
}

const convertCurrency = () => {
    let valueToBeConverted = document.getElementById('valueToBeConverted').value;
    const informedValue = document.getElementById('informedValue')
    const convertedValue = document.getElementById('convertedValue')

    valueToBeConverted = valueToBeConverted.replaceAll(".", "").replace(",", ".")

    informedValue.innerHTML = new Intl.NumberFormat('pt-Br', {
        style: 'currency',
        currency: 'BRL'
    }).format(valueToBeConverted)

    if (select.value === 'US$ Dolar Americano') {
        convertedValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valueToBeConverted / dollarValue)
    }

    if (select.value === '€ Euro') {
        convertedValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(valueToBeConverted / euroValue)
    }

    if (select.value === '₿ Bitcoin') {
        convertedValue.innerHTML = new Intl.NumberFormat('de-DE', {
            maximumSignificantDigits: 2
        }).format(valueToBeConverted / bitcoinValue)
    }
}

const changeTheCurrency = () => {

    const currencyInFuçç = document.getElementById('currencyInFull')
    const flag = document.getElementById('flag')
    const convertedValue = document.getElementById('convertedValue')
    const informedValue = document.getElementById('informedValue')

    informedValue.innerHTML = new Intl.NumberFormat('pt-Br', {
        style: 'currency',
        currency: 'BRL'
    }).format(0)

    if (select.value === 'US$ Dolar Americano') {
        currencyInFuçç.innerHTML = 'US$ Dolar Americano'
        flag.src = "./assets/USA.svg"
        convertedValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(0)
    }
    if (select.value === '€ Euro') {
        currencyInFuçç.innerHTML = 'Euro'
        flag.src = "./assets/EURO.svg"
        convertedValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(0)
    }
    if (select.value === '₿ Bitcoin') {
        currencyInFuçç.innerHTML = 'Bitcoin'
        flag.src = "./assets/BITCOIN.svg"
        convertedValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(0)
    }
}

button.addEventListener('click', convertCurrency)
select.addEventListener('change', changeTheCurrency)
input.addEventListener('keyup', inputmask)