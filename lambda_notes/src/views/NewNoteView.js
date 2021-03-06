import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, getNotes } from '../actions';

import NewNote from '../components/Notes/NewNote';

class NewNoteView extends Component {
  state = {
    title: '',
    textBody: ''
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addNote = e => {
    e.preventDefault();
    const { title, textBody } = this.state;
    this.props.addNote({ title, textBody });
    this.setState({ title: '', textBody: '' });
    this.props.getNotes();
    this.props.history.push('/');
  }

  render() {
    return (
      <NewNote addNote={this.addNote} handleInput={this.handleInput} title={this.state.title} textBody={this.state.textBody} />
    );
  }
}

const mapStateToProps = state => {
  return {
    gettingNotes: state.gettingNotes
  }
}

export default connect(mapStateToProps, { addNote, getNotes })(NewNoteView);