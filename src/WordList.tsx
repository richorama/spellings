import React from 'react'
import Word from './Word'

interface IProps {
  words: string[]
}

class WordList extends React.Component<IProps> {
  render() {
    return (<table className="ui table">
      <tbody>
        {this.props.words.map((x, i) => <Word key={x} word={x} index={i} />)}
      </tbody>
    </table>)
  }
}

export default WordList