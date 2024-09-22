let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    }
  });
});

let divs = document.querySelectorAll('div');
observer.observe(div);