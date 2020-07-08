const fs=require('fs');



var fetchNotes= function(){
    try {
        var noteString=fs.readFileSync('notes-data.json');
        var fix=JSON.parse(noteString);
        return fix;
    } catch (error) {
        return [];
    }
};
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
} 
var addNote =(title,body) => {
    var notes=fetchNotes();
    var note={
        title:title,
        body:body
    }
    
    var duplicate=notes.find((note) => note.title===title) 
    if(!duplicate){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}
var removeNote=(title) => {
    var notes=fetchNotes();
    var finalNotes=notes.filter((note) => note.title!==title)
    saveNotes(finalNotes);
    return notes.length!==finalNotes.length;
}
var getNote=(title) => {
    var notes=fetchNotes();
    var findNote=notes.find((note) => note.title===title)
    console.log(findNote)
    return findNote;
}
var getAll = () => fetchNotes();

module.exports={
    addNote:addNote,
    removeNote:removeNote,
    getNote:getNote,
    getAll:getAll
}