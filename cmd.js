const yargs = require("yargs");
const fs = require("fs");
const chalk = require("chalk");

yargs.command({
    command: 'list', 
    describe : 'Liste des notes',
    handler: () => {
        console.log("Voici la liste des notes :");

        fs.readFile("data.json", "utf-8", (err,data) => {
            if(err) console.log(err);
            else {
                const notes = JSON.parse(data);
                notes.forEach(note => {
                    console.log(`${note.title}`);
                })
            }
        })
    }
}).command({
    command: 'add', 
    describe : 'Ajout de note',
    builder: {
        title: {
            describe: "Titre de ma note",
            demandOption: true,
            type: "string"
        },
        message: {
            describe: "Message de ma note",
            demandOption: false,
            type: "string"
        },
        id: {
            describe: "Numéro de la note",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        fs.readFile("data.json", "utf-8", (err, data) => {
            if(err) console.log(err);
            else {
                const notes = JSON.parse(data);
                const newNote = {
                    id: argv.id,
                    title: argv.title,
                    message: argv.message
                }
                if(newNote.id === notes.id){
                    console.log(chalk.red("Id existant"));
                } else {
                    notes.push(newNote);
                    
                }
                const notesJSON = JSON.stringify(notes);
                fs.writeFile("data.json", notesJSON, (err) => {
                    if(err) console.log(err);
                    else {
                        console.log(chalk.yellowBright("Nouvelle note sauvegardée"));
                    }
                })
            }
        })        
    }
    
}).command({
    command: 'remove', 
    describe : ' Supprimer',
    handler: (argv) => {
        console.log("Supprimer une note");
        fs.readFile("data.json", "utf-8", (err,data) => {
            if (err) console.log(err)
            else{
                const notes = JSON.parse(data);
                // console.log(notes);
                const supNote = {
                    title: argv.title,
                }
                notes.pop(supNote); /*<-Retire le dernier élément du tableau*/
                // console.log(notes);
                const notesJSON = JSON.stringify(notes);
                // console.log(notesJSON);
                fs.writeFile("data.json", notesJSON, (err) => {
                    if(err) console.log(err);
                    else {
                        console.log(chalk.redBright("Note supprimée"));
                    }
                })
            }
        })
    }
}).command({
    command: 'read', 
    describe : 'Lire',
    handler: (argv) => {
        console.log("Détail de ma note");

        fs.readFile("data.json", "utf-8", (err, data) =>{
            if (err) console.log(err)
            else {
                // console.log(data);
                const notes = JSON.parse(data);
                console.log(notes);

                const searchNote = {
                    title : argv.title
                }
                
                if ( searchNote === notes.title){
                    console.log(`${notes.title}, ${notes.message}`);
                }
                else {
                    console.log(chalk.red("Note non trouvée"));
                }
            }
        })
    }
}).argv
