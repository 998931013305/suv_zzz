function yaratDiv(){
    var div=document.createElement('div');
    var form1=document.getElementById('form1');
    var h1=document.createElement('h1');
    var h2=document.createElement('h2');
    var inp1=document.getElementById('inp1');

    btn1=innerText="EDIT"

    h1.style.width="80px";
    h1.style.height="50px";
    h1.style.backgroundColor="gold";
    h1.style.marginLeft="55%";

    h2.style.width="80px";
    h2.style.height="50px";
    h2.style.backgroundColor="gold";
    h2.style.marginLeft="1px";
    h2.style.positionap="absolute";
    h2.style.marginBottom="10px";


    div.style.width="100%";
    div.style.height="8vh";
    div.style.backgroundColor="red";
    div.style.marginTop="10px";
    div.style.borderRadius="15px";

    div.appendChild(h1);
    div.appendChild(h2);

    console.log(div);
    form1.appendChild(div);    
}