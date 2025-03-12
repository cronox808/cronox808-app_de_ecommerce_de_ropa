document.addEventListener("DOMContentLoaded", function () {
  const payButton = document.querySelector(".pay-button");

  if (payButton) {
      payButton.addEventListener("click", function () {
          Swal.fire({
              title: "Drag me!",
              icon: "success",
              didOpen: (toast) => {
                  toast.draggable = true;
              }
          });
      });
  }
});
