const fs = require('fs')
const chalk = require('chalk')


const addNotes = function (title, body){
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if(duplicateNote){ return console.log(chalk.red('Note title already exists'))}

    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
    console.log(chalk.green('Added new note!'))
}

const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)
    
    if(notes.length === notesToKeep.length){ return console.log(chalk.red('No note found'))}

    saveNotes(notesToKeep)

    console.log(chalk.green('Note removed!'))
}

const readNote = function(title){
    const notes = loadNotes()
    const noteToRead = notes.find(note => note.title === title)

    !noteToRead ? console.log(chalk.red('Note doesn\'t exist')) : console.log(chalk.blue.inverse(noteToRead.title) + '\n' + noteToRead.body)
}

const listNotes = function(){
    const notes = loadNotes()
    console.log(chalk.blue.inverse("Your Notes:"))
    notes.forEach(note => console.log('> ' + note.title))
}

const loadNotes = function (){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}