let slider_buttons_1 = document.querySelectorAll('.team_slider_nav_itam')[0];
let slider_buttons_2 = document.querySelectorAll('.team_slider_nav_itam')[1];
let slider_buttons_3 = document.querySelectorAll('.team_slider_nav_itam')[2];
let slider_buttons_4 = document.querySelectorAll('.team_slider_nav_itam')[3];
let slider_buttons_arr = document.querySelectorAll('.team_slider_nav_itam');
let slider_items_arr = document.querySelectorAll('.team_slider_list');

let hidden_slider_items_arr = [];
let active_slider_items_arr = [];

slider_buttons_1.addEventListener('click', slider_func_1);
slider_buttons_2.addEventListener('click', slider_func_2);
slider_buttons_3.addEventListener('click', slider_func_3);
slider_buttons_4.addEventListener('click', slider_func_4);

function slider_func_1(){
    if(slider_buttons_1.classList.contains('active') == false){

        if(slider_buttons_2.classList.contains('active')){
            slider_items_arr[0].style.transform = 'translate(0, 0px)';
            slider_items_arr[1].style.transform = 'translate(61.9vw, -20.5vw)';
        }

        if(slider_buttons_3.classList.contains('active')){
            slider_items_arr[0].style.transform = 'translate(0, 0px)';
            slider_items_arr[2].style.transform = 'translate(61.9vw, -41vw)';
        }

        if(slider_buttons_4.classList.contains('active')){
            slider_items_arr[0].style.transform = 'translate(0, 0px)';
            slider_items_arr[3].style.transform = 'translate(61.9vw, -61.5vw)';
        }

        for(let i = 0;i < slider_buttons_arr.length; i++){
            if(slider_buttons_arr[i].classList.contains('active')){
                slider_buttons_arr[i].classList.remove('active');
            }
        }

        slider_buttons_1.classList.add('active');
    }
}

function slider_func_2(){
    if(slider_buttons_2.classList.contains('active') == false){
        slider_items_arr[1].classList.remove('hidden');

        if(slider_buttons_1.classList.contains('active')){
            slider_items_arr[0].style.transform = 'translate(-61.9vw, 0px)';
            slider_items_arr[1].style.transform = 'translate(0, -20.5vw)';
        }

        if(slider_buttons_3.classList.contains('active')){
            slider_items_arr[2].style.transform = 'translate(61.9vw, -41vw)';
            slider_items_arr[1].style.transform = 'translate(0, -20.5vw)';
        }

        if(slider_buttons_4.classList.contains('active')){
            slider_items_arr[3].style.transform = 'translate(61.9vw, -61.5vw)';
            slider_items_arr[1].style.transform = 'translate(0, -20.5vw)';
        }

        for(let i = 0;i < slider_buttons_arr.length; i++){
            if(slider_buttons_arr[i].classList.contains('active')){
                slider_buttons_arr[i].classList.remove('active');
            }
        }
        
        console.log(hidden_slider_items_arr);
        slider_buttons_2.classList.add('active');
    }
}

function slider_func_3(){
    if(slider_buttons_3.classList.contains('active') == false){
        slider_items_arr[2].classList.remove('hidden2');

        if(slider_buttons_1.classList.contains('active')){
            slider_items_arr[0].style.transform = 'translate(-61.9vw, 0px)';
            slider_items_arr[2].style.transform = 'translate(0, -41vw)';
        }

        if(slider_buttons_2.classList.contains('active')){
            slider_items_arr[1].style.transform = 'translate(-61.9vw, -20.5vw)';
            slider_items_arr[2].style.transform = 'translate(0, -41vw)';
        }

        if(slider_buttons_4.classList.contains('active')){
            slider_items_arr[3].style.transform = 'translate(61.9vw, -61.5vw)';
            slider_items_arr[2].style.transform = 'translate(0, -41vw)';
        }

        for(let i = 0;i < slider_buttons_arr.length; i++){
            if(slider_buttons_arr[i].classList.contains('active')){
                slider_buttons_arr[i].classList.remove('active');
            }
        }

        console.log(hidden_slider_items_arr);
        slider_buttons_3.classList.add('active');
    }
}

function slider_func_4(){
    if(slider_buttons_4.classList.contains('active') == false){
        slider_items_arr[3].classList.remove('hidden3');

        if(slider_buttons_1.classList.contains('active')){
            slider_items_arr[0].style.transform = 'translate(61.9vw, 0px)';
            slider_items_arr[3].style.transform = 'translate(0, -61.5vw)';
        }

        if(slider_buttons_2.classList.contains('active')){
            slider_items_arr[1].style.transform = 'translate(-61.9vw, -20.5vw)';
            slider_items_arr[3].style.transform = 'translate(0, -61.5vw)';
        }

        if(slider_buttons_3.classList.contains('active')){
            slider_items_arr[2].style.transform = 'translate(-61.9vw, -41vw)';
            slider_items_arr[3].style.transform = 'translate(0, -61.5vw)';
        }

        for(let i = 0;i < slider_buttons_arr.length; i++){
            if(slider_buttons_arr[i].classList.contains('active')){
                slider_buttons_arr[i].classList.remove('active');
            }
        }
        
        slider_buttons_4.classList.add('active');
    }
}