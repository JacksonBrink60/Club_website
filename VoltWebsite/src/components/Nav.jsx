import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav>
        <Link style={{ color: "white", fontSize: "25px" }} to="/">
          Home |{" "}
        </Link>
        <Link style={{ color: "white", fontSize: "25px" }} to="/robobots">
          Robobots |{" "}
        </Link>
        <Link style={{ color: "white", fontSize: "25px" }} to="/drones">
          Drones{" "}
        </Link>
      </nav>

      <div>
        {/* <button
          onClick={() => {
            contextObj.setSport("MLB"); //baseball/mlb
          }}
        >
          MLB
        </button>
        <button
          onClick={() => {
            contextObj.setSport("NFL");
          }}
        >
          NFL
        </button>
        <button
          onClick={() => {
            contextObj.setSport("NBA");
          }}
        >
          NBA
        </button> */}
      </div>
    </>
  );
}
export default Nav;
