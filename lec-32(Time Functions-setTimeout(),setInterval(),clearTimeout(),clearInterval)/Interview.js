for (var i = 1; i <= 16; i *= 2) {
  (function (num) {
    setTimeout(() => {
      console.log(num);
    }, 3000);
  })(i);
}
