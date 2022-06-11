const productList = [
    {
        id: 1,
        name: "Breakfast",
        img: "./img/f1.png",
        time: 30,
        type: "snack",
    },
    {
        id: 2,
        name: "Vegan",
        img: "./img/f2.png",
        time: 30,
        type: "snack",
    },
    {
        id: 3,
        name: "Meat",
        img: "./img/f3.png",
        time: 30,
        type: "snack",
    },
    {
        id: 4,
        name: "Dessert",
        img: "./img/f4.png",
        time: 30,
        type: "snack",
    },
    {
        id: 5,
        name: "Lunch",
        img: "./img/f5.png",
        time: 30,
        type: "snack",
    },
    {
        id: 6,
        name: "Chocolate",
        img: "./img/f6.png",
        time: 30,
        type: "snack",
    },
];


function showProducts(products) {
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += ` <div
      class="pb-2 shadow hover:shadow-xl duration-300 rounded-3xl bg-gray-50"
    >
    <a href="./detail.html?id=${product.id}"> <img src="${product.img}" class="w-full rounded-3xl" alt="" /></a>
      <h3 class="my-4 ml-2 text-lg font-bold text-red-600">
      <a href="./detail.html?id=${product.id}">${product.name}</a>
      </h3>
      <div class="flex ml-4">
        <span class="flex mr-8 text-base font-medium text-[#5D5D5D]"
          ><img src="images/ForkKnife.png" class="mr-2" alt="" />${product.time}
          Minutes</span
        ><span class="flex text-base font-medium text-[#5D5D5D]"
          ><img src="images/Timer.png" class="mr-2" alt="" />${product.type}</span
        >
      </div>
    </div>`;
    }
    return result;
}

document.getElementById("products").innerHTML = showProducts(productList);