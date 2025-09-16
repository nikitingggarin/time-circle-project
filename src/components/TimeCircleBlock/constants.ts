
import { TimePointData } from "./types";

export const timePointsData: TimePointData[] = [
  { 
    id: 1, 
    hour: 13, 
    angle: 300, 
    isActive: true, 
    side: 'right', 
    angleChenge: 300, 
    data: {
      title: 'Наука',
      data: {
        events: [
          { 
            year: '1991',
            description: 'Открытие первой экзопланеты у пульсара PSR B1257+12' 
          },
          { 
            year: '1992',
            description: 'Запуск космического телескопа Хаббл и первые снимки' 
          },
          { 
            year: '1993',
            description: 'Создание первого веб-браузера Mosaic в NCSA' 
          },
          { 
            year: '1994',
            description: 'Обнаружение кометы Шумейкеров-Леви 9, столкнувшейся с Юпитером' 
          },
        ]
      },
    },
  },
  { 
    id: 2, 
    hour: 15, 
    angle: 0, 
    isActive: false, 
    side: 'right', 
    angleChenge: 0, 
    data: {
      title: 'Искусство',
      data: {
        events: [
          { 
            year: '1995',
            description: 'Открытие музея Гуггенхайма в Бильбао по проекту Фрэнка Гери' 
          },
          { 
            year: '1996',
            description: 'Венецианская биеннале посвящена теме "Идентичность и Другость"' 
          },
          { 
            year: '1997',
            description: 'Выставка "Sensation" в Лондоне с работами Young British Artists' 
          },
          { 
            year: '1998',
            description: 'Ретроспектива Джексона Поллока в Музее современного искусства Нью-Йорка' 
          },
        ]
      },
    },
  },
  { 
    id: 3, 
    hour: 17, 
    angle: 60, 
    isActive: false, 
    side: 'right', 
    angleChenge: 60, 
    data: {
      title: 'Спорт',
      data: {
        events: [
          { 
            year: '1999',
            description: 'Женская сборная США по футболу выигрывает Чемпионат мира' 
          },
          { 
            year: '2000',
            description: 'Сиднейские Олимпийские игры с рекордным количеством участников' 
          },
          { 
            year: '2001',
            description: 'Майкл Джордан возвращается в НБА после второго ухода на пенсию' 
          },
          { 
            year: '2002',
            description: 'Бразилия выигрывает пятый титул Чемпионата мира по футболу' 
          },
        ]
      },
    },
  },
  { 
    id: 4, 
    hour: 19, 
    angle: 120, 
    isActive: false, 
    side: 'left', 
    angleChenge: 120, 
    data: {
      title: 'Технологии',
      data: {
        events: [
          { 
            year: '2003',
            description: 'Запуск Skype - революционного сервиса интернет-телефонии' 
          },
          { 
            year: '2004',
            description: 'Основание Facebook Марком Цукербергом в Гарварде' 
          },
          { 
            year: '2005',
            description: 'Появление YouTube - платформы для обмена видео' 
          },
          { 
            year: '2006',
            description: 'Твиттер совершает первый твит: "just setting up my twttr"' 
          },
        ]
      },
    },
  },
  { 
    id: 5, 
    hour: 21, 
    angle: 180, 
    isActive: false, 
    side: 'left', 
    angleChenge: 180, 
    data: {
      title: 'Кино',
      data: {
        events: [
          { 
            year: '2007',
            description: 'Премьера фильма "Старикам тут не место" братьев Коэн' 
          },
          { 
            year: '2008',
            description: 'Фильм "Темный рыцарь" с Хитом Леджером в роли Джокера' 
          },
          { 
            year: '2009',
            description: 'Джеймс Кэмерон представляет "Аватар" в технологии 3D' 
          },
          { 
            year: '2010',
            description: 'Кристофер Нолан выпускает "Начало" с Леонардо ДиКаприо' 
          },
        ]
      },
    },
  },
  { 
    id: 6, 
    hour: 23, 
    angle: 240, 
    isActive: false, 
    side: 'left', 
    angleChenge: 240, 
    data: {
      title: 'Театр',
      data: {
        events: [
          { 
            year: '2011',
            description: 'Бродвейская постановка "Книга мормона" получает 9 премий Тони' 
          },
          { 
            year: '2012',
            description: 'Шекспировский театр "Глобус" представляет полный цикл пьес' 
          },
          { 
            year: '2013',
            description: 'Мюзикл "Король Лев" становится самым кассовым в истории Бродвея' 
          },
          { 
            year: '2014',
            description: 'Постановка "Гарри Поттер и Проклятое дитя" в Лондоне' 
          },
        ]
      },
    },
  }
];