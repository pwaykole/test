exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      return arr.indexOf(item);
  },

  sum: function(arr) {
       function addNum(total, num){
           return total + num;
       }
       return arr.reduce(addNum);
  },

  remove: function(arr, item) {
      return _.without(arr, item);
  },

  removeWithoutCopy: function(arr, item) {

      while (arr.indexOf(item) !== -1) {
        arr.splice(arr.indexOf(item), 1);
      }
      return arr;
  },

  append: function(arr, item) {
      arr.push(item);
     return arr;
  },

  truncate: function(arr) {
      arr.pop();
      return arr;
  },

  prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail: function(arr) {
       arr.shift();
      return arr;
  },

  concat: function(arr1, arr2) {
      var x = arr1.concat(arr2);
      return x;
  },

  insert: function(arr, item, index) {
      Array.prototype.insert = function (indx, element) {
          this.splice(indx, 0, element);
      }

      arr.insert(index, item);
      return arr;
  },

  count: function(arr, item) {
    var cnt = 0;
     var x = _.filter(arr, function(num){
        if(num === item)
         return cnt+1;
     });

    return x.length;
  },

  duplicates: function(arr) {

    var uni = arr.map((val) => {
      return {count: 1, val: val}
    })
    .reduce((x, y) => {
      x[y.val] = (x[y.val] || 0) + y.count
      return x
    }, {})

    var duplicat = Object.keys(uni).filter((x) => uni[x] > 1);
    var a = [];
    for(i = 0; i < duplicat.length; i++){

        a.push(parseInt(duplicat[i]));
    }
      return a;
  },

  square: function(arr) {
     var x = _.map(arr, function(num){
        return num * num;
      });
      return x;
  },

  findAllOccurrences: function(arr, target) {
      var indexes = [];

        arr.filter(function(arr, index) {
         if(arr === target){
           indexes.push(index)
         }
        });
      return indexes;
  }
};
