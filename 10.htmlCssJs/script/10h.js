function handleCostKeyDown(event){
    console.log(event.key);
    if (event.key==='Enter'){
        calculate();
    }
}
        
function calculate(){
    const inputElement= document.querySelector('.js-cost-input');
    let cost =Number(inputElement.value);
    if(cost<0){
        document.querySelector('.jsTotalCost').innerHTML=`Error: cost cannot be less than $0`;
    }
    else if(cost>=0&&cost<40){
        cost=cost+10;
        document.querySelector('.jsTotalCost').innerHTML=`$${cost.toFixed(2)}`;
    }
    else{
        cost=cost;
        document.querySelector('.jsTotalCost').innerHTML=`$${cost.toFixed(2)}`;
    }
        
}



function subscribe(){
    const buttonElement = document.querySelector('.jsb');

    if (buttonElement.innerText==='subscribe'){
        buttonElement.innerText='subscribed';
        buttonElement.classList.add('jsbd');
    }
    else{
        buttonElement.innerText='subscribe';
        buttonElement.classList.remove('jsbd');
    }
}