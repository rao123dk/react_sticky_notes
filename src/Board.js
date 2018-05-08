import React, {Component} from 'react';
import Note from './notes';
import FaPlus from 'react-icons/lib/fa/plus'

class Board extends Component{
    constructor(props){
        super(props)
        this.state ={
            notes :[
                {
                    'id' : 0,
                    'note' : 'Meetings at 4PM'
                }
            ]
        }
        this.eachNote = this.eachNote.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.addNote = this.addNote.bind(this);
        this.nextId = this.nextId.bind(this);
    }
    addNote(text){
       // var new_text_obj = { 'id' : this.state.notes.length+1, 'note' : text }
        // this.setState(notes : {... this.state.notes, new_text_obj})
        this.setState(prevState => ({
            notes : [
                ...prevState.notes, {
                    'id' : this.nextId(),
                    'note' : text
                }
            ]
        }))
    }

    nextId(){
        this.uiqueId = this.uiqueId || 0;
        return this.uiqueId++;
    }
    updateNote(newText, i){
        console.log('updating',i, newText);
        this.setState(prevState => ({
            notes : prevState.notes.map(
                note => ( note.id !== i) ? note : {...note, note : newText}
            )
        }))
    }

    removeNote(id){
        console.log('removing',id);
        this.setState(prevState => ({
            notes : prevState.notes.filter(
                note => note.id !== id
            )
        }))
    }

    eachNote(note, i){
        return(
            <Note onChange={this.updateNote} onRemove={this.removeNote} key={i} index={i}> {note.note}</Note>
        )
    }
    render(){
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
                <button onClick={this.addNote.bind(null, 'New text...')} id="add"> <FaPlus /></button>
            </div>
        )
    }
}

export default Board;