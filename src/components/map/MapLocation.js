import { GOOGLE_MAPS_EMBED_URL } from "../../config/Constants";


function MapLocation() {
  return (
    <div className="map-container">

      <iframe
        src={GOOGLE_MAPS_EMBED_URL}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Hospital Location"
      ></iframe>

    </div>
  );
}

export default MapLocation;