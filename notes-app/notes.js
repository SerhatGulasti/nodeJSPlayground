const fs = require('fs')
const chalk = require('chalk')
const log = console.log

const getNotes = function()
{
    return "This output created by notes.js"
}

const addNote = (title, body) =>
{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {return note.title === title})

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

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => {return note.title !== title})
    if(notes.length === notesToKeep.length)
    {
        log(chalk.black.bgRed("No note found!"))
    }
    else
    {
        log(chalk.black.bgGreen("Note removed!"))
        saveNotes(notesToKeep)
    }
    
}

const loadNotes = () =>
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