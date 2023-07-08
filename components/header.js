import React from 'react'
import Link from 'next/link'

import BotonVerdeNegro from './boton-verde-negro'
import PrimaryPinkButton from './primary-pink-button'

const Header = (props) => {
  return (
    <>
      <div data-role="Header" className="header-header">
        <nav className="header-nav">
          <div className="header-container">
            <Link href="/">
              <a className="header-link Large">ALARCRUZ</a>
            </Link>
            <div className="header-menu">
              <Link href="/">
                <a className="header-link1 Large">Home</a>
              </Link>
              <Link href="/contactarse">
                <a className="header-link2 Large">Profile</a>
              </Link>
              <Link href="/muchas-gracias">
                <a className="header-link3 Large">Coming Soon</a>
              </Link>
            </div>
            <div className="header-container1">
              <div className="header-container2">
                <BotonVerdeNegro rootClassName="boton-verde-negro-root-class-name1"></BotonVerdeNegro>
              </div>
              <div data-role="BurgerMenu" className="header-burger-menu">
                <svg viewBox="0 0 1024 1024" className="header-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div data-role="MobileMenu" className="header-mobile-menu">
          <div className="header-top">
            <Link href="/">
              <a className="header-link4 Large">Soft UI Design System</a>
            </Link>
            <div data-role="CloseMobileMenu" className="header-close-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon2">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="header-mid">
            <div className="header-menu1">
              <Link href="/">
                <a className="header-link5 Large">Home</a>
              </Link>
              <Link href="/contactarse">
                <a className="header-link6 Large">Profile</a>
              </Link>
              <Link href="/muchas-gracias">
                <a className="header-link7 Large">Coming Soon</a>
              </Link>
            </div>
          </div>
          <div className="header-bot">
            <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .header-header {
            top: 0px;
            left: auto;
            right: auto;
            width: 100%;
            bottom: auto;
            display: flex;
            z-index: 3;
            position: fixed;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .header-nav {
            flex: 0 0 auto;
            color: var(--dl-color-secondary-600);
            width: 100%;
            height: 60px;
            display: flex;
            flex-wrap: wrap;
            box-shadow: 0 0.25rem 0.375rem -0.0625rem hsla(0, 0%, 8%, 0.12),
              0 0.125rem 0.25rem -0.0625rem hsla(0, 0%, 8%, 0.07) !important;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: var(--dl-radius-radius-radius40);
            padding-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: saturate(200%) blur(30px);
            justify-content: space-between;
            background-color: hsla(0, 0%, 100%, 0.8) !important;
          }
          .header-container {
            color: var(--dl-color-gray-black);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-link {
            color: var(--dl-color-secondary-700);
            font-weight: 600;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .header-link1 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link1:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link2 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link2:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link3 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link3:hover {
            color: var(--dl-color-gray-500);
          }
          .header-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-icon {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }
          .header-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-unitandahalfunit);
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .header-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-link4 {
            color: var(--dl-color-secondary-700);
            font-weight: 600;
            text-decoration: none;
          }
          .header-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-icon2 {
            width: 24px;
            height: 24px;
          }
          .header-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header-menu1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header-link5 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link5:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link6 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link6:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link7 {
            transition: 0.3s;
            text-decoration: none;
          }
          .header-link7:hover {
            color: var(--dl-color-gray-500);
          }
          .header-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .header-nav {
              max-width: 960px;
            }
            .header-menu {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .header-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .header-container2 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default Header
