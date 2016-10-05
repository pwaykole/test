exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {

  listFiles: function(data, dirName) {

      var recurFile = [];
      function recurseAbc(objData){
          var allFiles = objData.files;

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

      recurseAbc(data);
      console.log(recurFile);
      return recurFile;

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
