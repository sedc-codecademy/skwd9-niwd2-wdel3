// 4 Base types in TS
// number
// string
// boolean
// any -> AVOID ANY AS A TYPE !!!
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 1;
id = 2; // VALID;
// id = "Random String" COMPLAINS BECAUSE WE CANNOT ASSIGN STRING AS A VALUE ON A VARIABLE THAT HAS NUMBER AS A TYPE;
// TS ni dava warning, bidejki nemozeme da naznaceme string za vrednost na variabla kade shto ima number kako type.
var userName = "John";
// userName = 1
var registred = false;
var randomValue; // AVOID
randomValue = 1;
randomValue = "2";
console.log(userName);
//ARRAYS
// randomNumbers: number[] WE SAY THAT THE VARIABLE randomNumbers WILL BE OF TYPE **ARRAY OF NUMBERS**
// randomNumbers: number[] Ovde spesificirame deka randomNumbers ke bide od type **ARRAY OF NUMBERS**
var randomNumbers = [1, 231, 4, 2];
// oldSyntaxNumbers: Array<number> THIS IS ANOTHER SYNTAX TO SPECIFY A TYPE ** ARRAY OF NUMBERS **
// oldSyntaxNumbers: Array<number> ova e druga sintaksa za specificiranje  deka oldSyntaxNumbers ke bide od type **ARRAY OF NUMBERS**
var oldSyntaxNumbers = [2, 5, 1, 2, 5, 3];
var names = ["George", "Olga", "Dejan"];
// Array<number | string> THIS TYPE IS ARRAY OF NUMBERS OR STRINGS
// Array<number | string> ovoj tip e array od numbers ili strings
var arrayOfIds = [1, 2, 3, "1", "2"];
// (string | number)[] THIS TYPE IS ARRAY OF NUMBERS OR STRINGS, SAME AS ABOVE BUT ANOTHER SYNTAX
// (string | number)[] Ovoj type e ARRAY OF NUMBERS OR STRINGS, isto kako i prethodniot samo druga sintaksa
var ids = [1, 2, "3"];
randomNumbers.push(20);
// randomNumbers.push('qwe');
// TUPLES
//WITH TUPLES WE SPECIFY HOW MANY ITEM WILL THIS ARRAY CONTAIN, AND WHAT WILL BE THE TYPE OF EACH OF IT.
//So tuples spesificirame kolku elementi ke ima vo array-ot i koj type ke vide sekoj od niv.
var personTuple = [1, "George", true];
// UNION
// UNION IS WHERE WE CAN SAY THAT A TYPE CAN BE EITHER THE ONE OR THE ANOTHER, IN OUR CASE IS CARID CAN BE FROM TYPE STRING OR NUMBER
// So UNION spesificirame deka type-ot ke bide edno od dve/ili poveke, vo nashiot slucaj carId ke bide od type string ili number;
var carId = "1";
// ENUM
//ENUMS ARE WE DEFINE A SET OF NAMED CONSTANS
//So enumi definirame set od constanti
var Seasons;
(function (Seasons) {
    Seasons["AUTUMN"] = "autumn";
    Seasons["WINTER"] = "winter";
    Seasons["AUTUMN_WINTER"] = "autumn winter";
})(Seasons || (Seasons = {}));
console.log(Seasons.AUTUMN);
// STATICNI VREDNOSTI
var MovieGenre;
(function (MovieGenre) {
    MovieGenre["HORROR"] = "horror";
    MovieGenre["FANTASY"] = "fantasy";
})(MovieGenre || (MovieGenre = {}));
console.log(MovieGenre.HORROR);
var StudentsCountry;
(function (StudentsCountry) {
    StudentsCountry["MACEDONIA"] = "Macedonia";
    StudentsCountry["SERBIA"] = "Republic of Serbia";
})(StudentsCountry || (StudentsCountry = {}));
// TYPE INFERENCE IS WHEN TYPESCRIPT RECOFNISES THE TYPE BY ITSELF
// Type inference e koga typescript sam go prepoznava type-ot
var studentInput = "Republic of Serbia"; // INPUTOT FROM STUDENT
// studentInput = 4
// if (studentInput === "Serbia") {
//   console.log("Nice");
// }
if (studentInput === StudentsCountry.SERBIA) {
    console.log("Nice but we are using enum");
}
var firstUser = {
    id: 1,
    name: "Georges",
    birth: {
        birthDate: new Date().toDateString()
    },
    age: undefined
};
console.log("First user: ", firstUser);
var randomNut = firstUser;
var secondUser = {
    id: 2,
    name: "Olga",
    lastName: "Penovska",
    birth: {
        birthDate: new Date().toDateString()
    },
    age: undefined
};
var thirdUser = {
    name: "Dejan",
    birth: {
        birthDate: new Date().toDateString()
    },
    id: 3,
    age: undefined
};
var users = [firstUser, secondUser, thirdUser];
console.log(users);
//Type Assertion
var randomName = "Random Name";
var secondRandomName = randomName; // Dont worry I know what I am doing
var fourthUser = { name: "Nikola" };
console.log("FourthUser", fourthUser);
function returnFullName(firstName, lastName, age //Default value
) {
    if (age === void 0) { age = 26; }
    return firstName + " " + lastName + " " + age;
}
console.log(returnFullName("George", "Dimitrov", 26));
console.log(returnFullName("Olga", "Penovska"));
var addNumbers = function () {
    return 25;
};
var returnFullNameSecond = function (props) {
    var firstName = props.firstName, lastName = props.lastName, age = props.age;
    return firstName + " " + lastName + " " + age;
};
// PRVIOT KAKO DA GI PUSTIME ILI PROVIDENEME OVIE PROPERINJA
console.log(returnFullNameSecond({ firstName: "George", lastName: "Dimitrov", age: 26 }));
var personTwo = {
    firstName: "Olga",
    lastName: "Penovska"
};
// VTOR NACHIN
console.log("Second invoke", returnFullNameSecond(personTwo));
// Interface
var AnimalDiet;
(function (AnimalDiet) {
    AnimalDiet["CARNIVORE"] = "carnivore";
    AnimalDiet["OMNIVORE"] = "omnivore";
})(AnimalDiet || (AnimalDiet = {}));
// VOID CAN BE OVERWRITTEN WITH A TYPE
var dog = {
    name: "Bubi",
    breed: "Husky",
    age: 14,
    diet: AnimalDiet.CARNIVORE,
    random: function (randomText) {
        return randomText;
    }
};
console.log(dog.random("Random text"));
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greeting = function (greeting) {
        if (greeting === void 0) { greeting = "Hello world :)"; }
        return greeting;
    };
    return Person;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name, lastName) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.lastName = lastName;
        return _this;
    }
    return Man;
}(Person));
var firstMan = new Man("John", "Doe");
console.log(firstMan.greeting("Hi from the other side :)"));
console.log(firstMan.name);
