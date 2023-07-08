import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import BotonVerdeNegro from '../components/boton-verde-negro'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Soft UI Pro</title>
          <meta property="og:title" content="Soft UI Pro" />
        </Head>
        <Header></Header>
        <div className="home-hero">
          <div className="home-container01">
            <div className="home-card">
              <h1 className="home-text">Alarcruz</h1>
              <h1 className="home-text01 HeadingOne">Expertos en Seguridad</h1>
              <span className="home-text02">
                Empresas y Domicilios en todo Santa Cruz tienen su Sistema de
                Alarma conectado con la Central de Monitoreo de Alarcruz y estan
                protegidos contra robos las 24 horas del dia.
              </span>
              <div className="home-container02">
                <div className="home-container03">
                  <BotonVerdeNegro rootClassName="boton-verde-negro-root-class-name"></BotonVerdeNegro>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/untitled%20design%20(1)-500h.png"
              className="home-image"
            />
          </div>
        </div>

        <section className="home-features">
          <FeatureCard
            text="Casas Pequeñas o Grandes, Apartamentos, Condominios, Edificios, y Quintas."
            title="Components"
            new_prop="Domicilo"
            image_src="/house-check-svgrepo-com%20(1).svg"
          ></FeatureCard>
          <FeatureCard
            text="Alarcruz protege a cualquier tipo de negocio brindando todos sus servicios a toda hora."
            new_prop="Empresas y Negocios"
            image_src="/business-svgrepo-com.svg"
          ></FeatureCard>
          <FeatureCard
            text="Por Internet y desde cualquier parte del mundo tenga acceso a los reportes de las señales de su sistema de  alarma"
            title="Less Code"
            new_prop="Reportes En Linea"
            image_src="/internet-svgrepo-com.svg"
          ></FeatureCard>
          <FeatureCard
            text="Hemos brindado nuestros servicios al pueblo Boliviano por mas de 20 años. "
            title="Fully Responsive"
            new_prop="+20 años de experiencia"
            image_src="/twenty-svgrepo-com.svg"
          ></FeatureCard>
        </section>
        <section className="home-container04">
          <div className="home-container05">
            <h1 className="home-text03">
              <span>Proteccion las 24 horas</span>
              <br></br>
            </h1>
            <span className="home-text06">
              The highest status people in human history are those that asked
              for nothing and gave everything
            </span>
          </div>
          <div className="home-container06">
            <div className="home-container07">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laptop.jpg"
                className="home-image01"
              />
              <span className="home-text07">
                Somos líderes en tecnología en Santa Cruz y en toda Bolivia.
                Estamos siempre al tanto de las nuevas marcas y productos para
                brindarte un servicio de calidad. Confía en nosotros para
                obtener soluciones innovadoras y seguras para tu hogar.
              </span>
              <div className="home-container08">
                <img
                  alt="image"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coding.jpg"
                  className="home-image02"
                />
              </div>
            </div>
            <div className="home-container09">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tasks.jpg"
                className="home-image03"
              />
              <div className="home-container10">
                <h3 className="HeadingTwo">
                  Te brindamos todo necesario para protegerte.
                </h3>
                <p>
                  <span>
                    Ofrecemos una amplia gama de soluciones de seguridad para tu
                    hogar, brindándote la tranquilidad que necesitas al dejar tu
                    casa desatendida. Nuestros avanzados sistemas incluyen
                    detectores de humo altamente sensibles, sensores de
                    movimiento precisos y contactos para puertas en interiores,
                    peatonales y de garajes. Con estas herramientas, puedes
                    asegurar tu hogar de manera completa y personalizada,
                    adaptándola a tus necesidades específicas. Así, podrás
                    disfrutar de la tranquilidad que mereces al dejar tu casa
                    sola, sin preocuparte por lo que pueda suceder.
                  </span>
                  <br></br>
                </p>
                <h3 className="HeadingTwo">
                  Conta con nosotros las 24 horas del dia 
                </h3>
                <p>
                  <span>
                    Nuestro compromiso es brindarte una atención continua las 24
                    horas del día, los 365 días del año. Entendemos la
                    importancia de tener a alguien disponible cuando sea
                    necesario, por eso hemos establecido un equipo de respuesta
                    dedicado que estará allí para atender tus necesidades en
                    cualquier momento. Nuestro tiempo de respuesta promedio es
                    de menos de 2 minutos por cada señal recibida, lo que
                    significa que actuaremos de manera rápida y eficiente para
                    brindarte la ayuda que requieras. Puedes confiar en que
                    siempre estaremos allí cuando nos necesites, brindándote la
                    tranquilidad y seguridad que mereces para tu hogar.
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-testimonials">
          <div className="home-container11">
            <div className="home-container12">
              <div className="home-container13">
                <h2 className="home-text16"></h2>
                <p className="home-text17 Lead">
                  Trabajamos con las mejores marcas a nivel mundial
                </p>
                <p className="home-text18">
                  Nuestro compromiso es brindarte lo mejor en seguridad para tu
                  hogar, propiedad o negocio. Siempre estamos atentos a las
                  nuevas tecnologías y nos mantenemos actualizados para
                  asegurarnos de ofrecerte las mejores soluciones disponibles.
                  Puedes confiar en que contarás con la última tecnología y las
                  mejores opciones para proteger lo que más valoras.
                </p>
                <p className="home-text19">Victor Andrade | Roxana Gonzales </p>
                <div className="home-container14">
                  <img
                    alt="image"
                    src="/team-3-200h.jpg"
                    className="home-image04"
                  />
                  <div className="home-container15"></div>
                  <img
                    alt="image"
                    src="/team-2-200h.jpg"
                    className="home-image05"
                  />
                </div>
              </div>
            </div>
            <div className="home-logos">
              <div className="home-container16">
                <div className="home-container17">
                  <div className="home-container18">
                    <img
                      alt="image"
                      src="/2ab7d486-07a5-4ac8-bfee-2098f0a9aaf0-200w.jpg"
                      className="home-image06"
                    />
                  </div>
                  <div className="home-container19">
                    <img
                      alt="image"
                      src="/untitled_design_1_600x600_crop_center-200h.webp"
                      className="home-image07"
                    />
                  </div>
                  <div className="home-container20">
                    <img
                      alt="image"
                      src="/logo_black_wb-200h.png"
                      className="home-image08"
                    />
                  </div>
                </div>
                <div className="home-container21">
                  <div className="home-container22">
                    <img
                      alt="image"
                      src="/bosch-logo-1-200h.jpg"
                      className="home-image09"
                    />
                  </div>
                  <div className="home-container23">
                    <img
                      alt="image"
                      src="/untitled%20design%20(1)-500h.png"
                      className="home-image10"
                    />
                  </div>
                  <div className="home-container24">
                    <img
                      alt="image"
                      src="/texecom%20connect_app%20icon-200h.webp"
                      className="home-image11"
                    />
                  </div>
                </div>
                <div className="home-container25">
                  <div className="home-container26">
                    <img
                      alt="image"
                      src="/dsc-1.svg"
                      className="home-image12"
                    />
                  </div>
                  <div className="home-container27">
                    <img
                      alt="image"
                      src="/risco-cloud-app-200h.jpg"
                      className="home-image13"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/bottom.svg"
            className="home-bottom-wave-image"
          />
          <img alt="image" src="/waves-white.svg" className="home-image14" />
          <img alt="image" src="/top.svg" className="home-top-wave-image" />
        </section>
        <section className="home-contaier">
          <div className="home-container28">
            <h2 className="home-text20">Opciones para cambiarte a alarcruz</h2>
            <span className="home-text21">
              Tenemos multiples opciones para hacer tu cambio a alarcruz lo mas
              facil posible!
            </span>
          </div>
          <div className="home-container29">
            <div className="home-container30">
              <div className="home-container31"></div>
              <div className="home-container32">
                <svg viewBox="0 0 987.4285714285713 1024" className="home-icon">
                  <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <h1 className="home-text22 HeadingOne">Search and Discover!</h1>
                <span className="home-text23">
                  <span>Website visitors</span>
                  <span></span>
                </span>
                <OutlineBlackButton button="get started"></OutlineBlackButton>
              </div>
            </div>
            <div className="home-container33">
              <a
                href="https://wa.me/59177339086"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <ListItem className="home-component07"></ListItem>
              </a>
              <div className="home-container34"></div>
              <a
                href="https://wa.me/59177339086"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <BotonVerdeNegro
                  rootClassName="boton-verde-negro-root-class-name2"
                  button="Comunicarte"
                  className="home-component08"
                ></BotonVerdeNegro>
              </a>
              <ListItem
                title="2. Performance Analyze"
                new_prop="Envia tus planos!"
                description="Crea una solicitud de visita incluyendo una copia de tus planos para poder crearte una cotizacion personalisada."
              ></ListItem>
              <Link href="/solicitar-con-plano">
                <a className="home-link2">
                  <BotonVerdeNegro
                    rootClassName="boton-verde-negro-root-class-name4"
                    button="Seleccionar"
                    className="home-component10"
                  ></BotonVerdeNegro>
                </a>
              </Link>
              <ListItem
                title="3. Social Conversions"
                new_prop="Agenda una llamada"
                description="Agenda una llamada para que nos aseguremos que tengas la mejor atencion posible."
                rootClassName="list-item-root-class-name"
              ></ListItem>
              <Link href="/agende-una-llamada">
                <a className="home-link3">
                  <BotonVerdeNegro
                    rootClassName="boton-verde-negro-root-class-name5"
                    button="Agendar"
                    className="home-component12"
                  ></BotonVerdeNegro>
                </a>
              </Link>
            </div>
          </div>
          <div className="home-divider"></div>
        </section>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 597px;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .home-container01 {
            width: 100%;
            height: 560px;
            display: flex;
            position: relative;
            max-width: 1320px;
            min-height: 70vh;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-card {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-right: -80;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .home-text {
            text-align: center;
            background-image: linear-gradient(
              90deg,
              rgb(0, 0, 0) 0%,
              rgba(86, 188, 108, 0.94) 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text01 {
            color: var(--dl-color-secondary-700);
            text-align: center;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .home-text02 {
            color: var(--dl-color-secondary-600);
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .home-container02 {
            display: flex;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-container03 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-image {
            width: 475px;
            height: 475px;
            object-fit: cover;
          }
          .home-features {
            width: 100%;
            height: 252px;
            display: flex;
            flex-wrap: wrap;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: 31px;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-container05 {
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            flex-direction: column;
          }
          .home-text03 {
            color: var(--dl-color-primary-56bc6c);
            font-size: 2.25rem;
            font-family: Open Sans;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
            background-image: linear-gradient(
              310deg,
              rgb(0, 0, 0),
              rgb(86, 188, 108)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text06 {
            color: #67748e;
            max-width: 600px;
            text-align: center;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-halfunit);
            background-color: rgb(255, 255, 255);
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unitandahalfunit);
            margin-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image01 {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            object-fit: cover;
            margin-left: 3rem;
            margin-right: -3rem;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-text07 {
            flex: 0 0 auto;
            color: var(--dl-color-primary-56bc6c);
            width: 228px;
            height: 204px;
            display: flex;
            padding: var(--dl-space-space-unit);
            font-size: 0.8rem;
            align-self: flex-end;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            font-family: Open Sans;
            font-weight: 400;
            line-height: 1.5;
            border-color: var(--dl-color-primary-56bc6c);
            border-style: solid;
            border-width: 1px;
            border-radius: 0.25rem;
            margin-bottom: 80px;
            flex-direction: column;
            text-transform: none;
            text-decoration: none;
          }
          .home-container08 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image02 {
            top: 0px;
            left: auto;
            width: 90%;
            bottom: auto;
            display: block;
            position: absolute;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: -1.5rem;
            object-fit: cover;
            margin-left: 2rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            padding-right: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .home-image03 {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: 8rem;
            object-fit: cover;
            margin-left: -1.5rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-container10 {
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-testimonials {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #000000, #56bc6c);
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 1;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: 15rem;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: 15rem;
            justify-content: space-between;
          }
          .home-container12 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-container13 {
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-text16 {
            color: var(--dl-color-gray-white);
          }
          .home-text17 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text18 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text19 {
            color: var(--dl-color-gray-white);
          }
          .home-container14 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image04 {
            width: 40px;
            opacity: 0.5;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-image04:hover {
            transform: scale(1.2);
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 1px;
            height: 25px;
            display: flex;
            opacity: 0.8;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-image05 {
            width: 40px;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-image05:hover {
            transform: scale(1.2);
          }
          .home-logos {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container16 {
            flex: 0 0 auto;
            display: flex;
            min-width: 400px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container18 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: flex-end;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image06 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 36px;
            bottom: 0px;
            height: 36px;
            margin: auto;
            position: absolute;
          }
          .home-container19 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            position: relative;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image07 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 40px;
            bottom: 0px;
            height: 40px;
            margin: auto;
            position: absolute;
          }
          .home-container20 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: flex-end;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image08 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 90%;
            bottom: 0px;
            margin: auto;
            position: absolute;
          }
          .home-container21 {
            flex: 0 0 auto;
            width: 100%;
            height: 70px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container22 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            position: relative;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image09 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 37px;
            bottom: 0px;
            height: 37px;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-container23 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image10 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            margin: auto;
            position: absolute;
          }
          .home-container24 {
            width: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image11 {
            width: 100%;
          }
          .home-container25 {
            flex: 0 0 auto;
            width: 50%;
            height: 70px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container26 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            position: relative;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image12 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 35px;
            bottom: 0px;
            height: 35px;
            margin: auto;
            position: absolute;
          }
          .home-container27 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image13 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 34px;
            bottom: 0px;
            height: 35px;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-bottom-wave-image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -5px;
            position: absolute;
            object-fit: cover;
          }
          .home-image14 {
            top: auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-top-wave-image {
            top: -5px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-contaier {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-container28 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text20 {
            font-size: 1.875rem;
            margin-top: var(--dl-space-space-unitandahalfunit);
            font-family: Open Sans;
            font-weight: 700;
            line-height: 1.375;
            text-transform: none;
            text-decoration: none;
            background-image: linear-gradient(
              90deg,
              rgb(0, 0, 0) 0%,
              rgba(86, 188, 108, 0.94) 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text21 {
            color: #67748e;
            font-weight: 400;
            background-color: rgb(255, 255, 255);
          }
          .home-container29 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container30 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg');
            background-position: center;
          }
          .home-container30:hover {
            transform: scale(1.04);
          }
          .home-container31 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .home-container32 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text22 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text23 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-container33 {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-link {
            display: contents;
          }
          .home-component07 {
            text-decoration: none;
          }
          .home-container34 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-link1 {
            display: contents;
          }
          .home-component08 {
            text-decoration: none;
          }
          .home-link2 {
            display: contents;
          }
          .home-component10 {
            text-decoration: none;
          }
          .home-link3 {
            display: contents;
          }
          .home-component12 {
            text-decoration: none;
          }
          .home-divider {
            flex: 0 0 auto;
            width: 90%;
            height: 1px;
            display: flex;
            opacity: 0.25;
            margin-top: 4rem;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: 4rem;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .home-container01 {
              max-width: 960px;
            }
            .home-card {
              width: 100%;
            }
            .home-features {
              max-width: 960px;
            }
            .home-container04 {
              max-width: 960px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container05 {
              max-width: 80%;
            }
            .home-text06 {
              text-align: center;
            }
            .home-text07 {
              width: 50%;
            }
            .home-container11 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              justify-content: center;
            }
            .home-container12 {
              align-items: center;
            }
            .home-container13 {
              margin-right: 0px;
            }
            .home-logos {
              display: none;
            }
            .home-contaier {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container33 {
              width: 45%;
              margin-left: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .home-card {
              align-items: center;
            }
            .home-text02 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-features {
              max-width: 720px;
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-unitandahalfunit);
              padding-right: var(--dl-space-space-unitandahalfunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container04 {
              max-width: 720px;
            }
            .home-container06 {
              align-items: center;
              flex-direction: column;
            }
            .home-container07 {
              width: 80%;
            }
            .home-image01 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-text07 {
              width: 70%;
              align-self: center;
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-image02 {
              display: none;
            }
            .home-container09 {
              width: 80%;
            }
            .home-image03 {
              display: none;
            }
            .home-container11 {
              padding-top: 12rem;
              padding-bottom: 12rem;
            }
            .home-container28 {
              width: 80%;
            }
            .home-text21 {
              text-align: center;
            }
            .home-container29 {
              flex-direction: column;
            }
            .home-container33 {
              width: 80%;
              margin-top: var(--dl-space-space-fourunits);
              align-items: center;
              margin-left: 0px;
            }
            .home-divider {
              margin-top: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 479px) {
            .home-card {
              padding: var(--dl-space-space-unit);
            }
            .home-container02 {
              align-items: center;
              flex-direction: column;
            }
            .home-container03 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-features {
              width: 100%;
            }
            .home-container11 {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-text21 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
