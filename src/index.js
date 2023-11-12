let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(toys => {
    const toyCollection = document.querySelector("#toy-collection");

    toys.forEach(toy => {
      const card = document.createElement('div');
      card.className = "card";

      const name = document.createElement('h2');
      name.textContent = toy.name;
      if (!toyCollection.contains(card)) {
        card.appendChild(name);
        toyCollection.appendChild(card);
      }
      const image = document.createElement('img');
      image.src = toy.image;
      image.className = ("toy-avatar");
      const likes = document.createElement("p");
        likes.textContent = `${toy.likes} Likes`;

        const button = document.createElement("button");
        button.textContent = "Like";
        button.addEventListener("click", () => {
          // Handle like button click event here
        });

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(likes);
        card.appendChild(button);

        toyCollection.appendChild(card);
    })
  })
.catch(error => {
  console.error(error)
})

})