import MapLocation from "../components/map/MapLocation";

function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Welcome to Our Eye Hospital</h1>
        <p>
          Dedicated to protecting and improving your vision through expert
          medical care and advanced technology.
        </p>
      </div>

      <div className="section">
        <h2>About Our Hospital</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vitae sem sed sapien interdum viverra. Donec luctus, velit sed gravida
          bibendum, sapien justo tincidunt turpis, sit amet dignissim libero
          ligula nec lectus.
        </p>

        <p>
          Nulla facilisi. Suspendisse potenti. Quisque a purus vitae lorem
          volutpat tincidunt. Mauris faucibus turpis in lorem porttitor, vitae
          viverra mauris ultricies.
        </p>
      </div>

      <div className="section">
        <h2>Our Mission</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          elit eu augue bibendum hendrerit. Sed vitae libero nec purus feugiat
          tincidunt.
        </p>

        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Integer tincidunt mi nec arcu facilisis.
        </p>
      </div>

      <div className="section">
        <h2>Visit Us</h2>

        <p>
          Our hospital is located in Birtamode and is easily accessible from
          surrounding areas.
        </p>

        <MapLocation />
      </div>
    </div>
  );
}

export default Home;
