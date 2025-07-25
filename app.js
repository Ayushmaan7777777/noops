let arr =[];
let arr2 =[];
let btn = ['a','b','c','d','e','f','g','h'];
let start = false;
let level =0;
let scorr = 0;
let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(start == false){
        start = true;
        levelup();
    };
}
);
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}
function levelup(){
    arr2 = [];
    level++;
    h2.innerText = `level ${level}`;
    let randm = Math.floor(Math.random() * 8);
    arr.push(btn[randm]);
    let randombtn = document.querySelector(`.${btn[randm]}`);
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
        setTimeout(function(){
          let btn = document.querySelector(`.${arr[i]}`);
          btnflash(btn);
        }, 1000 * (i + 1));
    }
}
function btoa(){
     let indx= arr2.length - 1;
    if (arr2[indx] == arr[indx]){
        console.log("correct");
        if (arr.length == arr2.length){
            setTimeout(levelup, 1000);
        }
    } else {
        console.log("wrong");
        h2.innerHTML = `Game Over!! your score is <b>${level}</b>`;
        if(scorr < level){
            scorr = level;
        }
        h3.innerHTML = `highest score is <b>${scorr}</b>`;
        start = false;
        level = 0;
        arr = [];
        arr2 = [];
    }
}
function check(){
    if (!start) return; // Do nothing if game hasn't started
    let btn = this;
    userflash(btn);
    userbtn = btn.classList[1];
    arr2.push(userbtn);
    console.log(arr2);
  

   btoa();
}
let allbtns = document.querySelectorAll(".btn");
for (abtn of allbtns){
    abtn.addEventListener("click", check);
}
