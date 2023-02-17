const cities = [
  {
    ID: 1,
    CityFrom: 'Киев ',
    CityTo: 'Унгены ',
  },
  {
    ID: 2,
    CityFrom: 'Резены ',
    CityTo: 'Ташкент ',
  },
  {
    ID: 3,
    CityFrom: 'Волгоград ',
    CityTo: 'Кишинев ',
  },
  {
    ID: 4,
    CityFrom: 'Бухарест ',
    CityTo: 'Бельцы  ',
  },
  {
    ID: 5,
    CityFrom: 'Москва',
    CityTo: 'Кишинев ',
  },
  {
    ID: 6,
    CityFrom: 'Вюрцбург ',
    CityTo: 'Кишинев ',
  },
  {
    ID: 7,
    CityFrom: 'Дюссельдорф ',
    CityTo: 'Кишинев ',
  },
  {
    ID: 8,
    CityFrom: 'Бреда ',
    CityTo: 'Одесса ',
  },
  {
    ID: 9,
    CityFrom: 'Маниса ',
    CityTo: 'Баку',
  },
];

const cargoDetails = [
  {
    ID: 5,
    'Отправка и прибытие': 'Украина, Киев - Молдова, Унгены',
    'Дата отправления': '2013/05/17',
    'Дата прибытия': '2013/05/20',
    _Вес: '10 тонн',
    Груз: 'Строи-материалы',
    cargoID: 1,
  },
  {
    ID: 4,
    'Отправка и прибытие': 'Молдова, Резены - Узбекистан, Ташкент',
    'Дата отправления': '2013/02/12',
    'Дата прибытия': '2013/04/25',
    _Вес: '3 тонны',
    Груз: 'Фрукты',
    cargoID: 2,
  },
  {
    ID: 117,
    'Отправка и прибытие': 'Россия, Волгоград - Молдова, Кишинев',
    'Дата отправления': '2014/01/11',
    'Дата прибытия': '2014/01/31',
    _Вес: '5 тонн',
    Груз: 'Овощи',
    cargoID: 3,
  },
  {
    ID: 20,
    'Отправка и прибытие': 'Румыния, Бухарест - Молдова, Бельцы',
    'Дата отправления': '2013/03/02',
    'Дата прибытия': '2013/03/12',
    _Вес: '1 тонна',
    Груз: 'Пластмасса',
    cargoID: 4,
  },
  {
    ID: 2,
    'Отправка и прибытие': 'Россия, Москва - Молдова, Кишинев',
    'Дата отправления': '2013/01/01',
    'Дата прибытия': '2013/01/31',
    _Вес: '7.5 тонн',
    Груз: 'Продукты питания',
    cargoID: 5,
  },
  {
    ID: 145,
    'Отправка и прибытие': 'Германия, Вюрцбург - Молдова, Кишинев',
    'Дата отправления': '2014/03/26',
    'Дата прибытия': '2014/03/27',
    _Вес: '4.3 тонны',
    Груз: '-Другой',
    cargoID: 6,
  },
  {
    ID: 72,
    'Отправка и прибытие': 'Германия, Дюссельдорф - Молдова, Кишинев',
    'Дата отправления': '2013/07/24',
    'Дата прибытия': '2014/04/30',
    _Вес: '6 тонн',
    Груз: '-Другой',
    cargoID: 7,
  },
  {
    ID: 1,
    'Отправка и прибытие': 'Нидерланды, Бреда - Украина, Одесса',
    'Дата отправления': '2013/01/15',
    'Дата прибытия': '2013/01/31',
    _Вес: '15 тонн',
    Груз: 'Генеральный груз',
    cargoID: 8,
  },
  {
    ID: 60,
    'Отправка и прибытие': 'Турция, Маниса - Азербайджан, Баку',
    'Дата отправления': '2013/06/17',
    'Дата прибытия': '2014/04/01',
    _Вес: '25 тонн',
    Груз: 'Цемент',
    cargoID: 9,
  },
];

export {
  cities,
  cargoDetails
}