import {Component} from 'react'

import './index.css'

class HistoryItem extends Component {
  render() {
    const {historyDetails, deleteHistory} = this.props
    const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

    const deleteHistoryItem = () => {
      deleteHistory(id)
    }

    return (
      <li>
        <div className="historyElementContainer">
          <p className="time">{timeAccessed}</p>
          <div className="container">
            <div className="imageLogoContainer">
              <img src={logoUrl} alt="domain logo" className="domainLogo" />
              <div className="domainNameContainer">
                <p className="title">{title}</p>
                <p className="domainUrl">{domainUrl}</p>
              </div>
            </div>

            <button
              type="button"
              className="buttonElement"
              data-testid="delete"
              onClick={deleteHistoryItem}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </li>
    )
  }
}
export default HistoryItem
