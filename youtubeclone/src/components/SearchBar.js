import React from 'react'

class SearchBar extends React.Component{

    // Initialize state
    state = {term: ''}

    // Event callback
    onInputChange = e => {
        this.setState(
            { term: e.target.value }
        )
    }

    onFormSubmit = e => {
        e.preventDefault()

        // Call back from the parent
        this.props.onTermSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text" placeholder="Search Video"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar