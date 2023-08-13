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

for (let i = 0; i < products.length; i++) {
  let div = document.createElement("div");
  div.innerHTML = `  <div class="flex rounded-lg items-end  w-80 h-96 bg-blue-700">
  <div class="border-t flex items-center  grid grid-cols-2 text-white font-serif  w-80 border-black h-20 ">
   <p>Name: ${products[i].name}</p>
   <p>Category: ${products[i].category}</p>
   <p>Price: ${products[i].price}</p>
   <p>${products[i].available?'Availabe':'Not available'}</p>
  </div>
  </div>`
  ele.appendChild(div)
}
