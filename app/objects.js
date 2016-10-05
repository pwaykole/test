exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
      return  fn.apply(obj);
  },

  alterObjects: function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
      var x = new constructor();
      return x.greeting;
  },

  iterate: function(obj) {

      var k = [];
      for (let [key, value] of Object.entries(obj)) {
        k.push(key + ': ' + value);
      }
      return k;
  }
};
