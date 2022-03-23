const fs = require('fs')
const chalk = require('chalk')

const readNote = (title) => {
    const notes = loadNotes()
    const note =  notes.find( (note) => note.title === title)
    console.log(note)
    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)

    }
    else {
        console.log(chalk.red.inverse('No note found'))
    }
}


const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title) // will return a single object if there is a match else undefined 
    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    }

    else {
        console.log(chalk.red.inverse('Title already exists'))
    }
    

}

const removeNote = (title)=> {
    const notes = loadNotes()
    const filteredNotes = notes.filter( (note) => note.title!== title) // if title doesn't match with the notes
    if(filteredNotes.length === notes.length) {
        console.log(chalk.red.inverse('No note found!'))
    }
    else {
        saveNotes(filteredNotes)
        console.log(chalk.green.inverse('Note removed!'))
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes"))
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const loadNotes =() => {
    try {
        const dataBuferr = fs.readFileSync('notes.json')
        const dataJSON = dataBuferr.toString();
        return JSON.parse(dataJSON)     
    }
    catch (e) {
        return []
    }
   
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports.addNote = addNote
module.exports.removeNote = removeNote
module.exports.listNotes = listNotes
module.exports.readNote = readNote