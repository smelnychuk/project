'use strict';

const options = {
    name: 'test',
    width: 1024,
    heigh: 1024,
    colours: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colours;
console.log(border);

console.log(Object.keys(options).length);

// console.log(options['colours']['border']);

// delete options.name;

// console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]){
            console.log(`Cвойство ${key} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Cвойство ${key} имеет значение ${options[key]}`);
        counter++;
    }   
}

console.log(counter);