

    function loadCurrencies(){
        var from = document.getElementById('from');
        var to   = document.getElementById('to');
        var xHttp = new XMLHttpRequest();
        xHttp.onreadystatechange=function(){
            if(xHttp.readyState == 4 && xHttp.status==200){
                var obj = JSON.parse(this.responseText);
                var options = '';
                for(key in obj.rates){
                    options=options+ '<option>'+key+'</option>';
                }
                options += "<option>EUR</option>";
                from.innerHTML = options;
                to.innerHTML = options;
                }
            }
    xHttp.open('GET','http://api.fixer.io/latest',true);
    xHttp.send();
        }



    function convertCurrency(){

        var from = document.getElementById("from").value;
        var to = document.getElementById("to").value;

        var xmlhttp = new XMLHttpRequest();
        var url = 'http://api.fixer.io/latest?base='+ from+ '&symbols='  + to;
        xmlhttp.open('GET',url,true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                var result = xmlhttp.responseText;



                var jsResult = JSON.parse(result);
                var amt = document.getElementById("fromAmount").value;
                document.getElementById("toAmount").value = (jsResult.rates[to] * amt).toFixed(2);


            }
        }
    }
