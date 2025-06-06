import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-icons">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
      <p className="footer-title">$HABUBU - The original fan token on Solana</p>
      <p className="footer-disclaimer">
        Disclaimer: $HABUBU is a memecoin made for fun. This is not financial
        advice. Crypto is risky, do your own research and speak to a licensed
        advisor before making decisions. © $HABUBU 2025
      </p>
    </footer>
  );
}
