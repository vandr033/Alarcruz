import React from 'react'
import Head from 'next/head'

import HeaderFull from '../components/header-full'
import Footer from '../components/footer'

const AgendeUnaLlamada = (props) => {
  return (
    <>
      <div className="agende-una-llamada-container">
        <Head>
          <title>Agende-Una-Llamada - Soft UI Pro</title>
          <meta
            property="og:title"
            content="Agende-Una-Llamada - Soft UI Pro"
          />
        </Head>
        <HeaderFull></HeaderFull>
        <div className="agende-una-llamada-contact">
          <div className="agende-una-llamada-container01">
            <div className="agende-una-llamada-form">
              <h2 className="agende-una-llamada-text HeadingOne">
                Agende una llamada
              </h2>
              <span className="agende-una-llamada-text01 Lead">
                Estamos a su servicio
              </span>
              <form
                id="contacto"
                name="contact-form"
                action="https://formsubmit.co/sebgonzal95@gmail.com"
                method="POST"
                className="agende-una-llamada-form1"
              >
                                    <input type="hidden" name="_next" value="http://localhost:3000/muchas-gracias"/>
                                    <input type="hidden" name="_captcha" value="false"/>



                <label className="agende-una-llamada-text02 Label">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="input-nombre"
                  placeholder="Nombre Completo"
                  className="agende-una-llamada-textinput Small input"
                />
                <label className="agende-una-llamada-text03 Label">
                  Direccion:
                </label>
                <input
                  type="text"
                  id="direccion"
                  name="input-direccion"
                  enctype="Direccion"
                  placeholder="Direccion:"
                  className="agende-una-llamada-textinput1 Small input"
                />
                <label className="agende-una-llamada-text04 Label">
                  Telefono
                </label>
                <input
                  type="number"
                  id="telefono"
                  name="input-telefono"
                  rows="Telefono"
                  placeholder="Telefono"
                  className="agende-una-llamada-textinput2 input Small"
                />
                <label className="agende-una-llamada-text05 Label">
                  Correo Electronico
                </label>
                <input
                  type="text"
                  id="correo"
                  name="input-correo"
                  rows="Telefono"
                  placeholder="Correo Electronico"
                  className="agende-una-llamada-textinput3 input Small"
                />
                <label className="agende-una-llamada-text06">
                  <span className="Label">Mensaje</span>
                  <br></br>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="8"
                  type="mensaje"
                  placeholder="Por favor escriba el horario y la fecha que mas le convenga "
                  className="agende-una-llamada-textarea textarea Small"
                ></textarea>
                <div className="agende-una-llamada-container02">
                  <div className="agende-una-llamada-container03">
                    <button
                      type="submit"
                      className="agende-una-llamada-button button"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="agende-una-llamada-info">
              <div className="agende-una-llamada-container04">
                <h3 className="agende-una-llamada-text09">Contacto</h3>
                <span className="agende-una-llamada-text10">
                  Te responderemos dentro de 24 horas!
                </span>
                <div className="agende-una-llamada-container05">
                  <div className="agende-una-llamada-container06">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="agende-una-llamada-icon"
                    >
                      <path d="M742 460l-94-94q-18-18-10-44 24-72 24-152 0-18 12-30t30-12h150q18 0 30 12t12 30q0 300-213 513t-513 213q-18 0-30-12t-12-30v-150q0-18 12-30t30-12q80 0 152-24 24-10 44 10l94 94q186-96 282-282z"></path>
                    </svg>
                    <a
                      href="tel:+40 772 100 200"
                      className="agende-una-llamada-link Small"
                    >
                      77339086
                    </a>
                  </div>
                  <div className="agende-una-llamada-container07">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="agende-una-llamada-icon02"
                    >
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                    <a
                      href="mailto:hello@creative-tim.com?subject="
                      className="agende-una-llamada-link1 Small"
                    >
                      monitoreo@alarcruz.com
                    </a>
                  </div>
                  <a
                    href="https://goo.gl/maps/pmyc4CfDpDViPwNi9"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="agende-una-llamada-link2"
                  >
                    <div className="agende-una-llamada-container08">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="agende-una-llamada-icon04"
                      >
                        <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                      </svg>
                      <span className="agende-una-llamada-text11 Small">
                        Barrio Urbari Av. Barrientos Nro. 23 Edificio Baruch
                      </span>
                    </div>
                  </a>
                </div>
                <div className="agende-una-llamada-container09">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="agende-una-llamada-icon06"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="agende-una-llamada-icon08"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="agende-una-llamada-icon10"
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="agende-una-llamada-icon12"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </div>
              <img
                alt="image"
                src="/wave-1.svg"
                className="agende-una-llamada-image"
              />
              <div className="agende-una-llamada-container10"></div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .agende-una-llamada-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .agende-una-llamada-contact {
            width: 100%;
            max-width: 1320px;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .agende-una-llamada-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: row;
            background-color: var(--dl-color-gray-white);
          }
          .agende-una-llamada-form {
            flex: 5;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .agende-una-llamada-text {
            color: var(--dl-color-secondary-500);
            margin-bottom: var(--dl-space-space-unit);
          }
          .agende-una-llamada-text01 {
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .agende-una-llamada-form1 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .agende-una-llamada-text02 {
            color: var(--dl-color-secondary-500);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .agende-una-llamada-textinput {
            width: 100%;
            height: 40px;
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            padding-left: var(--dl-space-space-triplequarterunit);
            border-radius: var(--dl-radius-radius-radius5);
            padding-right: var(--dl-space-space-triplequarterunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .agende-una-llamada-textinput:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          .agende-una-llamada-text03 {
            color: var(--dl-color-secondary-500);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .agende-una-llamada-textinput1 {
            width: 100%;
            height: 40px;
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            padding-left: var(--dl-space-space-triplequarterunit);
            border-radius: var(--dl-radius-radius-radius5);
            padding-right: var(--dl-space-space-triplequarterunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .agende-una-llamada-textinput1:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          .agende-una-llamada-text04 {
            color: var(--dl-color-secondary-500);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .agende-una-llamada-textinput2 {
            width: 100%;
            height: 40px;
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            padding-left: var(--dl-space-space-triplequarterunit);
            border-radius: var(--dl-radius-radius-radius5);
            padding-right: var(--dl-space-space-triplequarterunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .agende-una-llamada-textinput2:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          .agende-una-llamada-text05 {
            color: var(--dl-color-secondary-500);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .agende-una-llamada-textinput3 {
            width: 100%;
            height: 40px;
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            padding-left: var(--dl-space-space-triplequarterunit);
            border-radius: var(--dl-radius-radius-radius5);
            padding-right: var(--dl-space-space-triplequarterunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .agende-una-llamada-textinput3:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          .agende-una-llamada-text06 {
            color: var(--dl-color-secondary-500);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .agende-una-llamada-textarea {
            width: 100%;
            height: 141px;
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            padding-left: var(--dl-space-space-triplequarterunit);
            border-radius: var(--dl-radius-radius-radius5);
            padding-right: var(--dl-space-space-triplequarterunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .agende-una-llamada-textarea:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          .agende-una-llamada-container02 {
            display: flex;
            align-self: flex-end;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .agende-una-llamada-container03 {
            display: flex;
          }
          .agende-una-llamada-button {
            color: var(--dl-color-gray-white);
            outline: none;
            background: linear-gradient(310deg, #000000, #56bc6c);
            box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 7px -1px,
              rgba(0, 0, 0, 0.07) 0px 2px 4px -1px;
            transition: all 0.15s ease-in;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 1.875rem;
            padding-right: var(--dl-space-space-unitandahalfunit);
            padding-bottom: var(--dl-space-space-triplequarterunit);
            background-image: linear-gradient(
              310deg,
              rgb(0, 0, 0),
              rgb(86, 188, 108)
            );
          }
          .agende-una-llamada-button:hover {
            cursor: pointer;
            transform: scale(1.02);
          }
          .agende-una-llamada-info {
            flex: 4;
            color: var(--dl-color-gray-white);
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-sixunits);
            border-radius: 0px;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/curved5-1400w.jpg');
            border-top-right-radius: var(--dl-radius-radius-radius1);
            border-bottom-right-radius: var(--dl-radius-radius-radius1);
          }
          .agende-una-llamada-container04 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            z-index: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .agende-una-llamada-text09 {
            font-size: 30px;
          }
          .agende-una-llamada-text10 {
            opacity: 0.8;
          }
          .agende-una-llamada-container05 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .agende-una-llamada-container06 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .agende-una-llamada-icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .agende-una-llamada-link {
            opacity: 0.8;
            text-decoration: none;
          }
          .agende-una-llamada-container07 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .agende-una-llamada-icon02 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .agende-una-llamada-link1 {
            opacity: 0.8;
            text-decoration: none;
          }
          .agende-una-llamada-link2 {
            display: contents;
          }
          .agende-una-llamada-container08 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            text-decoration: none;
          }
          .agende-una-llamada-icon04 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .agende-una-llamada-text11 {
            opacity: 0.8;
          }
          .agende-una-llamada-container09 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .agende-una-llamada-icon06 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .agende-una-llamada-icon08 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .agende-una-llamada-icon10 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .agende-una-llamada-icon12 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .agende-una-llamada-image {
            top: 0px;
            left: -1px;
            right: auto;
            width: 100px;
            height: 835px;
            z-index: 2;
            position: absolute;
            object-fit: cover;
          }
          .agende-una-llamada-container10 {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            opacity: 0.9;
            position: absolute;
            background-image: linear-gradient(310deg, #000000, #56bc6c);
          }
          @media (max-width: 991px) {
            .agende-una-llamada-container01 {
              flex-direction: column;
            }
            .agende-una-llamada-info {
              padding-left: 0px;
              border-top-right-radius: 0;
              border-bottom-left-radius: var(--dl-radius-radius-radius1);
            }
            .agende-una-llamada-image {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .agende-una-llamada-contact {
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .agende-una-llamada-form {
              padding-top: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default AgendeUnaLlamada
