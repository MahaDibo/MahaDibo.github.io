import React, { useState } from "react";

export default function BookingApp() {
  const [step, setStep] = useState(1);
  const [treatment, setTreatment] = useState("");
  const [femaleOnly, setFemaleOnly] = useState(false);
  const [date, setDate] = useState("2025-06-08");
  const [time, setTime] = useState("");
  const [selectedPage, setSelectedPage] = useState("home");

  const navLinkStyle = {
    color: "#333",
    textDecoration: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fdeff2",
        minHeight: "100vh",
      }}
    >
      <nav
        style={{
          backgroundColor: "#fff",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <div>
          <div
            style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#d50000" }}
          >
            BellaGlow Salon
          </div>
          <div style={{ fontSize: "0.9rem", color: "#333" }}>
            Designed by Maha & Maimonah
          </div>
        </div>
        <div style={{ display: "flex", gap: "30px", fontSize: "1rem" }}>
          {["home", "about", "price", "location", "contact"].map((page) => (
            <button
              key={page}
              onClick={() => setSelectedPage(page)}
              style={{
                ...navLinkStyle,
                fontWeight: selectedPage === page ? "bold" : "normal",
                color: selectedPage === page ? "#000" : "#333",
                borderBottom:
                  selectedPage === page ? "2px solid black" : "none",
                paddingBottom: "4px",
              }}
            >
              {
                {
                  home: "Home",
                  about: "About Us",
                  price: "Price List",
                  location: "Location",
                  contact: "Contact Us",
                }[page]
              }
            </button>
          ))}
        </div>
      </nav>

      <div style={{ padding: "40px" }}>
        {selectedPage === "home" && (
          <main
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: "30px",
              borderRadius: "20px",
              backgroundImage: "url('/salon1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <header
              style={{
                textAlign: "center",
                marginBottom: "30px",
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h1 style={{ fontSize: "2.5rem", color: "#d50000" }}>
                Salon Booking Service
              </h1>
              <p style={{ fontSize: "1rem", color: "#555" }}>
                Transform your style — your dream hair appointment is just a
                click away!
              </p>
            </header>
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                padding: "20px",
                borderRadius: "16px",
              }}
            >
              {step === 1 && (
                <>
                  <label style={{ fontWeight: "bold" }}>Treatments:</label>
                  <select
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    style={{
                      width: "100%",
                      marginBottom: "15px",
                      padding: "10px",
                    }}
                  >
                    <option value="">Select treatment</option>
                    <option value="Haircut">Haircut</option>
                    <option value="Hair Color">Hair Color</option>
                    <option value="Blowout">Blowout</option>
                    <option value="Hair Treatment">Hair Treatment</option>
                  </select>
                  <div style={{ marginBottom: "20px" }}>
                    <label>
                      <input
                        type="checkbox"
                        checked={femaleOnly}
                        onChange={() => setFemaleOnly(!femaleOnly)}
                      />{" "}
                      Female stylists only
                    </label>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    style={{
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "#d50000",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "1rem",
                    }}
                  >
                    Book Appointment
                  </button>
                </>
              )}
              {step === 2 && (
                <>
                  <h2 style={{ fontSize: "1.25rem", marginBottom: "10px" }}>
                    {treatment} – $60
                  </h2>
                  <label>Select Date:</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{
                      width: "100%",
                      marginBottom: "20px",
                      padding: "10px",
                    }}
                  />
                  <div style={{ marginBottom: "20px" }}>
                    {["10:00 AM", "11:00 AM", "12:00 PM"].map((t) => (
                      <label
                        key={t}
                        style={{ display: "block", marginBottom: "8px" }}
                      >
                        <input
                          type="radio"
                          name="time"
                          value={t}
                          checked={time === t}
                          onChange={() => setTime(t)}
                        />{" "}
                        {t}
                      </label>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep(3)}
                    style={{
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "#d50000",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "1rem",
                    }}
                  >
                    Select this time
                  </button>
                </>
              )}
              {step === 3 && (
                <>
                  <h2 style={{ fontSize: "1.5rem" }}>
                    Your appointment is confirmed!
                  </h2>
                  <p style={{ marginBottom: "10px" }}>
                    {treatment} with a {femaleOnly ? "Female " : ""}Stylist on{" "}
                    {date} at {time}
                  </p>
                  <div
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    <p>
                      <strong>Payment Details:</strong>
                    </p>
                    <p>381 Guerrero St</p>
                    <p>$75</p>
                  </div>
                  <label>
                    <input type="checkbox" defaultChecked /> Text me a reminder
                  </label>
                  <button
                    onClick={() => setStep(4)}
                    style={{
                      marginTop: "20px",
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "#d50000",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "1rem",
                    }}
                  >
                    Done
                  </button>
                </>
              )}
              {step === 4 && (
                <>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      textAlign: "center",
                      color: "#4CAF50",
                    }}
                  >
                    Thank you for booking with us!
                  </h2>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "1rem",
                      marginTop: "10px",
                    }}
                  >
                    A confirmation email will be sent to you shortly.
                  </p>
                  <button
                    onClick={() => setStep(1)}
                    style={{
                      marginTop: "30px",
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "#d50000",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "1rem",
                    }}
                  >
                    Book Another Appointment
                  </button>
                </>
              )}
            </div>
          </main>
        )}

        {selectedPage === "about" && (
          <section
            style={{
              padding: "40px",
              maxWidth: "800px",
              margin: "0 auto",
              backgroundColor: "#fff",
              borderRadius: "20px",
            }}
          >
            <h2 style={{ color: "#d50000" }}>About Us</h2>
            <p>
              BellaGlow Salon is more than just a salon — it's a beauty
              experience built on passion, trust, and creativity.
            </p>
            <p>
              Our journey began over a decade ago with a shared dream to provide
              a space where everyone feels confident, welcome, and radiant.
              We’ve grown from a small neighborhood studio into a well-loved
              salon known for excellence and care.
            </p>
            <p>
              At BellaGlow, every haircut, color, and style is personalized by
              professionals who listen and care. We’re here to celebrate your
              beauty, your story, and your glow.
            </p>
          </section>
        )}

        {selectedPage === "price" && (
          <section
            style={{
              padding: "40px",
              maxWidth: "1000px",
              margin: "0 auto",
              backgroundColor: "#fff",
              borderRadius: "20px",
            }}
          >
            <h2 style={{ color: "#d50000" }}>Price List</h2>
            <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
              <img
                src="/salon.jpg"
                alt="Salon"
                style={{ width: "50%", borderRadius: "16px" }}
              />
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  flex: 1,
                  fontSize: "1.1rem",
                }}
              >
                <li>
                  <strong>Haircut:</strong> $25 & up
                </li>
                <li>
                  <strong>Hair Color:</strong> $40 & up
                </li>
                <li>
                  <strong>Highlights:</strong> $35 & up
                </li>
                <li>
                  <strong>Wash & Style:</strong> $20 & up
                </li>
                <li>
                  <strong>Blowout:</strong> $30 & up
                </li>
                <li>
                  <strong>Deep Conditioning:</strong> $18 & up
                </li>
                <li>
                  <strong>Ponytails:</strong> $20 & up
                </li>
                <li>
                  <strong>Keratin Treatment:</strong> $50 & up
                </li>
                <li>
                  <strong>Hair Extensions:</strong> $60 & up
                </li>
                <li>
                  <strong>Permanent Color:</strong> $45 & up
                </li>
                <li>
                  <strong>Color Rinse:</strong> $25 & up
                </li>
              </ul>
            </div>
          </section>
        )}

        {selectedPage === "location" && (
          <section
            style={{
              padding: "40px",
              maxWidth: "800px",
              margin: "0 auto",
              backgroundColor: "#fff",
              borderRadius: "20px",
            }}
          >
            <h2 style={{ color: "#d50000" }}>Location</h2>
            <iframe
              title="salon-map"
              src="https://maps.google.com/maps?q=1600%20Amphitheatre%20Parkway,%20Mountain%20View,%20CA&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </section>
        )}

        {selectedPage === "contact" && (
          <section
            style={{
              padding: "40px",
              maxWidth: "800px",
              margin: "0 auto",
              backgroundColor: "#fff",
              borderRadius: "20px",
            }}
          >
            <h2 style={{ color: "#d50000" }}>Contact Us</h2>
            <form>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
              >
                <input
                  type="text"
                  placeholder="First Name"
                  style={{ flex: 1, padding: "10px" }}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  style={{ flex: 1, padding: "10px" }}
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
                required
              />
              <textarea
                placeholder="Message"
                style={{
                  width: "100%",
                  padding: "10px",
                  height: "120px",
                  marginBottom: "10px",
                }}
              ></textarea>
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#004aad",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                SUBMIT
              </button>
            </form>
          </section>
        )}
      </div>
    </div>
  );
}
