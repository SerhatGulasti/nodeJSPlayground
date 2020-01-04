const fs = require('fs')
const chalk = require('chalk')
const log = console.log

const addNote = (title, body) =>
{
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if(title.length >= 51){chalk.red(log("Title length cannot be longer than 50!"))}
    else{
        if(!duplicateNote){
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
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
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

const listNotes = (ext) =>
{
    const notes = loadNotes()
    log(chalk.inverse("YOUR NOTES"))
    log("---------")
    if(ext)
    {
        notes.forEach(note => {
            log(chalk.bold(note.title))
            if(note.body.length > 20)
            {
                log(chalk.keyword('orange')("->"), note.body.slice(0,20), "...")
            }
            else
            {
                log(chalk.keyword('orange')("-->"),note.body)
            }
            log("---------")
        })
    }
    else{
        notes.forEach(note => {
            log(note.title)
        });
    }
    
}

const readNotes = (title) => 
{
    const notes = loadNotes()
    const note = notes.find((note) => note.title.toLowerCase() === title.toLowerCase())
    if(note){
        log(chalk.inverse(note.title))
        log(note.body)
    }
    else
    {
        chalk.red.inverse(log("Note not found"))
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes,
}