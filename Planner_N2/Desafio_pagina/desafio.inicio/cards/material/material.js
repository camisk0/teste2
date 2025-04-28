// Interação com modal
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const close = document.querySelector(".close");
  
    document.querySelectorAll(".clickable-image").forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = img.src;
      });
    });
  
    close.onclick = () => {
      modal.style.display = "none";
    };
  
    window.onclick = event => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });
  