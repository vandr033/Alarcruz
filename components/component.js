import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className="component-container">
        <button type="button" className="component-button button">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .component-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component-button {
            background-color: transparent;
            background-image: linear-gradient(
              180deg,
              rgb(20, 45, 25) 33%,
              rgba(86, 188, 108, 0) 100%
            );
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  button: 'Button',
}

AppComponent.propTypes = {
  button: PropTypes.string,
}

export default AppComponent
