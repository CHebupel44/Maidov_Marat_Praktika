
//Практика 3. Каталог товаров

const products = [
  { name: "Ноутбук", price: 75000, category: "Техника" },
  { name: "Мышь", price: 1500, category: "Аксессуары" },
  { name: "Клавиатура", price: 3500, category: "Аксессуары" },
  { name: "Монитор", price: 22000, category: "Техника" },
  { name: "Наушники", price: 5000, category: "Аксессуары" }
];

products.forEach(p => console.log(`${p.name}: ${p.price} рублей`));

const cheap = products.filter(p => p.price < 5000);
console.log(cheap);

const names = products.map(p => p.name);
console.log(names);

const tech = products.find(p => p.category === "Техника");
console.log(tech);

const sale = products.map(p => p.price * 0.9);
console.log(sale);

const accs = products
  .filter(p => p.category === "Аксессуары" && p.price <= 4000)
  .map(p => p.name);
console.log(accs);
