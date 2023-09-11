const toggleImages = document.querySelectorAll(".toggle-img");

toggleImages.forEach((toggleImg) => {
  toggleImg.addEventListener("click", function () {
    const targetId = this.dataset.target;
    const targetBox = document.getElementById(targetId);
    const id = this.id;

    axios
      .get(
        `https://api.artic.edu/api/v1/artworks/${id}?fields=title,artist_title,date_display,medium_display,description`
      )
      .then((response) => {
        const data = response.data;
        targetBox.querySelector(".title").textContent = data.data.title;
        targetBox.querySelector(".artist").textContent = data.data.artist_title;
        targetBox.querySelector(".year").textContent = data.data.date_display;
        targetBox.querySelector(".medium").textContent =
          data.data.medium_display;
        targetBox.querySelector(".description").innerHTML =
          data.data.description;

        if (
          targetBox.style.display === "none" ||
          targetBox.style.display === ""
        ) {
          targetBox.style.display = "block";
        } else {
          targetBox.style.display = "none";
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  });
});
