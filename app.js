const chalk = require('chalk');
const yargs = require('yargs')
const { addNote, removeNote, listNotes, readNote } = require('./notes.js');

// customize yargs version
yargs.version('1.1.1')

// create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        addNote(argv.title, argv.body)
    }
})

// create remove commmand

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        removeNote(argv.title)
    }
})

// create list command

yargs.command({
    command: 'list',
    describe: 'list all the notes',
    handler() {
        listNotes()
    }
})

// create read command

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        }
    },

    handler(argv) {
        readNote(argv.title)
    }
})

yargs.parse()

