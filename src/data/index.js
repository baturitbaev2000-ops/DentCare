export const slides = [
  {
    id: 1,
    title: 'Безболезненное лечение',
    subtitle: 'Современная анестезия и бережный подход к каждому пациенту',
    cta: 'Записаться на приём',
    bg: 'linear-gradient(135deg, #1A6FAF 0%, #4CBAB0 100%)',
    icon: '🦷',
    
  },
  {
    id: 2,
    title: 'Детская стоматология',
    subtitle: 'Лечение зубов для детей в дружелюбной и безопасной обстановке',
    cta: 'Узнать подробнее',
    bg: 'linear-gradient(135deg, #4CBAB0 0%, #1A6FAF 100%)',
    icon: '👧',
  },
  {
    id: 3,
    title: 'Акция: профессиональная чистка',
    subtitle: 'Профессиональная чистка зубов со скидкой 20% до конца месяца',
    cta: 'Воспользоваться акцией',
    bg: 'linear-gradient(135deg, #1E2A3A 0%, #1A6FAF 100%)',
    icon: '✨',
  },
];

export const advantages = [
  { id: 1, icon: '🏆', title: '15 лет опыта', text: 'Более 15 лет успешной работы и тысячи довольных пациентов' },
  { id: 2, icon: '🔬', title: 'Современное оборудование', text: 'Цифровые технологии, 3D-диагностика и лазерное лечение' },
  { id: 3, icon: '👶', title: 'Детский приём', text: 'Специализированные детские врачи и комфортная обстановка' },
  { id: 4, icon: '💳', title: 'Страховые программы', text: 'Работаем со всеми основными страховыми компаниями' },
];

export const services = [
  { id: 1, name: 'Терапия', desc: 'Лечение кариеса, пломбирование, восстановление каналов зуба', price: 5000, category: 'adults', icon: '🦷', image: null },
  { id: 2, name: 'Ортодонтия', desc: 'Брекеты, элайнеры, ретейнеры для красивой улыбки', price: 45000, category: 'adults', icon: '😁', image: null },
  { id: 3, name: 'Имплантация', desc: 'Установка имплантов под ключ, протезирование на имплантах', price: 120000, category: 'surgery', icon: '⚙️', image: null },
  { id: 4, name: 'Отбеливание', desc: 'Zoom-отбеливание, домашнее и офисное отбеливание зубов', price: 18000, category: 'adults', icon: '🌟', image: null },
  { id: 5, name: 'Детская стоматология', desc: 'Лечение и профилактика зубов для детей всех возрастов', price: 3500, category: 'children', icon: '👧', image: null },
  { id: 6, name: 'Хирургия', desc: 'Удаление зубов, сложные хирургические операции', price: 8000, category: 'surgery', icon: '🏥', image: null },
  { id: 7, name: 'Пародонтология', desc: 'Лечение дёсен, профилактика пародонтита', price: 6000, category: 'adults', icon: '💚', image: null },
  { id: 8, name: 'Профилактика', desc: 'Профессиональная чистка, фторирование, герметизация фиссур', price: 4000, category: 'children', icon: '🛡️', image: null },
];

export const doctors = [
  { id: 1, name: 'Алина Мусаева', specialty: 'Главный врач, терапевт', experience: 18, reviews: 312, img: null },
  { id: 2, name: 'Дмитрий Козлов', specialty: 'Ортодонт', experience: 12, reviews: 198, img: null },
  { id: 3, name: 'Сауле Ахметова', specialty: 'Детский стоматолог', experience: 9, reviews: 245, img: null },
  { id: 4, name: 'Артём Волков', specialty: 'Хирург-имплантолог', experience: 15, reviews: 187, img: null },
  { id: 5, name: 'Карина Ибрагимова', specialty: 'Пародонтолог', experience: 7, reviews: 134, img: null },
];

export const reviews = [
  { id: 1, name: 'Анна К.', initials: 'АК', text: 'Отличная клиника! Лечила зуб, всё прошло безболезненно. Врач всё объяснил и успокоил. Очень рекомендую!', rating: 5 },
  { id: 2, name: 'Максим Р.', initials: 'МР', text: 'Делал имплант — результат превзошёл ожидания. Современное оборудование, профессиональные врачи. Цены адекватные.', rating: 5 },
  { id: 3, name: 'Светлана Д.', initials: 'СД', text: 'Привела ребёнка к детскому стоматологу. Он не плакал и не боялся — врачи умеют работать с детьми. Спасибо!', rating: 5 },
  { id: 4, name: 'Олег Т.', initials: 'ОТ', text: 'Сделал отбеливание Zoom. Результат виден сразу — зубы стали на несколько тонов светлее. Доволен работой!', rating: 4 },
  { id: 5, name: 'Диана Ж.', initials: 'ДЖ', text: 'Лечение проходило комфортно. Персонал внимательный и профессиональный. Записалась к ортодонту на брекеты.', rating: 5 },
];

export const teamMembers = [
  { id: 1, name: 'Алина Мусаева', role: 'Главный врач', specialty: 'Терапевт, эндодонтист', education: 'КазНМУ, 2006', experience: 18 },
  { id: 2, name: 'Дмитрий Козлов', role: 'Ортодонт', specialty: 'Брекеты, элайнеры', education: 'РНИМУ, 2012', experience: 12 },
  { id: 3, name: 'Сауле Ахметова', role: 'Детский стоматолог', specialty: 'Педиатрическая стоматология', education: 'КазНМУ, 2015', experience: 9 },
  { id: 4, name: 'Артём Волков', role: 'Хирург-имплантолог', specialty: 'Имплантология, хирургия', education: 'МГМСУ, 2009', experience: 15 },
  { id: 5, name: 'Карина Ибрагимова', role: 'Пародонтолог', specialty: 'Заболевания дёсен', education: 'КазНМУ, 2017', experience: 7 },
  { id: 6, name: 'Тимур Нурланов', role: 'Хирург', specialty: 'Удаление, сложные операции', education: 'КазНМУ, 2013', experience: 11 },
];

export const stats = [
  { id: 1, value: 15, suffix: '+', label: 'Лет опыта' },
  { id: 2, value: 6, suffix: '', label: 'Врачей' },
  { id: 3, value: 12000, suffix: '+', label: 'Пациентов' },
  { id: 4, value: 8, suffix: '', label: 'Наград' },
];
