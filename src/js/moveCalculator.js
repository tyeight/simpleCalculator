document.addEventListener('DOMContentLoaded', function () {
  const calculator = document.querySelector('.calculator');

  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  calculator.addEventListener('mousedown', function (e) {
    isDragging = true;
    offsetX = e.clientX - calculator.offsetLeft;
    offsetY = e.clientY - calculator.offsetTop;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  function onMouseMove(e) {
    if (isDragging) {
      calculator.style.left = e.clientX - offsetX + 'px';
      calculator.style.top = e.clientY - offsetY + 'px';
    }
  }

  function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
});
