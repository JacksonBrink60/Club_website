import Nav from "../components/Nav";
import "./Drone_style.css";
function Dones() {
  return (
    <>
      <div id="body">
        <div id="NavBar">
          <h1 id="VTitle">VOLT:Engineering</h1>
          <div id="NavPages">
            <Nav />
          </div>
        </div>
        <h1>Drones</h1>
        <div id="BigDroneDiv">
          <div class="DroneDiv">
            <img id="DroneImg" src="../src/assets/FAA.png" alt="FAA" />
            <h3>
              VOLT's Drone Program provides students with the opportunity to
              explore aviation through hands-on drone piloting and practical
              flight training. Whether you're completely new to drones or
              already have experience, our program offers an environment to
              develop your skills, learn flight fundamentals, and gain
              confidence as a pilot.
            </h3>
          </div>
          <div class="DroneDiv">
            <img id="DroneImg" src="../src/assets/Drone1.png" alt="Drone" />
            <h3>
              Our drone training program is designed to cater to students of all
              experience levels, from beginners to advanced pilots. You'll learn
              about drone regulations, safety protocols and the benefits of
              drone technology.
            </h3>
          </div>
          <div class="DroneDiv">
            <img id="DroneImg" src="../src/assets/Drone2.jpg" alt="Drone" />
            <h3>
              Beyond flight operations, VOLT plans to offer training
              opportunities to help students prepare for the FAA Part 107 Remote
              Pilot Certification, opening the door to further education and
              potential career opportunities in the growing drone industry.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dones;
