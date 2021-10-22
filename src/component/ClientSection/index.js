import React,{useState} from 'react';
import style from './ClientSection.module.css';

const ClientSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };
  const handleTab4 = () => {
    setActiveTab("tab4");
  };
  const handleTab5 = () => {
    setActiveTab("tab5");
  };
  const handleTab6 = () => {
    setActiveTab("tab6");
  };
    return (
      <div>
        <div className={style.section}>
          <div className="container">
            <div className={style.contentWrapper}>
              <h1>What My Client Says </h1>
              <span className={style.redLine}></span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et t enim ad minim veniam,
                quis nostrud exercitation.
              </p>
            </div>
            <div className={style.flexWrapper}>
              <div className={style.imgsWrap}>
                <img src="./images/map.png" alt="map-bg" />
                <div  className={activeTab === "tab1" ? "active" : ""}
                  onClick={handleTab1}>
                  <img src="/images/two.png" alt="profile img" />
                </div>
                <div  className={activeTab === "tab2" ? "active" : ""}
                   onClick={handleTab2}>
                  <img src="/images/three.png" alt="profile img" />
                </div>
                <div className={activeTab === "tab3" ? "active" : ""}
                onClick={handleTab3}>
                  <img src="/images/one.png" alt="profile img" />
                </div>
                <div className={activeTab === "tab4" ? "active" : ""}
                 onClick={handleTab4}>
                  <img src="/images/two.png" alt="profile img" />
                </div>
                <div  className={activeTab === "tab5" ? "active" : ""}
                 onClick={handleTab5}>
                  <img src="/images/three.png" alt="profile img" />
                </div>
                <div className={activeTab === "tab6" ? "active" : ""}
                  onClick={handleTab6}>
                  <img src="/images/one.png" alt="profile img" />
                </div>
              </div>
              <div className={style.content}>
                  {(() => {
                            switch (activeTab) {
                              case "tab1":
                                return <div> 
                                      <div className={style.doubleQuoteOne}>
                                        <img src="/images/dquotes.png" alt="double Quotes "/>
                                      </div>
                                        <h3>
                                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                          accusantium doloremque laudantium, totam rem aperiam, eaque
                                          ipsa quae ab illo inventore veritatis et quasi architecto
                                          beatae vitae dicta sunt is the most explicabo.
                                        </h3>
                              <div className={style.doubleQuoteTwo}>
                                    <img src="/images/dquotes.png" alt="double Quotes "/>
                              </div>
                              
                              <div className={style.authorWrap}>
                              <h4> - Sara Smith</h4>
                                  <p> CEO ABC Company</p>
                              </div>  
                              </div>
                              case "tab2":
                                return  <div> 
                                      <div className={style.doubleQuoteOne}>
                                        <img src="/images/dquotes.png" alt="double Quotes "/>
                                      </div>
                                        <h3>
                                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                          ipsa quae ab illo inventore veritatis et quasi architecto
                                          beatae vitae dicta sunt is the most explicabo.
                                        </h3>
                              <div className={style.doubleQuoteTwo}>
                                    <img src="/images/dquotes.png" alt="double Quotes "/>
                              </div>
                              
                              <div className={style.authorWrap}>
                              <h4> - William</h4>
                                  <p> CEO ABC Company</p>
                              </div>  
                              </div>;
                              case "tab3":
                                return  <div> 
                                      <div className={style.doubleQuoteOne}>
                                        <img src="/images/dquotes.png" alt="double Quotes "/>
                                      </div>
                                        <h3>
                                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                          accusantium doloremque laudantium, totam rem aperiam.
                                        </h3>
                              <div className={style.doubleQuoteTwo}>
                                    <img src="/images/dquotes.png" alt="double Quotes "/>
                              </div>
                              
                              <div className={style.authorWrap}>
                              <h4> - Sara</h4>
                                  <p> CEO ABC Company</p>
                              </div>  
                              </div>
                              case "tab4":
                                return  <div> 
                                      <div className={style.doubleQuoteOne}>
                                        <img src="/images/dquotes.png" alt="double Quotes "/>
                                      </div>
                                        <h3>
                                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                          accusantium doloremque laudantium, totam rem aperiam.
                                        </h3>
                              <div className={style.doubleQuoteTwo}>
                                    <img src="/images/dquotes.png" alt="double Quotes "/>
                              </div>
                              
                              <div className={style.authorWrap}>
                              <h4> - John</h4>
                                  <p> CEO ABC Company</p>
                              </div>  
                              </div>
                              case "tab5":
                                return  <div> 
                                      <div className={style.doubleQuoteOne}>
                                        <img src="/images/dquotes.png" alt="double Quotes "/>
                                      </div>
                                        <h3>
                                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                          accusantium doloremque laudantium, totam rem aperiam.
                                        </h3>
                              <div className={style.doubleQuoteTwo}>
                                    <img src="/images/dquotes.png" alt="double Quotes "/>
                              </div>
                              
                              <div className={style.authorWrap}>
                              <h4> - Cristino</h4>
                                  <p> CEO ABC Company</p>
                              </div>  
                              </div>
                              case "tab6":
                                return  <div> 
                                      <div className={style.doubleQuoteOne}>
                                        <img src="/images/dquotes.png" alt="double Quotes "/>
                                      </div>
                                        <h3>
                                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                          accusantium doloremque laudantium, totam rem aperiam.
                                        </h3>
                              <div className={style.doubleQuoteTwo}>
                                    <img src="/images/dquotes.png" alt="double Quotes "/>
                              </div>
                              
                              <div className={style.authorWrap}>
                              <h4> - Andrew</h4>
                                  <p> CEO ABC Company</p>
                              </div>  
                              </div>
                              default:
                                return  <div> 
                                      <div className={style.doubleQuoteOne}>
                                        <img src="/images/dquotes.png" alt="double Quotes "/>
                                      </div>
                                        <h3>
                                          totam rem aperiam, eaque
                                          ipsa quae ab illo inventore veritatis et quasi architecto
                                          beatae vitae dicta sunt is the most explicabo.
                                        </h3>
                              <div className={style.doubleQuoteTwo}>
                                    <img src="/images/dquotes.png" alt="double Quotes "/>
                              </div>
                              
                              <div className={style.authorWrap}>
                              <h4> - BOB</h4>
                                  <p> CEO ABC Company</p>
                              </div>  
                              </div>;
                            }
                          })()}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ClientSection;
