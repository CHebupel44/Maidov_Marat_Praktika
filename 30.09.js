
//Задание 1. Базовая работа с Set и spread

const siteA = ['anna', 'ivan', 'anna', 'petr', 'olga'];
const siteB = ['ivan', 'anna', 'sergey', 'olga', 'ivan'];

const setA = new Set(siteA);
console.log('Set для siteA:', setA);

console.log('УниКАЛьных пользователей:', setA.size);

console.log('Заходил ли petr на siteA?:', setA.has('petr'));

const allVisitors = new Set([...siteA, ...siteB]);

const allVisitorsArray = [...allVisitors];
console.log('Итоговый массив без дубликатов:', allVisitorsArray);
--------------------------------------------------------------------



//Задание 2.

const pb = new Map();

pb.set('Ivanov', '+7-900-111-22-33');
pb.set('Petrova', '+7-900-444-55-66');
pb.set('Sidorov', '+7-900-777-88-99');

const num = pb.get('Petrova');
console.log(`Номер Петровой: ${num}`);

pb.delete('Sidorov');

console.log(`Итоговый размер справочника: ${pb.size}`);
console.log(`Остался ли Sidorov в справочнике? ${pb.has('Sidorov')}`);

const names = [...pb.keys()];
console.log('Массив всех имён сотрудников:', names);

console.log('--- forEach ---');
pb.forEach((tel, name) => console.log(`${name}: ${tel}`));

--------------------------------------------------------------------

//Задание 3.

const list = [
  { name: 'Anna', grade: 5 },
  { name: 'Ivan', grade: 4 },
  { name: 'Anna', grade: 5 },
  { name: 'Petr', grade: 3 },
  { name: 'Olga', grade: 4 },
  { name: 'Ivan', grade: 4 }
];

const unique = [...new Set(list.map(s => JSON.stringify(s)))].map(str => JSON.parse(str));

const map = new Map();

unique.forEach(s => {
  if (!map.has(s.grade)) map.set(s.grade, []);
  map.get(s.grade).push(s.name);
});

map.forEach((names, g) => console.log(`Оценка ${g}: ${names.join(', ')}`));

const grades = [...map.keys()];
console.log('Уникальные оценки:', grades);
--------------------------------------------------------------------

//Задание 4.

function sumTo(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumTo(n - 1);
}

console.log(sumTo(1)); // Вывод: 1
console.log(sumTo(3)); // Вывод: 6
console.log(sumTo(5)); // Вывод: 15
--------------------------------------------------------------------

//Задание 5.

function stepen(a, n) {
    if (n === 0) {
        return 1;
    }
    return a * stepen(a, n - 1);
}

console.log(stepen(2, 0));
console.log(stepen(2, 3));
console.log(stepen(3, 2));
console.log(stepen(5, 3));
--------------------------------------------------------------------