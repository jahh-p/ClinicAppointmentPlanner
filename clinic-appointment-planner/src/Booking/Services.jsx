
// In Services.jsx:
export default function Services({ options }) {
  return (
    <div className="services-list">
      {options.map((item) => (
        <div key={item.id} className="service-card">
          <h3>{item.name}</h3>
          <p>Price: ₱{item.price}</p>
          {item.image && <img src={item.image} alt={item.name} width="150" />}
        </div>
      ))}
    </div>
  );
}