console.table(rates);


function renderExchange (newRates){
    let htmlStr =  newRates.reduce(function(htmlStr, exchange, index){
        return htmlStr + `<tr>
        <td>${index+1}</td>
        <td>${exchange.name}</td>
        <td>${exchange.rate}</td>
        <td>${exchange.code}</td>
    </tr>`;
    }, '');
    document.querySelector('.exchange tbody').innerHTML = htmlStr;
}
 
function prepareRates(rates){
    return rates.map(function(el){
        return {
            name: el.txt,
            rate: el.rate.toFixed(4),
            code: el.cc
        }
    })
}
let newRates = prepareRates(rates);
console.table(newRates);

renderExchange(newRates);