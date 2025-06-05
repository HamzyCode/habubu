import React from "react";
import dext from "../../assets/exchanges/dext.png";
import dexs from "../../assets/exchanges/dexs.png";
import cmc from "../../assets/exchanges/cmc.png";
import cg from "../../assets/exchanges/cg.png";
import "./ListedOn.css";

export default function ListedOn() {
  return (
    <div className="listed-container">
      <h1 className="listed-title">We have been listed on</h1>
      <div className="logo-grid">
        <img src={dext} alt="Dextools" />
        <img src={dexs} alt="Dexscreener" />
        <img src={cmc} alt="CoinMarketCap" />
        <img src={cg} alt="CoinGecko" />
      </div>
    </div>
  );
}
