//Initializing value of count

let count = 0;

const values = document.querySelector("#value");
const btns = document.querySelectorAll(".btns");
// console.log(btns);
btns.forEach(function(item){
    // console.log(item);
    item.addEventListener("click", (press)=>{
        const select = press.currentTarget.classList;
        // console.log(select);
        if(select.contains("Decrease")){
            // console.log('happy click')
            count--;
        }else if(select.contains("Increase")){
            count++;
        }else{
            count = 0;
        }
        if(count < 0){
            values.style.color = "red";
        }
        if(count > 0){
            values.style.color = "green";
        }
        if(count == 0){
            values.style.color = "black";
        }
        values.textContent=count;
    })
});