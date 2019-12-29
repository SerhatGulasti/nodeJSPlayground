const fs = require('fs')
const log = console.log
const getNotes = function()
{
    return "This output created by notes.js"
}

const addNote = function(title, body)
{
    const notes = loadNotes()
    notes.push({
        title: title,
        body: body,
    })
    saveNotes(notes)

}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
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
}