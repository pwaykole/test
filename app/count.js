exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
      var cnt;
     function startCount(){
        console.log(start++);

         if(start <= end)
         {
            cnt = setTimeout(startCount, 100);
         }
     }
    startCount();

     return {
      cancel: function () {
        cnt && clearTimeout(cnt);
      }
    };
  }
};
