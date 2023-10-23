document.addEventListener("DOMContentLoaded",function(){
    const calButton=document.getElementById('calButton');
    const tipPercertageIp=document.getElementById('tPercertageIp');
    const sTotalIp=document.getElementById('sTotalIp');
    const fullBillResult=document.getElementById('fullBillResult');
    calButton.addEventListener('click',function () {
        const subTotal=parseFloat(sTotalIp.value);
        const tipPercertage=parseFloat(tPercertageIp.value);
        if (!isNaN(subTotal) && !isNaN(tipPercertage)) {
            const tip =(subTotal*tipPercertage)/100;
            const totalAmount=subTotal+tip;
            fullBillResult.textContent='Total bill:$'+totalAmount;

        } else {

            fullBillResult.textContent='Invalid';
        }

    });
});