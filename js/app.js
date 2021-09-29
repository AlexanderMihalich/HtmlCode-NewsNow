const animItems = document.querySelectorAll('._animItems');
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll)
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_anim');
			} else {
				if (!animItem.classList.contains('_animNoHide')) animItem.classList.remove('_anim')
			}
		}
	}
	const offset = (el) => {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 500);
}
function headerDark() {
	const main = document.querySelector("#main");
	const header = document.querySelector("#header");
	window.addEventListener('scroll', function () {
		let scrollTop = document.documentElement.scrollTop;

		if (scrollTop >= (main.offsetHeight / 4 - header.offsetHeight * 1.1)) {
			header.classList.add("dark");
		} else {
			header.classList.remove("dark");
		}
	});
}
headerDark();

document.querySelectorAll('.spoiler').forEach(event => {
	event.addEventListener('click', (e) => {
		let children = e.target.nextElementSibling;
		children.classList.contains("_active") ? children.className = "spoiler__hide" : children.className = "spoiler__hide _active";
	})
})

const iconMenu = document.querySelector('.menu__icon span');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.innerHTML = 'Close';
		menuBody.classList.toggle('_active');
		if (!menuBody.classList.contains('_active')) {
			iconMenu.innerHTML = 'Menu';

		}
	});
}

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
//=================
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});
//=================
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();
if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}
let unlock = true;
//=================
const tabsBtn = document.querySelectorAll("._tabs-item");
const tabsItems = document.querySelectorAll("._tabs-block");

tabsBtn.forEach(onTabClick);

tabsItems.forEach(function (item, n) {
	item.id = `tab__${n}`
});
function onTabClick(item, n) {
	item.setAttribute('data-tab', `#tab__${n}`)

	item.addEventListener("click", function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTub = document.querySelector(tabId);

		if (currentBtn.classList.contains('_active')) {
			currentBtn.classList.remove('_active');
			currentTub.classList.remove('_active');
		} else if (!currentBtn.classList.contains('_active')) {
			tabsBtn.forEach(function (item) {
				item.classList.remove('_active');
			});

			tabsItems.forEach(function (item) {
				item.classList.remove('_active');
			});

			currentBtn.classList.add('_active');
			currentTub.classList.add('_active');
		}

	});
}
//=================
window.onscroll = function (e) {
	let lengthPage = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
	document.getElementById("page_progress").value = lengthPage;
}
//========================================
function _is_hidden(el) {
	return (el.offsetParent === null)
}
//========================================
(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();

