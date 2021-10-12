const root = document.getElementById("root");
const container = document.createElement("div");
root.appendChild(container);
container.classList.add("uk-container-large", "uk-flex", "uk-flex-between");


for (let product of products) {
    const productCard = document.createElement("div");
    productCard.id = `${product.id}`;
    container.appendChild(productCard);
    productCard.classList.add(
        "uk-card",
        "uk-card-body",
        "uk-card-default",
        "uk-width-medium"
    );

    let title = document.createElement('p')
    title.innerText = product.title
    productCard.appendChild(title)

    let templateLiteral = `${product.rating.count}`
    console.log(templateLiteral)


    productCard.innerHTML = `
    <p class="uk-card-title" style="color: red !important; padding: 15px">${product.title}</p>
    <img src=${product.image} />
    <p>${product.description}</p>
    <p>Cost: $${product.price}</p>
    <p>${product.category}</p>
    <p>Rating: ${ratingToStars(product.rating.rate)}</p>
`;
}

function ratingToStars(rate) {
    let roundedRate = Math.floor(rate);
    let starString = "";
    // rate value is float (4.5)
    // change rate from number to ⭐
    while (roundedRate > 0) {
        starString += "⭐ ";
        roundedRate--;
    }
    return starString;
}
