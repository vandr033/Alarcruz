import React from 'react'

import PropTypes from 'prop-types'

const ListItem = (props) => {
  return (
    <>
      <div className={`list-item-container ${props.rootClassName} `}>
        <h5 className="list-item-text HeadingThree">{props.new_prop}</h5>
        <span className="list-item-text1">{props.description}</span>
      </div>
      <style jsx>
        {`
          .list-item-container {
            flex: 0 0 auto;
            display: flex;
            padding: 1rem;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
          }
          .list-item-text {
            color: var(--dl-color-secondary-600);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .list-item-text1 {
            padding-bottom: 10px;
          }
          .list-item-root-class-name {
            align-self: flex-end;
          }
        `}
      </style>
    </>
  )
}

ListItem.defaultProps = {
  description:
    'Comunicate con unos de nuestros agentes mediante whatsapp para coordinar una visita a tu domicilio o oficina!',
  new_prop: 'Comunicate Con un Agente',
  rootClassName: '',
}

ListItem.propTypes = {
  description: PropTypes.string,
  new_prop: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ListItem
