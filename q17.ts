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

console.log("I can only invite two guests!");
guests.pop();
console.log(guests);
console.log("Ali I'm sorry, I can't invite you to dinner");

guests.pop();
console.log(guests);
console.log("Ayesha I'm sorry, I can't invite you to dinner");

guests.pop();
console.log(guests);
console.log("Zahid I'm sorry, I can't invite you to dinner");

console.log(`${guests[0]}, you are still invited to the dinner `);
console.log(`${guests[1]}, you are still invited to the dinner `);

guests.splice(0,2);
console.log(guests);














export{};