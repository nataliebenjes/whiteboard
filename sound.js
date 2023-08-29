// END 
// > faucet.sound()
// "Drip drip drip."
// > oldCar.sound()
// "Grumble grumble"
// > sleepyBear.sound()
// "Grrr...yawn"

const noisyGuy = (noise) => (
    {
        sound: () => `${noise}`
    }
)

const faucet = noisyGuy("Drip drip drip.");
const oldCar = noisyGuy("Grumble grumble");
const sleepyBear = noisyGuy("Grrr...yawn");

console.log(faucet.sound())
console.log(oldCar.sound())
console.log(sleepyBear.sound())