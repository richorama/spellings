import React from 'react'
import Word from './Word'

interface IProps {
  words: string[]
  onDelete: (index: number) => void
}

class WordList extends React.Component<IProps> {
  render() {
    return (<table className="ui table">
      <tbody>
        {this.props.words.map((x, i) => <Word key={x} word={x} index={i} onDelete={this.props.onDelete.bind(null, i)} />)}
      </tbody>
    </table>)
  }
}

export default WordList