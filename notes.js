const fs = require('fs')
const log = console.log
const getNotes = function()
{
    return "This output created by notes.js"
}

const addNote = function(title, body)
{
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        log("New note added!")
    }
    else{
        log('Note title taken!')
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })
    saveNotes(notesToKeep)
    
}

const loadNotes = function()
{
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
    
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    loadNotes: loadNotes,
}