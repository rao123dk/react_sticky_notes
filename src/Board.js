import React, {Component} from 'react';
import Note from './notes';
import FaPlus from 'react-icons/lib/fa/plus'

class Board extends Component{
    constructor(props){
        super(props)
        this.state ={
            notes :[

            ]
        }
        this.eachNote = this.eachNote.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.addNote = this.addNote.bind(this);
        this.nextId = this.nextId.bind(this);
        this.todayDate = this.todayDate.bind(this);
    }

    componentDidUpdate(){
        var self = this;
        if(this.props.count){

        }
    }
    componentWillMount(){
        //getting data from local storage
    }
    addNote(text){
       // var new_text_obj = { 'id' : this.state.notes.length+1, 'note' : text }
        // this.setState(notes : {... this.state.notes, new_text_obj})
        this.setState(prevState => ({
            notes : [
                ...prevState.notes, {
                    'id' : this.nextId(),
                    'note' : text,
                    'date' : this.todayDate()
                }
            ]
        }))
    }

    nextId(){
        this.uiqueId = this.uiqueId || 1;
        return this.uiqueId++;
    }
    todayDate(){
        var d = new Date();
        return d.getDate() + '/' + d.getMonth()+1 + '/' + d.getFullYear();
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
            <Note onChange={this.updateNote}
                    onRemove={this.removeNote}
                    key={note.id}
                    index={note.id}>
                    {note.note}
                <span> {note.date}</span>
            </Note>
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