window.addEventListener("mousemove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 28;
  document.documentElement.style.setProperty("--p1", `${x * 0.18}px`);
  document.documentElement.style.setProperty("--p2", `${x * 0.34}px`);
  document.documentElement.style.setProperty("--p3", `${x * 0.52}px`);
  document.documentElement.style.setProperty("--p4", `${x * 0.8}px`);
  document.documentElement.style.setProperty("--p5", `${x * 1.05}px`);
  document.documentElement.style.setProperty("--p6", `${x * 1.2}px`);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      document.querySelectorAll("details").forEach((other) => {
        if (other !== detail) other.open = false;
      });
    }
  });
});

document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".navlinks").classList.toggle("open");
});
