var vm = new Vue({
  el: '.app',
  data: function () {
    var now = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return  {
      now: now,
      day: days[now.getDay()]
    };
  }
})
