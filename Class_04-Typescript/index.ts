// 4 Base types in TS
// number
// string
// boolean
// any -> AVOID ANY AS A TYPE !!!

let id: number = 1;
id = 2; // VALID;
// id = "Random String" COMPLAINS BECAUSE WE CANNOT ASSIGN STRING AS A VALUE ON A VARIABLE THAT HAS NUMBER AS A TYPE;
// TS ni dava warning, bidejki nemozeme da naznaceme string za vrednost na variabla kade shto ima number kako type.

let userName: string = "John";
// userName = 1
let registred: boolean = false;

let randomValue: any; // AVOID
randomValue = 1;
randomValue = "2";

console.log(userName);

//ARRAYS

// randomNumbers: number[] WE SAY THAT THE VARIABLE randomNumbers WILL BE OF TYPE **ARRAY OF NUMBERS**
// randomNumbers: number[] Ovde spesificirame deka randomNumbers ke bide od type **ARRAY OF NUMBERS**
const randomNumbers: number[] = [1, 231, 4, 2];

// oldSyntaxNumbers: Array<number> THIS IS ANOTHER SYNTAX TO SPECIFY A TYPE ** ARRAY OF NUMBERS **
// oldSyntaxNumbers: Array<number> ova e druga sintaksa za specificiranje  deka oldSyntaxNumbers ke bide od type **ARRAY OF NUMBERS**
const oldSyntaxNumbers: Array<number> = [2, 5, 1, 2, 5, 3];
const names: string[] = ["George", "Olga", "Dejan"];

// Array<number | string> THIS TYPE IS ARRAY OF NUMBERS OR STRINGS
// Array<number | string> ovoj tip e array od numbers ili strings
const arrayOfIds: Array<number | string> = [1, 2, 3, "1", "2"];
// (string | number)[] THIS TYPE IS ARRAY OF NUMBERS OR STRINGS, SAME AS ABOVE BUT ANOTHER SYNTAX
// (string | number)[] Ovoj type e ARRAY OF NUMBERS OR STRINGS, isto kako i prethodniot samo druga sintaksa
const ids: (string | number)[] = [1, 2, "3"];

randomNumbers.push(20);
// randomNumbers.push('qwe');

// TUPLES
//WITH TUPLES WE SPECIFY HOW MANY ITEM WILL THIS ARRAY CONTAIN, AND WHAT WILL BE THE TYPE OF EACH OF IT.
//So tuples spesificirame kolku elementi ke ima vo array-ot i koj type ke vide sekoj od niv.

let personTuple: [number, string, boolean] = [1, "George", true];

// UNION
// UNION IS WHERE WE CAN SAY THAT A TYPE CAN BE EITHER THE ONE OR THE ANOTHER, IN OUR CASE IS CARID CAN BE FROM TYPE STRING OR NUMBER
// So UNION spesificirame deka type-ot ke bide edno od dve/ili poveke, vo nashiot slucaj carId ke bide od type string ili number;

let carId: string | number = "1";

// ENUM
//ENUMS ARE WE DEFINE A SET OF NAMED CONSTANS
//So enumi definirame set od constanti

enum Seasons {
  AUTUMN = "autumn",
  WINTER = "winter",
  AUTUMN_WINTER = "autumn winter",
}

console.log(Seasons.AUTUMN);

// STATICNI VREDNOSTI
enum MovieGenre {
  HORROR = "horror",
  FANTASY = "fantasy",
}

console.log(MovieGenre.HORROR);

enum StudentsCountry {
  MACEDONIA = "Macedonia",
  SERBIA = "Republic of Serbia",
}

// TYPE INFERENCE IS WHEN TYPESCRIPT RECOFNISES THE TYPE BY ITSELF
// Type inference e koga typescript sam go prepoznava type-ot

let studentInput = "Republic of Serbia"; // INPUTOT FROM STUDENT
// studentInput = 4
// if (studentInput === "Serbia") {
//   console.log("Nice");
// }

if (studentInput === StudentsCountry.SERBIA) {
  console.log("Nice but we are using enum");
}

// OBJECT

type User = {
  id: number;
  name: string;
  birth: Birth;
  lastName?: string; //ovoj properti e opcionalen

  //   hobbies: string[]
  age: number | undefined;
};

type Birth = {
  birthDate: Date | string;
};

type Users = {
  users: User[];
};

const firstUser: User = {
  id: 1,
  name: "Georges",
  birth: {
    birthDate: new Date().toDateString(),
  },
  age: undefined,
};

console.log("First user: ", firstUser);

// Union od types
type NutsType = User | "hazlenut" | "peanut";

const randomNut: NutsType = firstUser;

const secondUser = {
  id: 2,
  name: "Olga",
  lastName: "Penovska",
  birth: {
    birthDate: new Date().toDateString(),
  },
  age: undefined,
};

const thirdUser: User = {
  name: "Dejan",
  birth: {
    birthDate: new Date().toDateString(),
  },
  id: 3,
  age: undefined,
};

const users: User[] = [firstUser, secondUser, thirdUser];
console.log(users);

//Type Assertion

let randomName: any = "Random Name";

let secondRandomName = randomName as string; // Dont worry I know what I am doing

const fourthUser: User = { name: "Nikola" } as User;
console.log("FourthUser", fourthUser);

// Functions

type PersonInformation = {
  firstName: string;
  lastName: string;
  age?: number;
};

function returnFullName(
  firstName: string,
  lastName: string,
  age: number = 26 //Default value
): string {
  return `${firstName} ${lastName} ${age}`;
}

console.log(returnFullName("George", "Dimitrov", 26));
console.log(returnFullName("Olga", "Penovska"));

const addNumbers = (): number => {
  return 25;
};

const returnFullNameSecond = (props: PersonInformation) => {
  const { firstName, lastName, age } = props;

  return `${firstName} ${lastName} ${age}`;
};

// PRVIOT KAKO DA GI PUSTIME ILI PROVIDENEME OVIE PROPERINJA
console.log(
  returnFullNameSecond({ firstName: "George", lastName: "Dimitrov", age: 26 })
);

const personTwo: PersonInformation = {
  firstName: "Olga",
  lastName: "Penovska",
};

// VTOR NACHIN
console.log("Second invoke", returnFullNameSecond(personTwo));

// Interface

enum AnimalDiet {
  CARNIVORE = "carnivore",
  OMNIVORE = "omnivore",
}

interface Pet {
  name: string;
  breed: string;
  age: number;
  diet: AnimalDiet;
  //   (text: string): void;
  random(text: string): void; // IF WE SPECIFY A FUNCTION TO RETURN TYPE VOID, AND WE RETURN STRING INSTEAD, THE TYPE STRING WILL OVERWRITE TYPE VOID,
  //AS WE DO IN THE RANDOM METHOD IN THE dog OBJECT.

  // AKO GO SPRESIFICIRAME RETURN TYPE-OT NA METODOT DA BIDE VOID, I DOKOLKU VRATIME DRUG TYPE, NA PRIMER STRING, VOID KE BIDE PREBRISHAN SO STRING KAKO RETURN TYPE,
  // KAKO NA PRIMER VO dog OBJEKTOT, RANDOM METODOT IAKO SPESIFICIRAVME DA E VOID, GO PREBRISAVME SO RETURN TYPE STRING VO OBJEKTOT dog.
}

// VOID CAN BE OVERWRITTEN WITH A TYPE

const dog: Pet = {
  name: "Bubi",
  breed: "Husky",
  age: 14,
  diet: AnimalDiet.CARNIVORE,

  random(randomText: string) {
    return randomText;
  },
};

console.log(dog.random("Random text"));

interface IPerson {
  name: string;
  lastName: string;
}

interface IGreeting {
  greeting(greeting: string): string;
}
class Person implements IPerson, IGreeting {
  name: string;
  lastName: string;

  greeting(greeting: string = "Hello world :)") {
    return greeting;
  }
}

class Man extends Person {
  constructor(readonly name: string, readonly lastName: string) {
    super(); // MORA DA POVIKAME SUPER KOGA PROSIRUVAME KLASI
  }
}

const firstMan = new Man("John", "Doe");

console.log(firstMan.greeting("Hi from the other side :)"));
console.log(firstMan.name);
