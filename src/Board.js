import React, {Component} from 'react';
import Note from './notes';

class Board extends Component{
    constructor(props){
        super(props)
        this.state ={
            notes :[
                {
                    'id' : 22,
                    'note' : 'Meetings at 4PM'
                },
                {
                    'id' : 23,
                    'note' : 'BLTYPER automation'
                }, {
                    'id' : 24,
                    'note' : 'Nodejs API integration'
                }
            ]
        }
        this.eachNote = this.eachNote.bind(this);
    }

    eachNote(note, i){
        return(
            <Note key={i} index={i}> {note.note}</Note>
        )
    }
    render(){
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }
}

export default Board;