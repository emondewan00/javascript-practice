function hallo (a=0,b=0){
    console.log(a+b);
}

hallo();



const declerSet=new Set (["b","c","d"]);
declerSet.add("f");
console.log(declerSet)


const mapagain= new Map ([
    
]);
console.log(mapagain)


class student {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

const tussar=new student("tussar",19);
console.log(tussar)
const emon=new student("Emon",19);
console.log(emon);



const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }


  for (let x in myObj.cars){
    const getName=myObj.cars[x].models;
    for(let y of getName){
        console.log(y);
    }
  }



  //Create a function which returns the number of true values there are in an array.

const felsey=[true, false, false, true, false];

function countTrue(arr){
  let result=0;
  const fil= arr.filter(Boolean).length;
  console.log(fil);
  return result;

}
countTrue(felsey)


function possibleBonus(a,b) {
	
  let hallo=undefined;
  const roun= Math.abs(a-b);
  if ((a===b) && (roun>=7) ){
     hallo=false;
  }
  else{
    hallo=true
  }
  return hallo;
}

console.log(possibleBonus(1,12));



function test (a,b){
  const roun= Math.abs(a-b);
  if (roun >=7){
    console.log("ami bor aro cohoto number de")
  }
  else{
    console.log("you are a good boy")
  }
  return roun ;
}

console.log(test(1,9));


function trnary(a,b) {
	
  let hallo=undefined;
  const roun= Math.abs(a-b);
  const check= roun >=7  ? (a===b)  : false;
  return check;
}

console.log(trnary(1,12));
