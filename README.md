Ecrire une application de notes en Node.js.
Les notes seront stockées dans un 
fichier data.json

node app.js
- `list` = Affiche les titres de toutes 
les notes
- `add --title="Ma note" -message="Contenu 
de ma note"` = Ajoute une note. 
Le titre doit être requis

- `remove --title="Ma note": Supprime 
la note qui a pour titre "Ma note"
- `read --title="Ma note"` = Affiche le titre
 et message de cette note en particulier

BONUS: gérer le remove et le read (le add 
aussi) avec les id.



add : 
// let lastNoteid;
                // if(notes.lenght === 0){
                //     lastNoteid = 0;
                // }
                // else {
                //     lastNoteid = notes[notes.length-1].id;
                // }
dans const newNote => id : lastNoteid +1,