// Radial skill bar animation
document.querySelectorAll('.circle-bar').forEach(function(bar) {
  let pct = +bar.getAttribute('data-pct');
  let r = 40;
  let circ = 2 * Math.PI * r;

  bar.style.strokeDasharray = circ;
  bar.style.strokeDashoffset = circ;

  setTimeout(function() {
    bar.style.strokeDashoffset = circ * (1 - pct/100);
  }, 500);
});
