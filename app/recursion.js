exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {

  listFiles: function(data, dirName) {

      var recurFile = [];
      function recurseAbc(objData){
          var allFiles = objData.files;

          if (typeof allFiles !== 'undefined')
          {
            for (var i = 0; i < allFiles.length; i++)
            {
                if (typeof allFiles[i] === 'string')
                {
                    recurFile.push(allFiles[i]);
                }
                else
                {
                recurseAbc(allFiles[i]);
                }
            }
          };
      }

      recurseAbc(data);
      return recurFile;

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
