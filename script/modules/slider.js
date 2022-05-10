// Slider
export default function slider (){
    const image = document.querySelectorAll('.slider .slider-line img');
    const sliderLine = document.querySelector('.slider-line');
    let count = 0;
    let width;

    function initi(){

        width = document.querySelector('.slider-line').offsetWidth;
        sliderLine.getElementsByClassName.width = width*image.length + 'px';
        image.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        });

        rollSlider();
    };

    window.addEventListener('resize', initi);
    initi();

    document.querySelector('.slider-prev').addEventListener('click', function(){

        count--;
        if (count < 0 ){
            count = image.length -1;
        }
        rollSlider();

    });

    document.querySelector('.slider-next').addEventListener('click', function(){

        count++;
        if (count >= image.length){
            count = 0;
        }
        rollSlider();

    });

    function rollSlider(){
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    };

};