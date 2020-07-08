const notes=require('./notes');
const yargs=require('yargs');
const fs=require('fs');
const chalk=require('chalk')

const argv=yargs
.command('add','add a new note',{
    title:{
        describe:'title of new note',
        demand:true,
        alias:'t',
        type:'string'
    },
    body:{
        describe:'body of new note',
        demand:true,
        alias:'b',
        type:'string'
    }
})
.command('remove','remove a note',{
    title:{
        describe:'title of note to be removed',
        demand:true,
        alias:'t',
        type:'string'
    }
})
.command('getnote','get the note',{
    title:{
        describe:'title of note to be accesed',
        demand:true,
        alias:'t',
        type:'string'
    }
})
.command('getall','get all the notes')
.help()
.argv;
var com=yargs.argv._[0];
debugger
if(com==='add'){
    var note=notes.addNote(argv.title,argv.body);
    if(note){
        console.log('note created');
        console.log(note.title+' '+note.body);
    }
    else{
        console.log('Title already taken choose another title');
    }
}
else if(com==='remove'){
    var message=notes.removeNote(argv.title);
    if(message===true){
        console.log(chalk.green.inverse('Note succesfully removed'))
    }
    else{
        console.log(chalk.red.inverse('No Note Found '))
    }
}
else if(com==='getnote'){
    var note=notes.getNote(argv.title);
    if(note){
        console.log('note found');
        console.log('--');
        console.log(note.title+' : '+note.body);
    }
    else{
        console.log('note not found');
    }
}
else if(com==='getall'){
    var allNotes=notes.getAll();
    console.log('printing all '+allNotes.length+' notes');
    allNotes.forEach(function(note) {
        console.log(note.title+' : '+note.body);
    });
}
else{
    console.log('inappropiate command');
}