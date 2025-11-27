 // Auto-slide setiap 3 detik
    setInterval(() => {
        slider.scrollLeft += 260;
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollLeft = 0;
        }
    }, 3000);
const img = document.getElementById("drag1");

img.onmousedown = function(event) {
  let shiftX = event.clientX - img.getBoundingClientRect().left;
  let shiftY = event.clientY - img.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    img.style.left = pageX - shiftX + "px";
    img.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  img.onmouseup = function() {
    document.removeEventListener("mousemove", onMouseMove);
    img.onmouseup = null;
  };
};


