import React, { useEffect, useState } from "react";
import { clients } from "../Data/Data";
import "./Client.css";
import Blog from "../Blog/Blog";

const itemsPerPage = 3;

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(clients.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 60000); // every 60 seconds
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (<>
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="text-primary mb-3">What Clients Say</h2>
        <p className="text-muted mb-5">
          Trusted by our partners and clients across industries.
        </p>

        <div className="overflow-hidden">
          <div
            className="d-flex transition"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.8s ease-in-out",
              width: `${totalSlides * 100}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const start = slideIndex * itemsPerPage;
              const group = clients.slice(start, start + itemsPerPage);

              return (
                <div
                  className="d-flex justify-content-center w-100 gap-3"
                  key={slideIndex}
                >
                  {group.map((client) => (
                    <div className="card p-3 text-center shadow-sm" key={client.id} style={{ width: "300px" }}>
                      <img
                        src={client.image}
                        alt={client.name}
                        className="rounded-circle mx-auto mb-3"
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                      />
                      <h5 className="text-primary mb-1">{client.name}</h5>
                      <h6 className="text-muted mb-2">{client.position}</h6>
                      <p className="small text-secondary">{client.description}</p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    <Blog/> </>
  );
};

export default Client;
