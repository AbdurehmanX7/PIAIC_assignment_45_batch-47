const magicians_names:string[] =['magician_1','magician_2','magician_3']
function show_magicians(magician:string[]){
    for(let i=0; i<magician.length;i++){
        console.log(magician[i])
    }
}

show_magicians(magicians_names);