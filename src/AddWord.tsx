import React from 'react'

interface IProps {
  onWord: (value: string) => void;
}

interface IState {
  value: string
}

class AddWord extends React.Component<IProps, IState> {
  state: IState = {
    value: ''
  }

  handleSubmit = (e:any) => {
    e.preventDefault()
    this.props.onWord(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    return <>
      <form onSubmit={this.handleSubmit}>
        <div className="ui large input">
          <input type="text" placeholder="Enter a word"
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })} />
        </div>{' '}
        <button className="ui large button primary" type="submit" disabled={!this.state.value}>Add</button>
      </form>
    </>
  }
}

export default AddWord