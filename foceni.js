document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".photos img");
    images.forEach(img => {
      img.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.className = "overlay";
        const bigImg = document.createElement("img");
        bigImg.src = img.src;
        overlay.appendChild(bigImg);
        document.body.appendChild(overlay);
  
        // Add fade-out effect when clicking outside the image
        overlay.addEventListener("click", (e) => {
          if (e.target === overlay) {
            overlay.style.animation = "fadeOut 0.3s forwards";
            setTimeout(() => overlay.remove(), 300); // Wait for animation to finish
          }
        });
      });
    });
  });