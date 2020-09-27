import React from 'react';
import AddWord from './AddWord';
import WordList from './WordList';

interface IState {
  words: string[]
}

class App extends React.Component<{}, IState> {
  state: IState = {
    words: []
  }

  handleAddWord = (word: string) => {
    this.setState({ words: [...this.state.words, word] })
  }

  render() {
    return <div style={{ marginTop: 40, marginLeft: 40, marginRight: 40}}>
      <h1>Awesome spelling app</h1>
      <AddWord onWord={this.handleAddWord} />
      <WordList words={this.state.words} />
    </div>
  }
}

export default App;
