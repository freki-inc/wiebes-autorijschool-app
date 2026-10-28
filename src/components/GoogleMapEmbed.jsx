export const GoogleMapEmbed = () => {
  const address = "ChIJ_d37HdrHxUcRSpIJxxTRy8E"; // location

      return (
        <section className="location-map-section mt-5">
          <h2 className='location-map-titel'>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="icon mr-05">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path 
                  strokeLinecap="round"
                  strokeLinejoin="round" 
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
            </svg>
            Start Locatie
          </h2>
          <div className="location-map-border">
            <iframe
              title="Location map"
              width="320px"
              height="350px"
              className="location-map"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBuZkh9A8S_J8caT6I51P8-iC9n372t_Lg&q=place_id:${address}`}
            />
          </div>

        </section>
      );
}

{/* Created by willemwebdev.com */}