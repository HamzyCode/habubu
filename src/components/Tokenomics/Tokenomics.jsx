import "./Tokenomics.css";

export default function Tokenomics() {
  return (
    <div className="tokenomics-container">
      <h2>$HABUBU Tokenomics</h2>
      <p>A fair launch fan token on Solana with no team allocation</p>
      <div className="tokenomics-stats">
        <div className="stat-box">
          <h3>0%</h3>
          <span>Tax</span>
        </div>
        <div className="stat-box">
          <h3>100%</h3>
          <span>Community Owned</span>
        </div>
        <div className="stat-box">
          <h3>LP</h3>
          <span>Locked</span>
        </div>
      </div>
    </div>
  );
}
