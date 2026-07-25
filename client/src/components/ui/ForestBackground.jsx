import "./ForestBackground.css";

const particles = [
  { left: "5%", delay: "0s", duration: "9s" },
  { left: "12%", delay: "1s", duration: "10s" },
  { left: "18%", delay: "2s", duration: "8s" },
  { left: "25%", delay: "3s", duration: "11s" },
  { left: "32%", delay: "1.5s", duration: "9s" },
  { left: "40%", delay: "4s", duration: "12s" },
  { left: "48%", delay: "2.5s", duration: "8s" },
  { left: "55%", delay: "5s", duration: "10s" },
  { left: "62%", delay: "3.5s", duration: "11s" },
  { left: "70%", delay: "1s", duration: "9s" },
  { left: "78%", delay: "4.5s", duration: "12s" },
  { left: "86%", delay: "2s", duration: "10s" },
  { left: "94%", delay: "5.5s", duration: "8s" }
];

function ForestBackground() {
  return (
    <div className="forest-bg">

      <div className="forest-image"></div>

      <div className="forest-overlay"></div>

      <div className="fog"></div>

      <div className="light light-1"></div>
      <div className="light light-2"></div>
      <div className="light light-3"></div>

      <div className="particles">
        {particles.map((particle, index) => (
          <span
            key={index}
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

    </div>
  );
}

export default ForestBackground;