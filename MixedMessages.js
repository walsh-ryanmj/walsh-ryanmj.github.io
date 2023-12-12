
const funFacts = {
    nutmeg: ['consume', 'too much', 'nutmeg', 'alter', 'reality'],
    deserts: ['more deaths', 'drowning', 'deserts', 'heavy rainfall', 'no drainage'],
    giraffes: ['male headbutts', 'female bladder', 'urination', 'drink pee', 'ovulation'],
    bones: ['one quarter', 'human bones', 'feet', '256']
}

for (const factGroup in funFacts) {
    if (funFacts.hasOwnProperty(factGroup)) {
        const randomIndex = Math.floor(Math.random() * funFacts[factGroup].length);
        const randomFact = funFacts[factGroup][randomIndex];
        console.log(` ${randomFact} `);
        console.log(' ');
    }
}

