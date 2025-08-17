import { useState, useRef, useEffect } from "react";
import "./RecentProperties.css"; // reuse same styles

const soldProperties = [
    {
      id: 1,
      title: "Madurai",
      location: "Madurai",
      type: "PLOT / LAND",
      area: "500 sq.ft",
      price: "7.25 Lakh",
      images: [
        "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      ],
      description: "Land already sold."
    },
    {
      id: 2,
      title: "Chennai",
      location: "Chennai",
      type: "HOUSE",
      area: "1200 sq.ft",
      price: "45.00 Lakh",
      images: [
        "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg"
      ],
      description: "House marked as sold."
    },
    {
      id: 3,
      title: "Coimbatore",
      location: "Coimbatore",
      type: "APARTMENT",
      area: "850 sq.ft",
      price: "32.00 Lakh",
      images: [
        "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg"
      ],
      description: "Apartment already sold."
    },
    {
      id: 4,
      title: "Erode",
      location: "Erode",
      type: "PLOT / LAND",
      area: "400 sq.ft",
      price: "5.50 Lakh",
      images: [
        "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg"
      ],
      description: "Land already sold."
    },
    {
      id: 5,
      title: "Tirunelveli",
      location: "Tirunelveli",
      type: "HOUSE",
      area: "1000 sq.ft",
      price: "28.75 Lakh",
      images: [
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      ],
      description: "House already sold."
    },
    {
      id: 6,
      title: "Salem",
      location: "Salem",
      type: "PLOT / LAND",
      area: "450 sq.ft",
      price: "6.10 Lakh",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
      ],
      description: "Land already sold."
    },
    {
      id: 7,
      title: "Tiruchirappalli",
      location: "Tiruchirappalli",
      type: "APARTMENT",
      area: "900 sq.ft",
      price: "34.00 Lakh",
      images: [
        "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg"
      ],
      description: "Apartment already sold."
    },
    {
      id: 8,
      title: "Vellore",
      location: "Vellore",
      type: "HOUSE",
      area: "1100 sq.ft",
      price: "40.50 Lakh",
      images: [
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg"
      ],
      description: "House already sold."
    },
    {
      id: 9,
      title: "Kanchipuram",
      location: "Kanchipuram",
      type: "PLOT / LAND",
      area: "380 sq.ft",
      price: "4.90 Lakh",
      images: [
        "https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg"
      ],
      description: "Land already sold."
    },
    {
      id: 10,
      title: "Dindigul",
      location: "Dindigul",
      type: "APARTMENT",
      area: "950 sq.ft",
      price: "30.00 Lakh",
      images: [
        "https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg"
      ],
      description: "Apartment already sold."
    }
  ];
  

export default function SoldProperties() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const displayedProperties = isMobile
    ? showAll
      ? soldProperties
      : soldProperties.slice(0, 4)
    : soldProperties;

  return (
    <div className="recent-properties">
      <h2>Sold Properties</h2>

      {/* Desktop Carousel */}
      {!isMobile && !showAll && (
        <div className="carousel-container">
          <button className="arrow-btn left" onClick={scrollLeft}>❮</button>
          <div className="property-carousel" ref={scrollRef}>
            {soldProperties.map((property) => (
              <div className="property-card" key={property.id}>
                <img src={property.images[0]} alt={property.title} />
                <h3>{property.title}</h3>
                <p>Type: {property.type}</p>
                <p>📍 {property.location}</p>
                <p>📏 {property.area}</p>
                <p>₹ {property.price}</p>
                <button className="sold-btn" disabled>SOLD OUT</button>
              </div>
            ))}
          </div>
          <button className="arrow-btn right" onClick={scrollRight}>❯</button>
        </div>
      )}

      {/* Mobile or Grid View */}
      {(isMobile || showAll) && (
        <div className="property-grid">
          {displayedProperties.map((property) => (
            <div className="property-card" key={property.id}>
              <img src={property.images[0]} alt={property.title} />
              <h3>{property.title}</h3>
              <p>Type: {property.type}</p>
              <p>📍 {property.location}</p>
              <p>📏 {property.area}</p>
              <p>₹ {property.price}</p>
              <button className="sold-btn" disabled>SOLD OUT</button>
            </div>
          ))}
        </div>
      )}

      {/* View More / Show Carousel Button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          className="view-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? isMobile
              ? "Show Less"
              : "Show Less"
            : "View More"}
        </button>
      </div>
    </div>
  );
}
