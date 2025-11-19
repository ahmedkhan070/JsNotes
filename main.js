// This is a program that will manage notes
// Architecture :
// Two classes : Notes and NotesManger
// Notes Manager will manage list of notes initialy an array
// Notes will be blueprint of the notes
// Notes will be managed in an array

// const numberOfNotes = 0;

class Note {
    // declare properties
    noteName;
    lines= [];
    constructor(name) {
        this.noteName = name;
        this.lines = ["1.Your personal notebook", "2.Add notes here"];
    }

    // methods
    addLine(lineText, lineNumber) {
        lineText = lineText.toString();
        this.lines[lineNumber - 1] = lineNumber + "." + lineText;
    }

    deleteLine(lineNumber) {
        this.lines[lineNumber - 1] = "";
    }

    displayLines() {
        console.log("=============");
        console.log(this.noteName);
        console.log("=============");
        for (let line of this.lines) {
            console.log(line);
        }
    }
}

const gymNotes = new Note("Gym Notes");
gymNotes.addLine("Go to gym", 3);
gymNotes.displayLines();





// class NotesManger{
    
//     const notes = []; // add notes object here
    
//     NotesManger() {}
        
//     addNewNote(name){
//         Notes newNote = new Notes(name);
//         this.notes[numberOfNotes]= newNote ;
//     }
//     deleteNote(name){
//         for (let i=0; i<this.notes.length ; i++){
//             if (name == this.notes[i].name){
//                 this.note[i].pop();
//             }
//         }
//     }
// }



