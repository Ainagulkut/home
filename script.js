let goods = [
  {
    items: 'Honor 9 Lite 64 GB||4 GB RAM',
    quantity :1,
    price: 14499,
    total: 14499,
    removes:'remove'
  },

    {
    items: 'Infinix Hot S3 (Sandstone Black,32 GB',
    quantity :1,
    price: 8999,
    total: 8999,
    removes:'remove'
  },
    {
    items: 'VIVO V9 Youth (Gold, 32 GB)',
    quantity :1,
    price: 16990,
    total: 16990,
    removes:'remove'
  },
    
    
    
  
 
  
];
const tableBody = document.querySelector("tbody");
let goodsInfo = "";
for (let i = 0; i < goods.length; i++) {
  let item = goods[i];
  
  goodsInfo += ` <tr>
    <td>${item.items}</td>
    <td>${item.quantity}</td>
    <td>${item.price}</td>
    <td>${item.total}</td>
    <td>${item.removes}</td>`;
  
}
tableBody.innerHTML = goodsInfo;







