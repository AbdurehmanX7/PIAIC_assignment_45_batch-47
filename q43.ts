const magicians_names:string[]=['magician1', 'magician2','magician3']
function show_magicians(magicians_name:string[]){
    for(let i=0; i< magicians_names.length; i++){
console.log(magicians_name[i])
    }
}
function make_great(magicians_name:string[]){
let make_great_array:string[]=[]
for(let i=0; i<magicians_name.length; i++){
    make_great_array.push( `welcome ${magicians_name[i]}`)
    console.log(make_great_array[i])
}

}
show_magicians(magicians_names)
make_great(magicians_names)
show_magicians(magicians_names)
export {}