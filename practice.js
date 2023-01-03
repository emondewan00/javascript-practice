document.getElementById("inputFiled").addEventListener('input',()=>{myFunction("input")});

 function myFunction(id){
    const b =document.getElementById("inputFiled").value;
   if(id=="input"){
    console.log(b)
   }
   else if(id=="btn"){
    const c=b.slice(0,-1);
    const d=document.getElementById("inputFiled").value=c;
   }

}

const a=document.getElementById("btn");
a.addEventListener('click',()=>{myFunction("btn")})

// const person ={name:'Emon',sex:'male',age:19};

// for (let x in person){
//     console.log(x)
// }


// for(let x in person){
//     console.log(person[x]);
// }


// console.log(string.constructor);
const string="my name is emon i am a student";
const myString="i want to be a programmer";

 const conArray=string.split(" "); 
 console.log(conArray);
 console.log(conArray.join(" "));
//  console.log(conArray.constructor);
// const conArray2=myString.split(" ");

// const consol=conArray.concat(conArray2);
// console.log(consol);
// const c= string.concat(myString);
// console.log(c);

// for(const x in string){
//     console.log("for in loop:",x);
// }

// for (const x of string){
//     if(x==22){break};
//     console.log('for of loop:',x);
// }
// let x = 0;
// while(x<string.length){
//     if( x == 20){break};
//     console.log("while loop:",x);
//     x++;
// }
// for (let i =0;i<string.length;i++){
//     if(i==15){continue};
//     console.log("for loop:",i);
// }


// const conArray=string.split(" ");
// // console.log(conArray);
// const sort =conArray.sort();
// console.log(sort);


// for(let x of conArray){
//     console.log(x);
// }


// let i=0;
// while(i<string.length){
//     console.log(string[i]);
//     i++;
// }


// Mon-7am
//Tus-Thurs-4am
//Fri-9am
//sat-sun-8am

// const num =prompt("Enter a number");

// switch(num){
//     case "1":
//         console.log("hallo")
//         console.log("user enter number 1");
//     break;
//     case "2":
//         console.log("user enter number 2");
//     break;
//     default:
//         prompt("enter numebr betwin 1 and 2")    
// }


// for(let i=0;i<string.length;i++){
//     if(i==5){break};
//     console.log(i)
// }
// let i=0;
// while(i<string.length){
//     if(i==15){break};
//     console.log(i);
//     i++;
// };




// setObject 

// const sets =new Set(['a','b','c','d']); 
// sets.add(5);
// for(const x of sets){
//     console.log(x);
// }
// console.log(sets);


// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// console.log(fruits);
// fruits.forEach((key,value)=>{console.log("key :"+value,"value :" + key)})

// const map = new Map();
// map.set("hallo",500);
// map.set("kire",200)
// // map.delete("kire");
// console.log(map.has("kire"));
// console.log(map);


// for (let x of map){
//     console.log(x);
// }
// console.log("hallo");




// set object 

// const set =new Set(['a','b','c','d']);
// set.add('e');
// set.delete('c');
// console.log(set.has("d"));
// console.log(set.keys("e"));
// console.log(set);


// set.forEach((a,b,c)=>{console.log(a,b)});
// for (const x of set){
//   console.log(x);
// }


// const map=new Map([
//   ['apples',100],
//   ['mango',100],
//   ['oreng',100]
// ]);
// map.set("apples",200);
// map.delete("oreng");
// console.log(map.get("mango" , "get mathod"));

// map.forEach((a,b)=>{console.log( "value :"+a,"keys :"+b)});

// console.log(map)


// for (const x of map){
//   console.log(x)
// }



const x="hallo";
try{
   if(x=="")throw " x is empty";
   if(isNaN(x)) throw { 
      message:"its not a number self create error",
      name:"NaN"
};
   if( x <5 )throw " x is more then 5 or 5 ";
   if ( x>12) throw " x is more then 12";
}catch(error){
   console.log(error.message, error.name)
}
