function shout(string){
     return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout (string) {
    console.log(string.toUpperCase( ));
  }

  //describe('logWhisper(string)', function() {
    //it('takes a string argument and logs it in all lowercase using console.log()', function() {
     // const spy = expect.spyOn(console, 'log').andCallThrough();
  
      //logWhisper('HELLO');
  
      //expect(spy).toHaveBeenCalledWith('hello');
  
      //console.log.restore();
    //})
  //})

  function logWhisper(string){
    console.log(string.toLowerCase( ));
  }

  function sayHiToHeadphonedRoommate (string) {
    var noAnswer = "I can\'t hear you!";
    var yesAnswer = "YES INDEED!";
    var sureAnswer = "I would love to!";
    if (string.toLowerCase(noAnswer) === string) {
      return "I can\'t hear you!";
    }
    else if (string.toUpperCase(yesAnswer) === string) {
      return "YES INDEED!";
    }
    else if ("Let's have dinner together!" === string) {
      return sureAnswer
    }
  }

  