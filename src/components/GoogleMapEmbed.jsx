export const GoogleMapEmbed = () => {
  const address = "place_id:ChIJ_d37HdrHxUcRSpIJxxTRy8E"; // your location
  const encodedAddress = encodeURIComponent(address);
  
  return (
    <div className="location-map-section mt-5">
      <iframe
        title="Location map"
        width="350px"
        height="350px"
        className="location-map"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBuZkh9A8S_J8caT6I51P8-iC9n372t_Lg&q=${encodedAddress}`}
      />
    </div>
    
  );
}

{/* Created by willemwebdev.com */}