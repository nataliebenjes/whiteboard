//allows any kind of animal to eat
const canEat = function(creature) {
    const obj = {
        eat: function(food) {
            return `The ${creature} easts the ${food}.`
        }
    }
    return obj;
}

const canSleep = function(creature) {
    const obj = {
        sleep: function() {
            return `The ${creature} sleeps`
        }
    }
    return obj;
}

//function factory for creatures. use spread to merge three objects together
const sleepingEatingCreture = function(name) {
    let state = {
        name
    }
    return { ...state, ...canEat(state), ...canSleep(state) };
}

console.log("hey")