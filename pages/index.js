import React from 'react'
import axios from 'axios'
import Head from 'next/head'

class NoteWithdrawal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            usedNotes: [],
            error: null,
        };
    }
    
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }


    onOkButtonClick = (event) => {
    console.log(this.state.value)
    axios.post('/api/', {
        sum: this.state.value
    })
    .then((response) => {
        this.setState({usedNotes: response.data.usedNotes, error: null})
    })
    .catch((error) => {
        this.setState({usedNotes: [], error: error.response.data.error})
    });

      
    event.preventDefault();
  }

  render() {
    return(
        <React.Fragment>
            <Head>
                <link href="/static/index.css" rel="stylesheet" />
            </Head>
            <div className="form">
                <p>Please type amount:</p>
                <div>
                    <input type="number" value={this.state.value} onChange={this.handleChange} />
                </div>

                <button onClick={this.onOkButtonClick}>
                    OK
                </button>
                    {this.state.usedNotes && <p>Used Notes:</p>}
                    <div className="notes-container">
                        {this.state.usedNotes.map((note) => <div className="note">{note}</div>)}
                    </div>
                {
                    this.state.error && <div className="error"> {this.state.error}</div>
                }
            </div>
        </React.Fragment>
    )
  }
}

export default NoteWithdrawal