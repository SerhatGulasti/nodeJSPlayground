const yargs = require('yargs')
const fs = require('fs')
const chalk = require('chalk')
const notes = require('./notes')
const log = console.log

// Customize yargs version
yargs.version('1.5.0')


// Create add command
// yargs.command fonksiyonu argüman olarak alınabilecek yeni bir fonksiyonun yaratılmasını sağlar.
yargs.command({
    // argümanda kullanılacak komut.
    command: 'add',
    // --help yazıldığında yazılacak açıklama
    describe: 'Add a new note',
    // argümanın alacağı ek argüman bilgileri
    builder:{
        // argümanın yanında "--" kullanılarak alınabilen komut.
        // argüman ile beraber gelecek diğer parametreler bu şekilde tanımlanır.
        title: 
        {
            // --help yazıldığında gelecek açıklama
            describe: 'Note title',
            // argüman girişi zorunlu mu. true ise zorunlu, false ise değil.
            demandOption: true,
            // argüman ile beraber girilecek dönüştürülecek verinin veri tipi.
            type: 'string',
        },
        body:
        {
            describe: 'Note itself',
            demandOption: true,
            type: 'string',
        }
    },
    // argüman girildikten sonra veriler ile beraber yapılacak olan işlemler. 
    // argv verisi fonksiyona import edilmezse argüman ile beraber girilen verilerin bir anlamı olmayacaktır.
    handler: (argv) =>
    {
        notes.addNote(argv.title, argv.body)
    },
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:
        {
            describe: "Note title",
            demandOption: true,
            type: 'string,'
        }
    },
    handler: (argv) =>
    {
        // notes.removeNote(argv.title)
        // log("The command titled ", argv.title, " has deleted.")
        notes.removeNote(argv.title)
    },
})

// Create read notes
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () =>
    {
        log('Read a note')
    },
})

// List notes
yargs.command({
    command: 'list',
    describe: 'Lists notes',
    handler: () =>
    {
        log('Listing notes')
    },
})



// bu fonksiyon yazılmaz ise argümanlar çalışmaz.
yargs.parse()
//log(yargs.argv)