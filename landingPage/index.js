let url=async()=>{
    let data =await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');

    let finalData=await data.json();

    finalData.map((url)=>{
        let body=document.body
        let div=document.createElement("div")
        div.className="product"
        div.innerHTML+=`
        <div class="cards">
        <img class="image" src="${url.api_featured_image}">
        <div class="items-part1>
        <h2 class="card-heading">${url.brand}- ${url.name}</h2>
    
        <div><h6 class="price">Price ${url.price}${url.price_sign}</h6></div>
        </div>
        <div>
        <button class="btn">Buy Now</button>
       </div>

        </div>
        `
        document.getElementById("pro").appendChild(div);
    })


}
url();

const searchInput = document.getElementById("search");
searchInput.addEventListener("keyup", ()=>{
  

  const searchItem = searchInput.value.toLowerCase();
  const products = document.querySelectorAll(".product");

 
  products.forEach((product) => {
    const productName = product.querySelector("h2").textContent.toLowerCase();

    
    if (productName.includes(searchItem)) {
      product.style.display = "Flex";
    } else {
      product.style.display = "none";
    }
  });
});