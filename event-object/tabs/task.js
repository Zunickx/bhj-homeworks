const tabNavigations = document.querySelectorAll('.tab__navigation .tab');
const tabContent = document.querySelectorAll('.tab__contents .tab__content');
console.log(tabNavigations);
console.log(tabContent);

for(let i = 0; i < tabNavigations.length; i++) {
    tabNavigations[i].addEventListener('click', function() {

        let actives = document.getElementsByClassName('tab_active');
        console.log(actives);

        actives[0].classList.remove('tab_active');

        if(actives[0] != this) {
            this.classList.add('tab_active');
        }
        // for(let j = 0; j < tabNavigations.length; j++) {
        //     tabNavigations[i].classList.contains('tab_active') ? tabNavigations[i].classList.remove('tab_active') : tabNavigations[i].classList.add('tab_active');
        // }


        for(let j = 0; j < tabContent.length; j++) {
            tabContent[j].classList.remove('tab__content_active');
        }
        tabContent[i].classList.contains('tab__content_active') ? tabContent[i].classList.remove('tab__content_active') : tabContent[i].classList.add('tab__content_active');
    })


}