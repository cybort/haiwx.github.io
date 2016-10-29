 var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
          $('[rel="icon"]').attr('href', "/img/TEP.ico");
          document.title = '(●—●)天哪，崩溃啦！';
          clearTimeout(titleTime);
      }
      else {
          $('[rel="icon"]').attr('href', "/favicon.ico");
          document.title = '(/≧▽≦/)咦！又好咯~' + OriginTitile;
          titleTime = setTimeout(function () {
              document.title = OriginTitile;
          }, 2000);
      }
  });