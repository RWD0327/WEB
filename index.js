function checkWindowSize() {
    const div = document.getElementById("menu");
    if (window.innerWidth < 600) {
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }
  }

  // 페이지 로드 시 및 창 크기 변경 시 크기 확인
  window.addEventListener('resize', checkWindowSize);
  window.addEventListener('load', checkWindowSize);