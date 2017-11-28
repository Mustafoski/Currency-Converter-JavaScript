    


    var currencies =['USD','AUD','BGN','BRL','CAD','CHF','CNY','CZK','DKK','GBP','HKD','HRK','HUF','IDR','ILS','INR','JPY','KRW','MXN','MYR','NOK','NZD','PHP','PLN','RON','RUB','SEK','SGD','THB','TRY','EUR'];

    var cur = document.getElementById('CurrencyList');
    var fragment = document.createDocumentFragment();
    currencies.forEach(function(currency, index){
        var opt = document.createElement('option');
        opt.innerHTML = currency;
        opt.value = currency;
        fragment.appendChild(opt);

    });

    cur.appendChild(fragment);

    var cur2 = document.getElementById('CurrencyList2');
    var fragment = document.createDocumentFragment();
    currencies.forEach(function(currency, index){
        var opt = document.createElement('option');
        opt.innerHTML = currency;
        opt.value = currency;
        fragment.appendChild(opt);

    });

    cur2.appendChild(fragment);
    console.log(typeof(cur));
    console.log(fragment);
    console.log(cur2);


function convertCurrency(){
    
    var from = document.getElementById("CurrencyList").value;
    var to = document.getElementById("CurrencyList2").value;
    console.log(to);
    console.log(from);
    var xmlhttp = new XMLHttpRequest();
    var url = 'http://api.fixer.io/latest?base=ZAR&symbols=' + from + ',' + to;
    
    xmlhttp.open('GET',url,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var result = xmlhttp.responseText;
            console.log(result);
            var jsResult = JSON.parse(result);
            if(jsResult.rates[to] !== NaN || undefined){
                
                console.log(jsResult.rates[to]);
            }else{
               return jsResult.rates[to] = 1;
            }
            if(jsResult.rates[from] !== NaN || undefined){
                
                console.log(jsResult.rates[from]);
            }else{
              return jsResult.rates[from] = 1;
            }
            console.log(jsResult);
            var oneUnit = jsResult.rates[to]/ jsResult.rates[from];
            
            var amt = document.getElementById("fromAmount").value;
            document.getElementById("toAmount").value = (oneUnit * amt).toFixed(2);
            console.log(amt);
            console.log(oneUnit);
            console.log(jsResult);
        }
    }
}
