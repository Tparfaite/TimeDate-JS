const body=document.querySelector(".body");
const container=document.getElementById("container");
const todate=document.getElementById("todate");

const years=new Date();
console.log(years.toUTCString());

const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
const month=months[years.getMonth()];

const days=["Sunday","Monday","Tuesday","Wensday","Thursday","Friday","Saturday"];
const day=days[years.getDay()];

const date=years.getDate();
const year=years.getFullYear();

const hour=years.getHours();
const minute=years.getMinutes();
const second=years.getSeconds();

container.textContent=`${hour}:${minute}:${second}`;
todate.textContent=`${day},${month} ${date},${year}`;


const today=()=>{
setTimeout(()=>{
    today()
},1000);
container.textContent=`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;

if(second <9) {
    second= "0" +second;
}
}
today();