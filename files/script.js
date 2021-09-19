const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};

    if (isMobile.any()) {
    document.body.classList.add('tel');
    } else {
    document.body.classList.add('comp');
}

const icoBurg = document.querySelector('.ico_burg');
const bodyBurg = document.querySelector('.body_list');
     if (icoBurg) {
        icoBurg.addEventListener("click", function(e) {
            document.body.classList.toggle('closed');   
            bodyBurg.classList.toggle('pick');
            icoBurg.classList.toggle('pick');
        });
    }


const links = document.querySelectorAll('.menu_link[data-goto]');
    if (links.length > 0) {
        links.forEach(link => {
            link.addEventListener('click', onButton);
        });
    }

    function onButton(x) {
        const link = x.target;
            if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
                const goto = document.querySelector(link.dataset.goto);
                const gotoB = goto.getBoundingClientRect().top  + pageYOffset - document.querySelector('header').offsetHeight;
            if (icoBurg.classList.contains('pick'))  {
                document.body.classList.remove('closed');
                bodyBurg.classList.remove('pick');
                icoBurg.classList.remove('pick');
            }
    
    
    
        window.scrollTo({
        top: gotoB,
        behavior: 'smooth'
    });
        x.preventDefault(); 
            }
    }

