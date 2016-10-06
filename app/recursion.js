exports = typeof window === 'undefined' ? global : window;
exports.recursionAnswers = {
    listFiles: function (data, dirName) {
        var recurFile = [];
        var recurFile1 = [];
         var flag = true;
        function recurseAbc(objData) {
            var allFiles = objData.files;
            var allFiles2 = objData;
            if (dirName === undefined) {
                for (var i = 0; i < allFiles.length; i++) {
                    if (typeof allFiles[i] === 'string') {
                        recurFile.push(allFiles[i]);
                    }
                    else {
                        recurseAbc(allFiles[i]);
                    }
                }
            }
            else {
                var l;
                if (flag) {
                    for (var j = 0; j < allFiles2.files.length; j++) {
                        if ((typeof allFiles2.files[j] === 'object') && (allFiles2.files[j].dir === dirName)) {
                            flag = false;
                            l = allFiles2.files[j]

                        }
                    }
                }
                else if(!flag) {
                    l = allFiles2;
                }
                if(l)
                {
                for (var j = 0; j < l.files.length; j++) {
                        if (typeof l.files[j] === 'string') {
                            recurFile1.push(l.files[j]);
                        }
                        else {

                            recurseAbc(l.files[j]);
                        }
                }
            }
            }
        };
        recurseAbc(data);
        if(dirName === undefined)
        {
            return recurFile;
        }
        return recurFile1;
    }
    , permute: function (arr) {}
    , fibonacci: function (n) {}
    , validParentheses: function (n) {}
};
