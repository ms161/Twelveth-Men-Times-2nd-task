const products = [
  {
    name: "Product 1",
    category: "Electronics",
    price: 799.99,
    available: true,
  },
  {
    name: "Product 2",
    category: "Books",
    price: 19.99,
    available: true,
  },
  {
    name: "Product 3",
    category: "Home & Kitchen",
    price: 49.99,
    available: false,
  },
  {
    name: "Product 4",
    category: "Toys & Games",
    price: 29.99,
    available: true,
  },
  {
    name: "Product 5",
    category: "Electronics",
    price: 599.99,
    available: true,
  },
  {
    name: "Product 6",
    category: "Books",
    price: 9.99,
    available: true,
  },
];

let ele = document.getElementById("items");
let filter = document.getElementById("filter");
console.log(filter.value);
console.log(filter);

filter.addEventListener("change", () => {
    ele.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
      let div = document.createElement("div");
      div.innerHTML = `  <div class="flex p-4 items-end w-80 h-96 bg-blue-700">
      <div class="border-t flex items-center  grid grid-cols-2 text-white font-serif  w-80 border-blac h-20 ">
       <p>Name: ${products[i].name}</p>
       <p>Category: ${products[i].category}</p>
       <p>Price: ${products[i].price}</p>
       <p>${products[i].available?'Availabe':'Not available'}</p>
      </div>
      </div>`
  
      console.log(filter.value === products[i].category);
      if (filter.value === products[i].category) {
        ele.appendChild(div);
      } else if (filter.value == "all") {
        ele.appendChild(div);
      }
    }
  });

for (let i = 0; i < products.length; i++) {
  let div = document.createElement("div");
  div.innerHTML = `  <div class="flex rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out items-end  w-86 h-96 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 p-1">
  <div class="border-t flex items-center  grid grid-cols-2 text-white font-serif  w-80 border-white h-20 ">
   <p>Name: ${products[i].name}</p>
   <p>Category: ${products[i].category}</p>
   <p>Price: ${products[i].price}</p>
   <p>${products[i].available?'Availabe':'Not available'}</p>
  </div>
  </div>`
  ele.appendChild(div)
}
