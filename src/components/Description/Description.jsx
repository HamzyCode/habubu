import mascot from "../../assets/mascot.png";
import "./Description.css";

export default function Description() {
  return (
    <div className="description">
      <div>
        <img src={mascot} alt="Habubu Mascot" />
      </div>
      <div>
        <h1>What is a Habubu?</h1>
        <p>
          Habubu is a mysterious little creature from the land of dreams and
          desert winds. No one knows exactly where he came from but wherever
          Habubu appears smiles and curiosity follow. With a heart full of
          mischief and eyes that hold ancient secrets Habubu moves between the
          worlds of folklore and fantasy.
          <br />
          <br />
          From the golden sands of the Middle East to the busiest city streets
          Habubu has captured hearts across the globe. Some say he is a fairy.
          Others say he is a myth. But everyone agrees that Habubu is pure
          Habibi energy.
        </p>
      </div>
    </div>
  );
}
