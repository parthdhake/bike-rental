const bikes = [
  {
    id: 1,
    name: '2017 Honda Accord',
    type: 'sedan',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '32',
    price: 40,
    images: "hondaAccordWhite",
  },
  {
    id: 2,
    name: '2018 BMW i8',
    type: 'coupe',
    seats: 2,
    doors: 2,
    engine: 'auto',
    mpg: '28',
    price: 80,
    images: "bmwi8White, bmwi8_2, bmwi8_3",
  },
  {
    id: 3,
    name: '2019 Chevrolet Blazer',
    type: 'suv',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '30',
    price: 45,
    images: "chevBlazerWhite",
  },
  {
    id: 4,
    name: '2019 Cadillac Escalade',
    type: 'suv',
    seats: 8,
    doors: 4,
    engine: 'auto',
    mpg: '23',
    price: 60,
    images: "cadEscaladeWhite",
  },
  {
    id: 5,
    name: '2015 Ford F-150',
    type: 'truck',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '23',
    price: 55,
    images: "fordF150White",
  },
  {
    id: 6,
    name: '2019 Honda Odyssey',
    type: 'mini van',
    seats: 7,
    doors: 4,
    engine: 'auto',
    mpg: '34',
    price: 60,
    images: "hondaOdysseyWhite",
  },
  {
    id: 7,
    name: '2020 Jeep Renegade Trailhawk',
    type: 'suv',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '22',
    price: 54,
    images: "jeepRenegadeWhite",
  },
  {
    id: 8,
    name: '2018 Acura ILX',
    type: 'sedan',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '25',
    price: 50,
    images: "acuraIlxWhite",
  },
  {
    id: 9,
    name: '2019 Chevrolet Corvette',
    type: 'coupe',
    seats: 2,
    doors: 2,
    engine: 'auto',
    mpg: '16',
    price: 99,
    images: "chevCorvetteWhite",
  },
  {
    id: 10,
    name: '2020 Dodge Grand Caravan',
    type: 'mini van',
    seats: 7,
    doors: 4,
    engine: 'auto',
    mpg: '17',
    price: 65,
    images: "dodgeCaravanWhite",
  },
  {
    id: 11,
    name: '2019 Cadillac XT4 Sport',
    type: 'suv',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '24',
    price: 60,
    images: "cadillacXt4White",
  },
  {
    id: 12,
    name: '2021 Hyundai Accent SE',
    type: 'sedan',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '30',
    price: 50,
    images: "hyundaiAccentWhite",
  },
  {
    id: 13,
    name: '2020 Kia Forte LXS',
    type: 'sedan',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '29',
    price: 45,
    images: "kiaForteWhite",
  },
  {
    id: 14,
    name: '2020 Jeep Gladiator Overland',
    type: 'truck',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '17',
    price: 70,
    images: "jeepGladiatorWhite",
  },
  {
    id: 15,
    name: '2020 Mercedes-Benz E 450',
    type: 'convertable',
    seats: 4,
    doors: 2,
    engine: 'auto',
    mpg: '20',
    price: 80,
    images: "mercedesE450White",
  },
  {
    id: 16,
    name: '2020 Chevrolet Malibu',
    type: 'sedan',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '29',
    price: 46,
    images: "chevMalibuWhite",
  },
  {
    id: 17,
    name: '2020 Ford Ranger Lariat',
    type: 'truck',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '21',
    price: 65,
    images: "fordRangerWhite",
  },
  {
    id: 18,
    name: '2019 Jaguar F-TYPE',
    type: 'coupe',
    seats: 2,
    doors: 2,
    engine: 'auto',
    mpg: '23',
    price: 80,
    images: "jaguarFTypeWhite",
  },
  {
    id: 19,
    name: '2020 RAM 1500 Limited',
    type: 'truck',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '22',
    price: 68,
    images: "ram1500White",
  },
  {
    id: 20,
    name: '2020 Nissan Versa',
    type: 'sedan',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '32',
    price: 50,
    images: "nissanVersaWhite",
  },
  {
    id: 21,
    name: '2020 Ford Mustang GT',
    type: 'coupe',
    seats: 2,
    doors: 2,
    engine: 'auto',
    mpg: '16',
    price: 80,
    images: "fordMustangWhite",
  },
  {
    id: 22,
    name: '2021 GMC Yukon XL',
    type: 'suv',
    seats: 7,
    doors: 4,
    engine: 'auto',
    mpg: '16',
    price: 70,
    images: "gmcYukonWhite",
  },
  {
    id: 23,
    name: '2021 Chevrolet Camaro SS',
    type: 'coupe',
    seats: 4,
    doors: 2,
    engine: 'auto',
    mpg: '18',
    price: 85,
    images: "chevCamaroWhite",
  },
  {
    id: 24,
    name: '2020 GMC Acadia Denali',
    type: 'suv',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '19',
    price: 70,
    images: "gmcAcadiaWhite",
  },
  {
    id: 25,
    name: '2020 Toyota Tundra',
    type: 'truck',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '13',
    price: 65,
    images: "toyotaTundraWhite",
  },
  {
    id: 26,
    name: '2020 Dodge Challenger Hellcat',
    type: 'coupe',
    seats: 4,
    doors: 2,
    engine: 'auto',
    mpg: '13',
    price: 90,
    images: "dodgeHellcatWhite",
  },
  {
    id: 27,
    name: '2020 Chrysler Pacifica',
    type: 'mini van',
    seats: 7,
    doors: 4,
    engine: 'auto',
    mpg: '19',
    price: 55,
    images: "chryslerPacificaWhite",
  },
  {
    id: 28,
    name: '2021 Hyundai Sonata SEL',
    type: 'sedan',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '28',
    price: 50,
    images: "hyundaiSonataWhite",
  },
  {
    id: 29,
    name: '2020 Kia Rio S',
    type: 'sedan',
    seats: 5,
    doors: 4,
    engine: 'auto',
    mpg: '33',
    price: 45,
    images: "kiaRioWhite",
  },
  {
    id: 30,
    name: '2021 Toyota Supra A91',
    type: 'coupe',
    seats: 2,
    doors: 2,
    engine: 'auto',
    mpg: '3',
    price: 70,
    images: "toyotaSupraWhite",
  },
];

export default cars;
