// Modal Message
const modalMessage = document.querySelector('.modal__message');
const btnMessageClose = document.querySelector('.js-modal-message-close');
const btnMessageOpen = document.querySelector('.message-contact-wrap');

let showAnimationModal = 'modalMessageGrowth ease 0.25s';
let hideAnimationModal = 'modalMessageSmaller ease 0.25s';

btnMessageOpen.onclick = function() {
    let checkMenu = modalMessage.style.opacity;
    
    if(checkMenu == 0){
        modalMessage.style.animation = showAnimationModal;
        modalMessage.style.opacity = '1';
    }else if(checkMenu == 1){
        modalMessage.style.animation = hideAnimationModal;
        modalMessage.style.opacity = '0';
    }
}

btnMessageClose.onclick = function () {
    modalMessage.style.animation = hideAnimationModal;
    modalMessage.style.opacity = '0';
}

// Message Optional (của modal Message)
function ShowMessageOptional(options){
    let nameOption = document.querySelector(options.nameMessage);
    const modalMessage = document.querySelector('.modal__message');
    
    if(nameOption){
        const btnOption = nameOption.querySelector('.modal__message-options-btn');
        const listOption = nameOption.querySelector('.modal__message-optional-list');

        btnOption.onclick = function (){
            if(listOption.style.display == 'none'){
                listOption.style.display = 'block';
            }else {
                listOption.style.display = 'none';
            }
        }
        
    }
}

/* Sub Nav Mobile */
function ShowSubNav(options){
    let nameSubNav = document.querySelector(options.name);
    let HeightMax = options.height;

    if(nameSubNav){
        const subNavMobile = nameSubNav.querySelector(options.groupSubNavSelector);
        const btnOpenSubNav = nameSubNav.querySelector(options.OpenSubNavSelector);
        const btnCloseSubNav = nameSubNav.querySelector(options.CloseSubNavSelector);

        btnOpenSubNav.onclick = function () {
            btnOpenSubNav.style.display = 'none';
            btnCloseSubNav.style.display = 'block';

            subNavMobile.style.maxHeight = HeightMax;
        }

        btnCloseSubNav.onclick = function () {
            btnCloseSubNav.style.display = 'none';
            btnOpenSubNav.style.display = 'block';

            subNavMobile.style.maxHeight = '0px';
        }
    }
}

// modalMessage.addEventListener('click', function(event) {
//     event.stopPropagation(); //ngưng việc nổi bọt
// });

/* Nav sicky */
window.onscroll = () => {
    let scroll = document.getElementById('nav');

    if (window.pageYOffset > 100) {
        scroll.classList.add('sticky');
    } else {
        scroll.classList.remove('sticky');
    }
}