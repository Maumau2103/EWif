let all=0;
var previous_ec=0;
function calculate_ec (){
    const x = document.getElementById('pflegepaket').value;
    const y= (x*10);
    document.getElementById('price_ec').innerHTML=y +".00€";
    if(x>previous_ec){
        all+=(x-previous_ec) *10;
    } else{
        all-=(previous_ec-x) *10;
    }
    previous_ec=x;
    gesamtprice(y);
}
var previous_kc=0;
function calculate_kc (){
    const x = document.getElementById('bleibruhig').value;
    const y= (x*20);
    document.getElementById('price_kc').innerHTML=y +".00€";
    if(x>previous_kc){
        all+=(x-previous_kc) *20;
    } else{
        all-=(previous_kc-x) *20;
    }
    previous_kc=x;
    gesamtprice(y);
}
var previous_ps=0;
function calculate_ps (){
    const x = document.getElementById('pflanzentausch').value;
    const y= (x*30);
    document.getElementById('price_ps').innerHTML=y+".00€";
    if(x>previous_ps){
        all+=(x-previous_ps) *30;
    } else{
        all-=(previous_ps-x) *30;
    }
    previous_ps=x;
    gesamtprice(y);
}
var previous_psp=0;
function calculate_psp (){
    const x = document.getElementById('pflanzentauschPremium').value;
    const y= (x*40);
    document.getElementById('price_psp').innerHTML=y +".00€";
    if(x>previous_psp){
        all+=(x-previous_psp) *40;
    } else{
        all-=(previous_psp-x) *40;
    }
    previous_psp=x;
    gesamtprice(y);
}
function gesamtprice(y){
    document.getElementById('gesamt').innerHTML=(all)+".00€";
}