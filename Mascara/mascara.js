let x=async()=>{
    let data=await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara")
    let finalData=await data.json()

    finalData.map((x)=>{
        let body=document.body
        let section=document.createElement("section")
        section.className="mascara"

        section.innerHTML+=`
        <div class="cards">
         <img class="image" src="${x.api_featured_image}">
         <div class="items-part1>
         <h2 class="card-heading">${x.brand}- ${x.name}</h2>
    
         <div><h6 class="price">Price ${x.price}${x.price_sign}</h6></div>
         </div>
         <div>
         <button class="btn">Buy Now</button>
        </div>

         </div>
        `
        document.getElementById("pro").appendChild(section)

    })

}
x()


const searchInput = document.getElementById("search");
searchInput.addEventListener("keyup", ()=>{
  

  const searchItem = searchInput.value.toLowerCase();
  const products = document.querySelectorAll(".mascara");

 
  products.forEach((m) => {
    const productName = m.querySelector("h2").textContent.toLowerCase();

    
    if (productName.includes(searchItem)) {
      m.style.display = "Flex";
    } else {
      m.style.display = "none";
    }
  });
});