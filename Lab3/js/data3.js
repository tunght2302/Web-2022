const productList = [
    {
      id: 1,
      name: "Fresh and Healthy Mixed Mayonnaise Salad",
      img: "img/image 26 (1).png",
      time: 30,
      type: "Add To Cart",
    },
    {
      id: 2,
      name: "The Creamiest Creamy Chicken",
      img: "img/image 26 (2).png",
      time: 30,
      type: "Add To Cart",
    },
    {
      id: 3,
      name: "Fruity Pancake with Orange & Blueberry",
      img: "img/image 26 (3).png",
      time: 30,
      type: "Add To Cart",
    },
    {
      id: 4,
      name: "Fresh and Healthy Mixed Mayonnaise Salad",
      img: "img/image 26 (1).png",
      time: 30,
      type: "Add To Cart",
    },
    {
      id: 5,
      name: "The Creamiest Creamy Chicken",
      img: "img/image 26 (2).png",
      time: 30,
      type: "Add To Cart",
    },
    {
      id: 6,
      name: "Fruity Pancake with Orange & Blueberry",
      img: "img/image 26 (3).png",
      time: 30,
      type: "Add To Cart",
    },
  ];
  
  function showProducts(products) {
    if (!Array.isArray(products) || products.length == 0) return false;
  
    let result = "";
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      result += `
          <div>
          <div class="product-img" >
              <a href="./detail.html?id=${product.id}">
                  <img class="rounded-xl" src="${product.img}" alt="" />
              </a>
          </div>
          <div class="product-content inline-block mt-3 w-full 
          column shadow transition ease-in-out duration-300 hover:shadow-xl h-40">
              <h3><a class="text-[18px] font-semibold mt-10 " href="./detail.html?id=${product.id}">${product.name}</a></h3>
                 <div>
                 <span class="font-bold text-[#F54748] inline-block" >$ ${product.time}</span>
                 </div>
                 <div class=""><a class="text-white bg-black w-full px-[94px] text-[14px] py-3 rounleading-[50px]ded-md  " href="./detail.html?id=${product.id}">
                 ${product.type}
                 </a>
                 </div>
                  
              
          </div>
      </div>
          `;
    }
    return result;
  }
  
  document.getElementById("products").innerHTML = showProducts(productList);