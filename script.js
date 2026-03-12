document.addEventListener('DOMContentLoaded', function(event){

    let images = document.querySelectorAll('.gallery-element');

    for (image of images) {
        image.addEventListener('click', function(event) {
            console.log('listener works');
            if (event.target.dataset.clicked === 'true') {
                event.target.style.border = 'none';
                event.target.dataset.clicked = false;
                this.querySelector('.gallery-bg').style.visibility = 'hidden';
            }
            else {
                event.target.style.border = '1px solid #D9DBBC';
                event.target.dataset.clicked = true;
                this.querySelector('.gallery-bg').style.visibility = 'visible';
            }
        });
    }

});
