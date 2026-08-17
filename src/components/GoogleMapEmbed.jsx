export const GoogleMapEmbed = () => {
  const address = "Marislaan 19, 2316 XV Leiden, The Netherlands"; // your location
  const encodedAddress = encodeURIComponent(address);
  
  return (
    <div className="location-map">
      <iframe
        title="Location map"
        width="100%"
        height="450px"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}`}
      />
    </div>
    
  );
}

{/* Created by willemwebdev.com */}