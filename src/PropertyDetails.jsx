import { useLocation,  useNavigate } from "react-router-dom";
import "./PropertyDetails.css";

export default function PropertyDetails() {
 
  const location = useLocation();
  const navigate = useNavigate();
  const { property } = location.state || {};

  if (!property) return <p style={{ textAlign: "center", marginTop: "50px" }}>Property details not found.</p>;

  return (
    <div className="property-details">
      <div className="details-container">
        
        {/* Left - Multiple Images */}
        <div className="image-section">
  {property.images && property.images.length > 0 ? (
    <div className="image-gallery">
      {property.images.map((img, index) => (
        <img key={index} src={img} alt={`${property.title} ${index + 1}`} />
      ))}
    </div>
  ) : property.image1 ? (
    <>
      <img src={property.image} alt={property.title} />
       </>
  ) : (
    <img src={property.image} alt={property.title} />
  )}
</div>

        {/* Right - Price and Info */}
        <div className="info-section">
          <h1>{property.title}</h1>
          <h3>Property Price</h3>
          <h2>₹ {property.price}</h2>

          <h3>Description</h3>
          <p>{property.description}</p>

          <h3>Required Documents</h3>
          <ul>
            {property.requiredDocs.map((doc, i) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Back Button */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          onClick={() => navigate("/")}
          className="back-btn"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
