// 1.შექმენით index.html და app.js ფაილები. შემოტანეთ app.js html-ში.
const ITEMS_PER_PAGE = 50;
const name = "Giorgi";
const Name = "Giorgi";
// 2. app.js ფაილში შექმენით ცვლადები და მიანიჭეთ მარტივი ტიპები (Primitive types). გამოიყენეთ ყველა მარტივი ტიპი რაც განვიხილეთ.
const age = 25;
const isStudent = true;
const userName = "Giorgi";
let myUndefined = undefined;
let test;
let myNull = null;
// 3. დამატებით შექმენით ცვლადები name,  dayOfWeek, favoriteActivity და მიანიჭეთ თქვენი სახელი, კვირის დღე, თქვენი ფავორიტი აქტივობა.
const dayOfWeek = "Saturday";
const favoriteActivity = "Coding";
// 4. #3 დავალებაში შექმნილი ცვლადებისგან შექმენით წინადადება:
// "Hi, my name is (აქ name ცვლადი)! Today is ( აქ dayOfWeek ცვლადი), a perfect day for (აქ favoriteActivity ცვლადი)."
let version1 = `Hi, my name is ${name}! Today is ${dayOfWeek}, a perfect day for ${favoriteActivity}.`;

const version2 =
	"Hi, my name is " +
	name +
	"! Today is " +
	dayOfWeek +
	", a perfect day for " +
	favoriteActivity +
	".";

// მასივი, array
const prices = [400, 300, 100, 400, 700];
console.log(prices);
const myArr = [
	1,
	"test",
	userName,
	true,
	version1,
	null,
	,
	undefined,
	[1, 2, 3],
];
// console.log(myArr);

const myArr2 = [[1, 2, 3, [4, 5, 6, [7, 8, 9]]], [4, 5, 6], 34, [7, 8, 9]];
// console.log(myArr2);
// console.log(myArr2[0][3][3][0]);

// console.table(prices);
// console.clear();
// console.error("Error");
// console.warn("Warning");

// console.log(typeof prices); //object

// ინდექსი, index
const elIndex = 2;

const firstPrice = prices[0];

const firstPrice2 = prices.at(0);
// console.log(firstPrice2);
const pricesLength = prices.length;
const lastPrice = prices[pricesLength - 1];
const lastPrice2 = prices.at(-1);
// console.log(lastPrice2);

const elAtIndex = prices[elIndex];
const elAtIndex2 = prices.at(elIndex);
// console.log(elAtIndex);

prices.push(1000);
// console.log(prices);
prices.unshift(2000);
// console.log(prices);
const removedLAstItem = prices.pop();
// console.log(prices);
// console.log(removedLAstItem);
const removedFirstItem = prices.shift();
// console.log(prices);
// console.log(removedFirstItem);

// property - თვისება, ცვლადი  - length
// method - მეთოდი, ფუნქცია   -at, pop, push, shift, unshift

const product = {
	price: 500,
	name: "Laptop",
	brand: "Apple",
	quantity: 500,
	isAvailable: true,
	shop: [
		{
			name: "Apple Store",
			location: "Tbilisi",
		},
		{
			name: "Apple Store",
			location: "Batumi",
		},
	],
};

console.log(product);
// console.log(typeof product);

const getProperty = "quantity";
const productName = product.name;
const productPrice = product.price;
const productShop = product.shop;
const productQ = product.getProperty;
// console.log(productQ);

const productQuantity = product[getProperty];
// console.log(productQuantity);

product.quantity = 1;
product.brand = "Samsung";
product.isAvailable = false;

product.color = ["red", "green", "blue"];

// delete product.brand;

const green = product.color[1];
// console.log(green);

const firstShop = product.shop[1].location;
// console.log(firstShop);

let version3 = version1;
console.log(version3);
console.log(version1);

version3 = "Hello";
version1 = "version1";

console.log(version3);
console.log(version1);

const product2 = { ...product, quantity: 20, dimensions: "15x10x5" };
const prices2 = [...prices];

console.log(product2);
console.log(product);
console.log("=============");

product2.name = "Phone";
product.price = 2000;

console.log(product2);
console.log(product);

const productsArray = [
	product,
	{
		price: 500,
		name: "phone",
		brand: "sampsung",
		quantity: 500,
		isAvailable: true,
		shop: [
			{
				name: "Apple Store",
				location: "Tbilisi",
			},
			{
				name: "Apple Store",
				location: "Batumi",
			},
		],
	},
];

// console.log(productsArray);
