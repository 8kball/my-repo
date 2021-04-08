function createDaysOfTheWeek() {
	const weekDays = [
		'Domingo',
		'Segunda',
		'Terça',
		'Quarta',
		'Quinta',
		'Sexta',
		'Sábado',
	];
	const weekDaysList = document.querySelector('.week-days');

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement('li');
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	}
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1
function createDaysOfTheMonth() {
	const dezDaysList = [
		29,
		30,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		20,
		21,
		22,
		23,
		24,
		25,
		26,
		27,
		28,
		29,
		30,
		31,
	];
	const daysList = document.querySelector('#days');
	dezDaysList.forEach((day) => {
		let child = document.createElement('li');
		child.classList.add('day');
		if (/2[45]|31/.test(day)) {
			child.classList.add('holiday');
		}
		if (/^4|1[18]|25$/.test(day)) {
			child.classList.add('friday');
		}
		child.innerText = day;
		daysList.appendChild(child);
	});
}

createDaysOfTheMonth();

// Exercício 2
function createHolidayButton(str) {
	const buttonsContainer = document.querySelector('.buttons-container');
	let button = document.createElement('button');
	button.id = 'btn-holiday';
	button.innerText = str;
	buttonsContainer.appendChild(button);
}

createHolidayButton('Feriados');

// Exercício 3

const btnHoliday = document.querySelector('#btn-holiday');

btnHoliday.addEventListener('click', () => {
	const holidays = document.querySelectorAll('.holiday');
	holidays.forEach((holiday) => {
		holiday.classList.toggle('active');
	});
});

// Exercício 4

function createFridayButton(str) {
	const buttonsContainer = document.querySelector('.buttons-container');
	let button = document.createElement('button');
	button.id = 'btn-friday';
	button.innerText = 'Sexta-feira';
	buttonsContainer.appendChild(button);
}

createFridayButton('Sexta-feira');

// Exercício 5

const btnFriday = document.querySelector('#btn-friday');
const days = [...document.querySelectorAll('.friday')].map(
	(day) => day.innerText
);

btnFriday.addEventListener('click', () => {
	document.querySelectorAll('.friday').forEach((day, i) => {
		if (day.innerText == 'Mufasa!') {
			day.innerText = days[i];
		} else {
			day.innerText = 'Mufasa!';
		}
	});
});

// Exercício 6

const daysList = document.querySelectorAll('.day');
daysList.forEach((day) => {
	day.addEventListener('mouseenter', (e) => {
		e.target.classList.toggle('zoom');
	});
	day.addEventListener('mouseleave', (e) => {
		e.target.classList.toggle('zoom');
	});
});

// Exercício 7

function addCustomTask(task) {
	const myTasks = document.querySelector('.my-tasks');
	let span = document.createElement('span');
	span.innerText = task;
	myTasks.appendChild(span);
}

addCustomTask('Task 1');

// Exercício 8

function addLabelWithColor(color) {
	const myTasks = document.querySelector('.my-tasks');
	let div = document.createElement('div');
	div.style.backgroundColor = color;
	div.classList.add('task');
	myTasks.appendChild(div);
}

addLabelWithColor('crimson');

// Exercício 9

const tasksDiv = document.querySelector('.my-tasks div');
tasksDiv.addEventListener('click', (e) => {
	e.target.classList.toggle('selected');
});

// Exercício 10

daysList.forEach((day) => {
	day.addEventListener('click', (e) => {
		if (e.target.style.color == 'crimson') {
			e.target.style.color = 'rgb(119, 119, 119)';
		} else {
			e.target.style.color = tasksDiv.style.backgroundColor;
		}
	});
});
