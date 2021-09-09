var input = document.getElementById("input");
var result = document.getElementById("result");

var USDinput = document.getElementById("usdtop");
var CADinput = document.getElementById("cadtop");
var EURinput = document.getElementById("eurtop");
var YENinput = document.getElementById("yentop");

var USDbottom = document.getElementById("usd");
var CADbottom = document.getElementById("cad");
var EURbottom = document.getElementById("eur");
var YENbottom = document.getElementById("yen");

var button = document.getElementById("convert")

var currencyPick = null;
var currencyConvert = null;



USDinput.addEventListener("click", function(){
    USDinput.style.backgroundColor = '#046daa';
    USDinput.style.borderRadius = '8px';
    USDinput.style.padding = '1px';

    CADinput.style.backgroundColor = '#0093E9';
    EURinput.style.backgroundColor = '#0093E9';
    YENinput.style.backgroundColor = '#0093E9';

    currencyPick = 1;

})

CADinput.addEventListener("click", function(){
    CADinput.style.backgroundColor = '#046daa';
    CADinput.style.borderRadius = '8px';
    CADinput.style.padding = '1px';

    USDinput.style.backgroundColor = '#0093E9';
    EURinput.style.backgroundColor = '#0093E9';
    YENinput.style.backgroundColor = '#0093E9';

    currencyPick = 2;

})


EURinput.addEventListener("click", function(){
    EURinput.style.backgroundColor = '#046daa';
    EURinput.style.borderRadius = '8px';
    EURinput.style.padding = '1px';

    USDinput.style.backgroundColor = '#0093E9';
    CADinput.style.backgroundColor = '#0093E9';
    YENinput.style.backgroundColor = '#0093E9';

    currencyPick = 3;
})

YENinput.addEventListener("click", function(){
    YENinput.style.backgroundColor = '#046daa';
    YENinput.style.borderRadius = '8px';
    YENinput.style.padding = '1px';

    USDinput.style.backgroundColor = '#0093E9';
    EURinput.style.backgroundColor = '#0093E9';
    CADinput.style.backgroundColor = '#0093E9';
    
    currencyPick = 4;
})


USDbottom.addEventListener("click", function(){
    USDbottom.style.backgroundColor = '#046daa';
    USDbottom.style.borderRadius = '8px';
    USDbottom.style.padding = '1px';
    USDbottom.style.color = 'white';

    CADbottom.style.backgroundColor = 'white';
    EURbottom.style.backgroundColor = 'white';
    YENbottom.style.backgroundColor = 'white';

    CADbottom.style.color = '#48a1fa';
    EURbottom.style.color = '#48a1fa';
    YENbottom.style.color = '#48a1fa';

    currencyConvert = 1;
})

CADbottom.addEventListener("click", function(){
    CADbottom.style.backgroundColor = '#046daa';
    CADbottom.style.borderRadius = '8px';
    CADbottom.style.padding = '1px';
    CADbottom.style.color = 'white';

    USDbottom.style.backgroundColor = 'white';
    EURbottom.style.backgroundColor = 'white';
    YENbottom.style.backgroundColor = 'white';

    USDbottom.style.color = '#48a1fa';
    EURbottom.style.color = '#48a1fa';
    YENbottom.style.color = '#48a1fa';

    currencyConvert = 2;
})


EURbottom.addEventListener("click", function(){
    EURbottom.style.backgroundColor = '#046daa';
    EURbottom.style.borderRadius = '8px';
    EURbottom.style.padding = '1px';
    EURbottom.style.color = 'white';

    USDbottom.style.backgroundColor = 'white';
    CADbottom.style.backgroundColor = 'white';
    YENbottom.style.backgroundColor = 'white';

    USDbottom.style.color = '#48a1fa';
    CADbottom.style.color = '#48a1fa';
    YENbottom.style.color = '#48a1fa';

    currencyConvert = 3;
})

YENbottom.addEventListener("click", function(){
    YENbottom.style.backgroundColor = '#046daa';
    YENbottom.style.borderRadius = '8px';
    YENbottom.style.padding = '1px';
    YENbottom.style.color = 'white';

    USDbottom.style.backgroundColor = 'white';
    CADbottom.style.backgroundColor = 'white';
    EURbottom.style.backgroundColor = 'white';

    USDbottom.style.color = '#48a1fa';
    CADbottom.style.color = '#48a1fa';
    EURbottom.style.color = '#48a1fa';

    currencyConvert = 4;
})


button.addEventListener("click", function(){
    var numberInput = parseInt(input.value, 10);

    if(currencyPick == currencyConvert){
        result.innerText = numberInput;
    } else if(currencyPick == 1 && currencyConvert == 2){
        result.innerText = numberInput * 1.27;
    } else if (currencyPick == 1 && currencyConvert == 3){
        result.innerText = numberInput * 0.85;
    } else if (currencyPick == 1 && currenceyConvert == 4){
        result.innerText = numberInput * 110.19;
    }

    if(currencyPick == 2 && currencyConvert == 1){
        result.innerText = (numberInput * 0.79).toFixed(2);
    } else if(currencyPick == 2 && currencyConvert == 3){
        result.innerText = (numberInput * 0.67).toFixed(2);
    } else if (currencyPick == 2 && currencyConvert == 4){
        result.innerText = (numberInput * 86.72).toFixed(2);
    }

    if(currencyPick == 3 && currencyConvert == 1){
        result.innerText = (numberInput * 1.18).toFixed(2);
    } else if(currencyPick == 3 && currencyConvert == 2){
        result.innerText = (numberInput * 1.50).toFixed(2);
    } else if (currencyPick == 3 && currencyConvert == 4){
        result.innerText = (numberInput * 129.74).toFixed(2);
    }

    if(currencyPick == 4 && currencyConvert == 1){
        result.innerText = (numberInput * 0.0091).toFixed(2);
    } else if(currencyPick == 4 && currencyConvert == 2){
        result.innerText = (numberInput * 0.012).toFixed(2);
    } else if (currencyPick == 4 && currencyConvert == 3){
        result.innerText = (numberInput * 0.0077).toFixed(2);
    }

})





