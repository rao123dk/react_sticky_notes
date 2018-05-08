import React, {Component} from 'react';
import Note from './notes';

class Board extends Component{
    constructor(props){
        super(props)
        this.state ={
            notes :[
                {
                    'id' : 0,
                    'note' : 'Meetings at 4PM'
                },
                {
                    'id' : 1,
                    'note' : 'BLTYPER automation'
                }, {
                    'id' : 2,
                    'note' : 'Nodejs API integration'
                }
            ]
        }
        this.eachNote = this.eachNote.bind(this);
        this.updateNote = this.updateNote.bind(this);
    }
    updateNote(newText, i){
        console.log('updating',i, newText);
        this.setState(prevState => ({
            notes : prevState.notes.map(
                note => ( note.id !== i) ? note : {...note, note : newText}
            )
        }))
    }
    eachNote(note, i){
        return(
            <Note onChange={this.updateNote} key={i} index={i}> {note.note}</Note>
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