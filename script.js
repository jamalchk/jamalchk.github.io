
let avatar = document.querySelector('.header__avatar');

function spin(){
    avatar.style.transform = 'rotateZ(-360deg)';
    if(avatar.style.transform !== null){
        setTimeout(function(){
            avatar.style.removeProperty('transform');
        }, 1000);
    }
}

avatar.addEventListener('click', spin);