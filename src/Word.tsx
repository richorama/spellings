import React from 'react'

interface IProps {
  word: string
  index: number
}

interface IState {
  value: string
  result: number
}

class Word extends React.Component<IProps, IState>{
  state: IState = {
    value: '',
    result: 0
  }

  handleSubmit = (e: any) => {
    e.preventDefault()
    if (this.state.value.toUpperCase() === this.props.word.toUpperCase()) {
      this.setState({
        result: 1,
        value: ''
      })
      return
    }
    this.setState({ result: -1, value: '' })
  }

  handleSay = () => {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(this.props.word))
  }

  renderResult = () => {
    switch (this.state.result) {
      case -1: return <label className="ui large label red"><i className="ui large icon times circle" /> TRY AGAIN</label>
      case 1: return <label className="ui large label green"><i className="ui large icon check circle" /> {this.props.word.toUpperCase()}</label>
      default: return <></>
    }
  }

  render() {
    return <tr key={this.props.word}>
      <td style={{ fontWeight: 'bold' }}>
        Word {this.props.index + 1}.
      </td>
      <td>
        <button onClick={this.handleSay} className="ui button">
          <i className="ui icon play"></i> Say
        </button>
      </td>
      <td>
        <form onSubmit={this.handleSubmit}>
          <div className="ui input">
            <input type="text" spellCheck={false} value={this.state.value} onChange={e => this.setState({ value: e.target.value })} />
          </div>{' '}
          <button type="submit" className="ui button primary">Spell</button>
        </form>
      </td>
      <td>
        {this.renderResult()}
      </td>
    </tr>
  }
}

export default Word
