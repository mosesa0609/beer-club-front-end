import React, {Component} from 'react'
// import Header from './Header'

class Search extends Component {
  constructor (props) {
    super(props)
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.onSubmitQuery = this.onSubmitQuery.bind(this)
  }

  handleSearchInput (e) {
    this.props.handleSearchInput(e.target.value)
  }

  onSubmitQuery (e) {
    e.preventDefault()
    this.props.onSubmitQuery(this.props.query)
  }

  render () {
    return (
      <div>
        {/* <Header /> */}
        {/* <div class='nav-wrapper centered'>
          <form onSubmit={this.onSubmitQuery}>
            <div class='input-field'>
              <input id='search'
                placeholder="How 'bout a beer?"
                value={this.props.query}
                onChange={this.handleSearchInput}
                type='search' required />
              <label class='label-icon' for='search'><i class='material-icons'>search</i></label>
              <i class='material-icons'>close</i>
            </div>
          </form>
        </div> */}
      </div>
    )
  }
}

export default Search
