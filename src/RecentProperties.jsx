import { Link } from "react-router-dom";
import { useState ,useRef, useEffect} from "react";
import "./RecentProperties.css";

const properties = [
  {
    id: 1,
    title: "Rajapalayam",
    location: "Rajapalayam",
    type: "PLOT / LAND",
    area: "436 sq.ft",
    price: "19.50 k",
    images: [
      "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg"
    ],
    description: "Land",
    requiredDocs: ["Pancard", "Pay slip", "Aadhaar Card", "Contact Our Team Members"]
  },
  {
    id: 2,
    title: "Rajapalayam",
    location: "Rajapalayam",
    type: "PLOT / LAND",
    area: "436 sq.ft",
    price: "4.00 Lakh",
    images: [
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg"
    ],
    description: "Land",
    requiredDocs: ["Pancard", "Bank Statement", "Aadhaar Card", "Contact Our Team Members"]
  },
  {
    id: 3,
    title: "Rajapalayam",
    location: "Rajapalayam",
    type: "PLOT / LAND",
    area: "436 sq.ft",
    price: "7.50 Lakh",
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg",
      "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg"
    ],
    description: "Land",
    requiredDocs: ["Pancard", "Pay slip", "Aadhaar Card", "Contact Our Team Members"]
  },
  {
    id: 4,
    title: "Rajapalayam",
    location: "Rajapalayam",
    type: "PLOT / LAND",
    area: "436 sq.ft",
    price: "7.50 Lakh",
    images: [
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg"
    ],
    description: "Land",
    requiredDocs: ["Pancard", "Bank Passbook", "Aadhaar Card", "Contact Our Team Members"]
  },
  {
    id: 5,
    title: "Rajapalayam",
    location: "Rajapalayam",
    type: "PLOT / LAND",
    area: "500 sq.ft",
    price: "8.25 Lakh",
    images: [
      "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg",
      "https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg",
      "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg"
    ],
    description: "Land",
    requiredDocs: ["Pancard", "Aadhaar Card", "Electricity Bill"]
  },
  {
    id: 6,
    title: "Rajapalayam",
    location: "Rajapalayam",
    type: "PLOT / LAND",
    area: "420 sq.ft",
    price: "5.50 Lakh",
    images: [
      "https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg",
      "https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg",
      "https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg"
    ],
    description: "Land",
    requiredDocs: ["Pancard", "Bank Passbook", "Aadhaar Card"]
  },
  {
    id: 7,
    title: "Rajapalayam",
    location: "Rajapalayam",
    type: "PLOT / LAND",
    area: "300 sq.ft",
    price: "3.75 Lakh",
    images: [
      "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg"
    ],
    description: "Land",
    requiredDocs: ["Pancard", "Pay slip", "Aadhaar Card"]
  },
  {
    id: 8,
    title: "Rajapalayam",
    location: "Rajapalayam",
    type: "PLOT / LAND",
    area: "350 sq.ft",
    price: "4.90 Lakh",
    images: [
      "https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg"
    ],
    description: "Land",
    requiredDocs: ["Pancard", "Bank Statement", "Aadhaar Card"]
  },
  {
    id: 9,
    title: "Rajapalayam",
    location: "Rajapalayam",
    type: "PLOT / LAND",
    area: "460 sq.ft",
    price: "6.10 Lakh",
    images: [
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg"
    ],
    description: "Land",
    requiredDocs: ["Pancard", "Pay slip", "Aadhaar Card"]
  },
  {
    id: 10,
    title: "Rajapalayam",
    location: "Rajapalayam",
    type: "PLOT / LAND",
    area: "500 sq.ft",
    price: "9.00 Lakh",
    images: [
      "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg"
    ],
    description: "Land",
    requiredDocs: ["Pancard", "Aadhaar Card", "Electricity Bill"]
  }
];
export default function RecentProperties() {
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
      ? properties
      : properties.slice(0, 4)
    : properties;

  return (
    <div className="recent-properties">
      <h2>Recent Properties</h2>

      {/* Desktop Carousel */}
      {!isMobile && !showAll && (
        <div className="carousel-container">
          <button className="arrow-btn left" onClick={scrollLeft}>❮</button>
          <div className="property-carousel" ref={scrollRef}>
            {properties.map((property) => (
              <div className="property-card" key={property.id}>
                <img src={property.images[0]} alt={property.title} />
                <h3>{property.title}</h3>
                <p>Type: {property.type}</p>
                <p>📍 {property.location}</p>
                <p>📏 {property.area}</p>
                <p>₹ {property.price}</p>
                <Link to={`/property/${property.id}`} state={{ property }}>
                  <button className="buy-btn">BUY NOW</button>
                </Link>
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
              <Link to={`/property/${property.id}`} state={{ property }}>
                <button className="buy-btn">BUY NOW</button>
              </Link>
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