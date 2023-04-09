let vkl = document.querySelector('.vkl')
let bulb = document.querySelector('.bulb')
let container = document.querySelector('.container')
let vkl_p_o = document.querySelector('.vkl_p_o')
let vkl_p_f = document.querySelector('.vkl_p_f')

vkl.addEventListener('click',function (e) {
    console.log('hi');
    bulb.classList.toggle('on')
    container.classList.toggle('w')
    vkl.classList.toggle('light')
    vkl_p_f.classList.toggle('no')
    vkl_p_o.classList.toggle('no')
})
