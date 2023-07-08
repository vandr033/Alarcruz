import React from 'react'

import PropTypes from 'prop-types'

const BotonVerdeNegro = (props) => {
  return (
    <>
      <div className={`boton-verde-negro-container ${props.rootClassName} `}>
        <button className="boton-verde-negro-button button ButtonSmall">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .boton-verde-negro-container {
            display: flex;
            position: relative;
          }
          .boton-verde-negro-button {
            color: var(--dl-color-gray-white);
            outline: none;
            background: linear-gradient(310deg, #000000, #56bc6c);
            box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%),
              0 2px 4px -1px rgb(0 0 0 / 7%);
            transition: all 0.15s ease-in;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 1.875rem;
            padding-right: var(--dl-space-space-unitandahalfunit);
            padding-bottom: var(--dl-space-space-triplequarterunit);
          }
          .boton-verde-negro-button:hover {
            cursor: pointer;
            transform: scale(1.02);
          }

          .boton-verde-negro-root-class-name4 {
            align-self: flex-end;
          }
          .boton-verde-negro-root-class-name5 {
            align-self: flex-end;
          }
          .boton-verde-negro-root-class-name2 {
            align-self: flex-end;
          }
        `}
      </style>
    </>
  )
}

BotonVerdeNegro.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

BotonVerdeNegro.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BotonVerdeNegro
