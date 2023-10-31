let guests=["Umer","Ayesha","Usman"]
for(let e=0; e<=2; e++){
    console.log(`Hello ${guests[e]}, you are invited to dinner.`);
};
console.log("Usman won't be able to make it to the dinner");
 guests.splice(2,1,"Ali");

console.log("New guest list is:",guests);

for(let e=0; e<=2; e++){
    console.log(`Hello ${guests[e]}, you are invited to dinner.`);
};

console.log("I just found a bigger dinner table");
guests.unshift("Akif");
guests.splice(2,0,"Zahid");
for(let e=0; e<=4; e++){
    console.log(`Hello ${guests[e]}, you are invited to dinner.`);
};









export{};