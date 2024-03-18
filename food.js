const foods = [
    {
        image: "images/360_F_236036622_ctUjaJTkIANvk9pJh0s5ZJRDWbM8ggT9.jpg",
        name: "Hamburger KGZ80",
        
    },

    {
        image: "images/Без названия.png",
        name: "Coffee KGZ100",
        price: 100
    },

    {
        image: "images/Без названия.jpg",
        name: "Tea KGZ20",
    
    },

     {
        image: "images/cola-or-soda-glass-icon-vector-isolated-black-and-white-illustration-of-a-cola-glass-with-a-straw_623474-723.avif",
        name: "Cola KGZ50",
        
    },
      {
        image: "images/i.webp",
        name: "Fries KGZ40",
        
    },
       {
        image: "images/clp3954559.jpg",
        name: "Cheeseburger KGZ 120",
        
    },
];
let html = ''
foods.forEach((item) => {
    
    html += `

    <div class="firstpicture">
                <div class="image1">
                   <img src="${item.image}" class="cha"/>
                   
                </div>

                <div class="text1">${item.name}</div>
                 
                
           
            </div>
    `

    console.log(html);
});
document.querySelector(".container-grid").innerHTML=html


