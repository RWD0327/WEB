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

const texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5'];
const randomText = texts[Math.floor(Math.random() * texts.length)];
console.log(randomText);