exports = typeof window === 'undefined' ? global : window;
exports.asyncAnswers = {
    async: function (value) {
      return new Promise(function (resolve) {
            if (value) {
                resolve(value);
            }
        });
    }
    , manipulateRemoteData: function (url) {

         return new Promise(function (resolve) {
            if (url !== "") {
             var x = $.getJSON(url, function(data){
                var names = _.sortBy(data.people, 'name');
                 var sortNames = [];
                 names.forEach(function(objects){
                     sortNames.push(objects.name);
                 });
                resolve(sortNames);
            });
            }
        });

    }
};
