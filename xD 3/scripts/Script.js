let products = {
  data: [
    {
      productName: "Asics NovaBlast 3",
      category: "sneakers",
      price: "3100",
      image: "Asics_NovaBlast_3.jpeg",
    },
    {
      productName: "Asics Gel-Nimbus 24",
      category: "sneakers",
      price: "3000",
      image: "Asics_Gel-Nimbus_24.png",
    },
    {
      productName: "Asics Gel-Cumulus 24",
      category: "sneakers",
      price: "2900",
      image: "Asics_Gel-Cumulus_24.jpg",
    },
    {
      productName: "М’ЯЧ PRESTIGE FOOTBALL",
      category: "equipment",
      price: "500",
      image: "5.webp",
    },
    {
      productName: "ULTRA LIGHT FOOTBALL ANKLE GUARDS",
      category: "equipment",
      price: "300",
      image: "6.webp",
    },
     {
      productName: "Puma Loungewear Suit TR",
      category: "suits",
      price: "1100",
      image: "1.jpeg",
    },
    
    {
      productName: "Adidas Terrex Soulstride",
      category: "sneakers",
      price: "2400",
      image: "Adidas_Terrex_Soulstride.jpeg",
    },

    {
      productName: "М’ЯЧ BIG CAT FOOTBALL",
      category: "equipment",
      price: "800",
      image: "7.webp",
    },

    {
      productName: "BASEBALL TRICOT MEN'S TRACKSUIT",
      category: "suits",
      price: "1200",
      image: "2.webp",
    },
     {
      productName: "INDIVIDUALRISE MEN'S FOOTBALL TRACKSUIT",
      category: "suits",
      price: "900",
      image: "3.webp",
    },
    
    {
      productName: "Nike React Infinity Run",
      category: "sneakers",
      price: "30",
      image: "Nike_React_Infinity_Run.jpg",
    },
    {
      productName: "LUXE SPORT T7 BODYSUIT WOMEN",
      category: "suits",
      price: "1800",
      image: "4.webp",
    },
    {
      productName: "ELASTIC TRAINING EXERCISE BANDS",
      category: "equipment",
      price: "500",
      image: "9.webp",
    },
    {
      productName: "New Balance Nirel V5",
      category: "sneakers",
      price: "3900",
      image: "New_Balance_Nirel_V5.jpg",
    }, 
    {
      productName: "PUMA SHAKER BOTTLE",
      category: "equipment",
      price: "250",
      image: "8.webp",
    },
  ],
};


for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "₴" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};




