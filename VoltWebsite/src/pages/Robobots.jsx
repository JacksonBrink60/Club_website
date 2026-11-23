import Nav from "../components/Nav";
import "./Robobots.css";

function Robobots() {
  return (
    <>
      <div id="NavBarR">
        <h1 id="VTitleR">VOLT:Engineering</h1>
        <div id="NavPagesR">
          <Nav />
        </div>
      </div>
      <h1>Robobots</h1>
      <h3>We are currently working on a robobots project.</h3>
      <div id="BigRobobotDiv">
        <div class="RobobotDiv">
          <img
            id="RobobotImg"
            src="../src/assets/robobots1.png"
            alt="Robobot"
          />
        </div>
      </div>
    </>
  );
}
export default Robobots;
