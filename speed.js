function detector(speed){
const speedlimit=70;
let demeritPoints=0;
speed=window.prompt("input speed:");
let target=(speed-speedlimit);

if (speed>speedlimit){
    demeritPoints=Math.ceil(target/5);
}
return demeritPoints;

}
console.log(detector(85));


if (demeritPoints>12){
    return "liscence depleted";
} else {
    return"ok";
} 
