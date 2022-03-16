// function MyAnimal(name, age) {
//     this.name = name;
//     this.age = age;
//     this.image_alt = 'A description of my animal';
//     this.image = 'anImageOfMyAnimal.jpg';
// }

function Panda(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = 'image of giant panda - a black white pear native to China';
    this.image = 'img/panda.jpeg';
}

function Grizzly(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = 'Image of a grizzly bear (a large brown bear native to North America) sitting';
    this.image = 'img/grizzly_bear.jpeg';
}

function Polar(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = 'Image of a ploar bear with two cubs standing in the snow. A polar bear is white bear native to Anartic region';
    this.image = 'img/polar.jpeg';
}

let panda = new Panda("pango", 1)
let grizzly = new Grizzly("Grizz", 9)
let polar = new Polar("Ice Bear", 7)

let bears = [panda, grizzly, polar]

let names = ['Humbert', 'Baloo', 'Bearo', 'Grant', 'Bjorn', "Teddy", "Ursa", "Arthur"]


function generateRandomIndex(maxIndex){
    return Math.floor(Math.random() * maxIndex)
}

function generateRandomName() {
    return names[generateRandomIndex(names.length)]
}

function generateRandomAge(){
    return generateRandomIndex(31)
}

function generateRandomAnimal(){
    index = generateRandomIndex(bears.length)
    animal = bears[index]

    console.log(index, animal)
    console.log(bears)

    let name = generateRandomName();
    let age = generateRandomAge();

    if (animal instanceof Panda){
        return new Panda(name, age);
    }else if(animal instanceof Polar){
        return new Polar(name, age);
    }else if(animal instanceof Grizzly){
        return new Grizzly(name, age);
    }
}


function onLoad(){
    console.log("START");
    var animal = generateRandomAnimal();
    document.getElementById("name").innerHTML = animal.name;
    document.getElementById("image").src = animal.image;
    document.getElementById("image").alt = animal.image_alt;
}