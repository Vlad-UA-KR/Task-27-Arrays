// // -------------------Task-1-------------------------

// let shoppingList = [
// 	{
// 		name: 'Молоко',
// 		need: 1,
// 		amount: 0,
// 	},
// 	{
// 		name: 'Хлеб',
// 		need: 1,
// 		amount: 0,
// 	},
// 	{
// 		name: 'Яблоки',
// 		need: 1,
// 		amount: 0,
// 	},
// 	{
// 		name: 'Сметана',
// 		need: 1,
// 		amount: 1,
// 	},
// 	{
// 		name: 'Сахар',
// 		need: 1,
// 		amount: 1,
// 	},
// ]

// function outputOnScreen(arr) {

// 	let result = arr.sort((a) => {

// 		if (a.need > a.amount) {
// 			return -1
// 		}
// 		if (a.need <= a.amount) {
// 			return 1
// 		}
// 	})

// 	console.log(result)
// }

// function addItem(name = prompt('Что нужно купить?'), need = +prompt('Колличество'), amount = +prompt('Сколько куплено?')) {


// 	for (let item of shoppingList) {

// 		if (item.name == name) {
// 			item.need += need;
// 			break;

// 		} else {
// 			newItem = { name, need, amount };
// 			shoppingList.push(newItem);
// 			break;
// 		}
// 	}
// }

// function buyItem(name = prompt('Что нужно купить?')) {
// 	for (let item of shoppingList) {
// 		if (item.name == name) {
// 			item.amount = item.need;
// 			break;
// 		} else {
// 			console.log('Такого продукта нет в списке!');
// 			question = confirm(`Хотите добавить - ${name} в список покупок?`);
// 			if (question == true) {
// 				addItem(name, need = +prompt('Колличество'), amount = 0);
// 				break;
// 			} else {
// 				break;
// 			}
// 		}
// 	}
// }

// addItem();
// buyItem();
// outputOnScreen(shoppingList);

// // -------------------Task-2-------------------------

// let check = [
// 	{
// 		name: 'Молоко',
// 		amount: 1,
// 		price: 25,
// 	},
// 	{
// 		name: 'Гречка',
// 		amount: 1,
// 		price: 90,
// 	},
// 	{
// 		name: 'Хлеб',
// 		amount: 1,
// 		price: 20,
// 	},
// 	{
// 		name: 'Сметана',
// 		amount: 1,
// 		price: 36,
// 	},
// 	{
// 		name: 'Печенье',
// 		amount: 1,
// 		price: 60,
// 	},
// 	{
// 		name: 'Cахар',
// 		amount: 1,
// 		price: 31,
// 	},
// 	{
// 		name: 'Колбаса',
// 		amount: 1,
// 		price: 120,
// 	},
// ];

// function outputOnScreen(array) {

// 	let newArray = [];

// 	for (let item of array) {
// 		item = `\n ${item.name} : ${item.amount} = ${item.price}`;
// 		newArray.push(item);
// 	}

// 	alert(newArray);
// };

// function sum(array) {

// 	let newArray = array.map((item) => item.price);
// 	let summa = newArray.reduce((sum, current) => sum + current, 0);
// 	return summa;
// }

// function mostExpensive(array) {

// 	let mostEx = array.sort((a, b) => a.price > b.price ? -1 : 1);
// 	alert(mostEx[0].price);
// }

// function averagePrice(array) {

// 	let average = (sum(array) / array.length).toFixed(2);
// 	alert(average);
// }

// averagePrice(check);
// mostExpensive(check);
// sum(check);
// outputOnScreen(check);

// // -------------------Task-3-------------------------

// let styles = [
// 	{
// 		name: 'color',
// 		value: 'red',
// 	},
// 	{
// 		name: 'font-size',
// 		value: '30px',
// 	},
// 	{
// 		name: 'background-color',
// 		value: 'green',
// 	},
// 	{
// 		name: 'text-align',
// 		value: 'center',
// 	},
// 	{
// 		name: 'text-transform',
// 		value: 'uppercase',
// 	},
// ];

// function addToHtml(array, html) {

// 	let div = document.createElement('div');
// 	document.body.prepend(div);
// 	div.innerHTML = `<p>${html}</p>`;
// 	let p = div.firstElementChild;

// 	let newArray = array.map((item) => `${item.name} : ${item.value};`);

// 	let string = newArray.join('');

// 	p.style.cssText = `${string}`

// }

// let text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, eaque voluptas. Culpa doloremque obcaecati quam hic harum sapiente esse numquam! Atque accusamus reiciendis cum mollitia assumenda libero praesentium. Quos iste quam quasi quisquam ab itaque cumque, esse eius natus dolorem maiores error ex ratione!';

// addToHtml(styles, text);

// // -------------------Task-4-------------------------

let lectureHall = [
	{
		lectureName: 'One',
		amountOfSeats: 20,
		facultName: 'Front',
	},
	{
		lectureName: 'Two',
		amountOfSeats: 12,
		facultName: 'Back',
	},
	{
		lectureName: 'Three',
		amountOfSeats: 15,
		facultName: 'Ux/Ui',
	},
	{
		lectureName: 'Four',
		amountOfSeats: 17,
		facultName: 'Back',
	},
	{
		lectureName: 'Five',
		amountOfSeats: 15,
		facultName: 'Front',
	},
]

let groupBack = {
	name: 'Backs',
	numberOfStudents: 14,
	facultName: 'Back',
}

let groupFront = {
	name: 'Fronts',
	numberOfStudents: 14,
	facultName: 'Front',
}

function outputOnScreenAll(array) {
	console.log(array);
};

function outputOnScreenFacult(array, name) {
	let result = array.filter((item) => item.facultName == name);
	console.log(result);
};

function outputOnScreenLectures(array, object) {

	let result = array.filter((item) => item.facultName == object.facultName && item.amountOfSeats > object.numberOfStudents);

	console.log(result);
}

function sortAmountOfSeats(array) {
	let result = array.sort((a, b) => a.amountOfSeats < b.amountOfSeats ? -1 : 1);
	console.log(result);
}

function sortLectureName(array) {
	let result = array.sort((a, b) => a.lectureName < b.lectureName ? -1 : 1);
	console.log(result);
}

// sortLectureName(lectureHall);
// sortAmountOfSeats(lectureHall);
// outputOnScreenLectures(lectureHall, groupFront);
// outputOnScreen(lectureHall);
// outputOnScreenFacult(lectureHall, 'Front');