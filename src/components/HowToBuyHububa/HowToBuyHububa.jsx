import "./HowToBuyHububa.css";

export default function HowToBuyHububa() {
  return (
    <div className="how-to-buy-container">
      <h2>How to Buy $HABUBU</h2>
      <div className="steps">
        <div className="step">
          <div className="circle">1</div>
          <p>
            Download Phantom or your wallet of choice from the app store or
            google play store (free). Desktop users, download the google chrome
            extension.
          </p>
        </div>
        <div className="step">
          <div className="circle">2</div>
          <p>
            If you don't have any SOL, you can buy directly on Phantom, transfer
            from another wallet, or buy on another exchange and send it to your
            wallet.
          </p>
        </div>
        <div className="step">
          <div className="circle">3</div>
          <p>
            Go to{" "}
            <a href="https://raydium.io/swap/?inputMint=sol&outputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R">
              raydium.io/swap
            </a>{" "}
            and paste the $HABUBU CA. We have zero taxes so you don't need to
            worry about buying with a specific slippage.
          </p>
        </div>
      </div>
    </div>
  );
}
