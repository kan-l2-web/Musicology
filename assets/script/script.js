// #####################################################################
// #                                                                   #
// #                         code by Kandemir                          #
// #                                                                   #
// #####################################################################

let burger = document.querySelector('.hdr__burger');
let nav = document.querySelector('.hdr__nav');

burger.addEventListener('click', function(e){
	nav.classList.toggle('active');
});
