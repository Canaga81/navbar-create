import EhTrade_Image_Bg_2 from '../../images/about_image_2.jpg'

const EhTradeBg = () => {
  return (
    <>
        <header className="header">
        <div className="header__container">
          <div className="header__container-bg">
            <img src={EhTrade_Image_Bg_2} alt="Header bg Image" />
          </div>
          <div className="header__content">
            <h2 className="about_h2">EH Trade</h2>
            <p>
                Şirkətimiz 3 ildən çox müddətdirki fəaliyyətə başlayıb. 
                Bu müddət ərzində digər ölkələrdən  Azərbaycan bazarına 
                keyfiyyətli və münasib qiymətli məhsullar 
                gətirməyə nail olmuşuq
            </p>
          </div>
        </div>
      </header>
    </>
  )
}

export default EhTradeBg