import React,{useState} from 'react'
import Card from "../card/index"
import styles from "./Portfolio.module.css";

const Portfolio = () => {
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

  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.portfolio_wrapper}>
          <div className={styles.portfolio_tabs}>
            <div className={styles.heading_wrapper}>
              <h3>Portfolio</h3> 
            </div>
          </div>
          <div className={styles.listWrap}>
              <ul>
                <li  className={activeTab === "tab1" ? "active" : ""}
                  onClick={handleTab1}>All </li>
                <li className={activeTab === "tab2" ? "active" : ""}
                  onClick={handleTab2}>Logo </li>
                <li  className={activeTab === "tab3" ? "active" : ""}
                  onClick={handleTab3}>Websites </li>
                <li  className={activeTab === "tab4" ? "active" : ""}
                  onClick={handleTab4}> Mobile Apps </li>
              </ul>
          </div>
          <div className={styles.portfolio_cards_wrapper}>
          {(() => {
          switch (activeTab) {
            case "tab1":
              return <div className={styles.cardWrapper}>
                    <Card src="/images/card1.png" />
                  <Card src="/images/card6.png" />
                  <Card src="/images/card3.png" />
                  <Card src="/images/card4.png" />
                  <Card src="/images/card5.png" />
                  <Card src="/images/card6.png" />
                    </div>;
            case "tab2":
              return <div className={styles.cardWrapper}>
                        <Card src="/images/card1.png" />
                      <Card src="/images/card6.png" />
                      <Card src="/images/card3.png" />
                      <Card src="/images/card4.png" />
                     </div>;
            case "tab3":
              return <div className={styles.cardWrapper}>
                       <Card src="/images/card3.png" />
                      <Card src="/images/card4.png" />
                      <Card src="/images/card5.png" />
                      <Card src="/images/card6.png" />
                      </div>;
              case "tab4":
              return <div className={styles.cardWrapper}>
                        <Card src="/images/card6.png" />
                        <Card src="/images/card3.png" />
                        <Card src="/images/card4.png" />
                        <Card src="/images/card5.png" />
                    </div>;
            default:
              return <div>
                        <Card src="/images/card1.png" />
                      <Card src="/images/card6.png" />
                      <Card src="/images/card3.png" />
                      <Card src="/images/card4.png" />
                      <Card src="/images/card5.png" />
                      <Card src="/images/card6.png" />
                    </div>;
          }
        })()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio
