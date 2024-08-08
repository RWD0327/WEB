// index.js
document.addEventListener('DOMContentLoaded', () => {
	console.log('웹사이트가 로드되었습니다.');
	handleResize();
	window.addEventListener('resize', handleResize);
});

function openNav() {
	document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
	document.getElementById("sidebar").style.width = "0";
}

function handleResize() {
	const openBtn = document.querySelector('.openbtn');
	const sidebar = document.getElementById('sidebar');
	if (window.innerWidth <= 768) {
		openBtn.style.display = 'block';
		sidebar.style.display = 'block';
	} else {
		openBtn.style.display = 'none';
		sidebar.style.display = 'none';
	}
}

function randomText() {
	const texts = ['개발자', '대학생', '백수가 꿈인'];
	const randomText = texts[Math.floor(Math.random() * texts.length)];
	console.log(randomText);
}
