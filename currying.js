function aThingIMaybeLike(howMuchILikeIt) {
    return function(thing) {
      return function(reason) {
        return `I ${howMuchILikeIt} ${thing} because ${reason}.`;
      }
    }
}

const reasonILove = aThingIMaybeLike("don't like");

console.log(reasonILove("burpies")("I am not a masochist"));