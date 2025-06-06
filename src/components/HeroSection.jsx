import React, { useState } from "react";
import Logo from "../assets/labubu-fans-clone.png";

import { FaTelegramPlane } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaRegCopy } from "react-icons/fa";
import "./HeroSection.css";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [borderActive, setBorderActive] = useState(false);

  const contractAddress = "habubu12345hbad12345jasd1434123pump";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setBorderActive(true);
      setTimeout(() => {
        setCopied(false);
        setBorderActive(false);
      }, 1500);
    });
  };

  return (
    <div className="hero-container">
      <img
        src={Logo}
        alt="Habubu Logo"
        height={150}
        width={450}
        className="logo"
      />
      <h1 className="subtitle">the original fan token on solana</h1>

      <div className="button-group">
        <a href="#" className="btn btn-primary">
          <FaTelegramPlane size={16} />
          Join the community
        </a>
        <a href="#" className="btn btn-outline">
          <FiExternalLink size={16} />
          View chart
        </a>
      </div>

      <div className={`contract-box ${borderActive ? "border-animated" : ""}`}>
        <p className="contract-label">Contract Address</p>
        <div className="contract-inner">
          <span className="contract-address">{contractAddress}</span>
          <FaRegCopy
            size={16}
            className="copy-icon"
            onClick={handleCopy}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}
