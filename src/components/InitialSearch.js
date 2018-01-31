import React, {Component} from 'react'

class InitialSearch extends Component {
  render () {
    return (
      <div>
        <div class='nav-wrapper centered'>
          <form>
            <div class='input-field'>
              <input id='search' type='search' required />
              <label class='label-icon' for='search'><i class='material-icons'>search</i></label>
              <i class='material-icons'>close</i>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default InitialSearch
