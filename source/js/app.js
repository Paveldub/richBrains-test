$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

sal();

const items = document.querySelectorAll('.tabs-menu__item');
const point = document.querySelectorAll('.progress-level__point');
let wrapper = document.getElementById('wrapper');
const containerSmall = document.querySelector('.container-small');

for (let item of items) {
	item.addEventListener('click', function(e) {
        e.preventDefault();
        
		if (this.classList.contains('tabs-menu__item--active')){
            this.classList.remove('tabs-menu__item--active');
            wrapper.classList.remove('active');
            containerSmall.style.maxWidth = '1100px';
		} else {
			for (let elem of items){
                elem.classList.remove('tabs-menu__item--active');
                wrapper.classList.remove('active');
                containerSmall.style.maxWidth = '1100px';
			}
            this.classList.add('tabs-menu__item--active');
            wrapper.classList.add('active');
            containerSmall.style.maxWidth = '800px';
		}
	});
}

window.addEventListener('resize', () => {
    if (innerWidth >= 1290) {
        containerSmall.removeAttribute('style');
    }
});

for (let elem of point) {
    elem.addEventListener('click', function(e) {

        if (this.classList.contains('current')) {
            this.classList.remove('current');
        } else {
            for (let i of point) {
                i.classList.remove('current');
            }

            this.classList.add('current');
        }
    });
}

let tabs = document.querySelector('.tabs'),
    itemTabs = document.querySelectorAll('.tabs__menu-item'),
    elementTabs = document.querySelectorAll('.tabs__element');

tabs.addEventListener('click', function(e) {
    let element = e.target,
        elTab;
    if (element.classList.contains('tabs__menu-item')) {
        Object.keys(elementTabs).map(function(i) {
            elementTabs[i].classList.remove('tabs__element--active');
            itemTabs[i].classList.remove('tabs__menu--active');
        });
        elTab = document.getElementById(element.dataset.tabs);
        elTab.classList.add('tabs__element--active');
        element.classList.add('tabs__menu--active');
    };
});

$(document).ready(function() {
    $('.select-elem').select2();
});
