import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import FooterGray from '../components/footer-gray'

const MuchasGracias = (props) => {
  return (
    <>
      <div className="muchas-gracias-container">
        <Head>
          <title>Muchas-Gracias - Soft UI Pro</title>
          <meta property="og:title" content="Muchas-Gracias - Soft UI Pro" />
        </Head>
        <Header></Header>
        <div className="muchas-gracias-container1">
          <div className="muchas-gracias-main">
            <img
              alt="image"
              src="/untitled%20design%20(1)-500h.png"
              className="muchas-gracias-image"
            />
            <div className="muchas-gracias-container2">
              <h1 className="muchas-gracias-text">
                Muchas gracias por tu confianza!
              </h1>
              <p className="muchas-gracias-text1">
                <span>Estaremos en contacto dentro de 48 horas!</span>
                <br></br>
              </p>
              <div className="muchas-gracias-container3">
                <Link href="/">
                  <a className="muchas-gracias-link">
                    <SecondaryButton
                      button="Volver"
                      className="muchas-gracias-component1"
                    ></SecondaryButton>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FooterGray></FooterGray>
      </div>
      <style jsx>
        {`
          .muchas-gracias-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-900);
          }
          .muchas-gracias-container1 {
            width: 100%;
            height: 100vh;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .muchas-gracias-main {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 0;
            position: relative;
            max-width: 1320px;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: flex-end;
          }
          .muchas-gracias-image {
            width: 479px;
            height: 479px;
            object-fit: cover;
          }
          .muchas-gracias-container2 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            z-index: 2;
            align-self: flex-end;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            margin-left: var(--dl-space-space-tripleunit);
            padding-top: var(--dl-space-space-tripleunit);
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
          }
          .muchas-gracias-text {
            color: var(--dl-color-secondary-700);
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .muchas-gracias-text1 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .muchas-gracias-container3 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .muchas-gracias-link {
            display: contents;
          }
          .muchas-gracias-component1 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .muchas-gracias-container1 {
              background-size: auto;
            }
            .muchas-gracias-main {
              justify-content: flex-start;
            }
            .muchas-gracias-container2 {
              width: 70%;
              align-self: flex-start;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-tripleunit);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .muchas-gracias-container2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .muchas-gracias-container3 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default MuchasGracias
