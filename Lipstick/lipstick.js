let x=async()=>{
    let data = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick");
    let finalData=await data.json()
    console.log(finalData)

    finalData.map((x)=>{
        let body=document.body
        let section=document.createElement("section")
        section.className="lipstick"
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
x();