// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?



function greetDevelopers(list) {
    // thank you for checking out my kata :)
    let e = list.map(elem => {
        const obj = {
            ...elem,
            greeting: `Hi ${elem.firstName}, what do you like the most about ${elem.language}?`
        }
        return obj;
    });
    return e;
}