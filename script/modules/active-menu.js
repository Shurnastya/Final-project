export default function activeMenu() {
    window.addEventListener('scroll', () => {
        let scrollDis = window.scrollY;

        document.querySelectorAll('.appetizers').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('.menu').clientHeight <=  scrollDis) {

                document.querySelectorAll('.nav-menu a').forEach((el) => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active');
                    }
                });

                document.querySelectorAll('.nav-menu li')[i].querySelector('a').classList.add('active');
            }
        });
    });
};