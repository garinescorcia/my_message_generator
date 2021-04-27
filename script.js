// console.log("Hello World!");

// creating a random number

const genRanNum = (num) => {
    // gets a random number between length array to 0
    return Math.floor(MAth.random() * num);
}

// stored data, for the personal data
const collectiveData = {
    signInfo: ['Jupiter', 'Saturn', 'Mars', 'Neptune'],
    fortuneOutout: ['a bad luck for one year', 'the luck of the gods', 'seven years of bad luck', 'luck for ten years'],
    advice: ['do more exercise', 'do not eat too late', 'eat more vegetables', 'take at least five meals a day'],
    popularSaying: ["if there was justice, there would be no brave", "do not say that the world sould be better, just do it", "shop here, don't be fooled elsewhere", "the works remain, the men go", "before enter, close the door"]
}

// store the selected information
const personalData = [];

// interate over the object
for(let prop in collectiveData) {
    let index = genRanNum(collectiveData[prop].length);

    // use object's property to customize the message
    switch(prop) {
        case 'signInfo':
            personalData.push(`Your sign right new is in ${collectiveData[prop][index]}.`)
            break
        case 'fortuneOutput':
            personalData.push(`You will have ${collectiveData[prop][index]}.`)
            break
        case 'advice':
            personalData.push(`You should ${collectiveData[prop][index]}.`)
            break
        default:
            personalData.push('There is not enough info.')
    }
}

// assembly the information
const formatingData() {
    const formatted = personalData.join('\n')
    console.log(formatted)
}

formatingData();