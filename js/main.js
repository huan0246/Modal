document.addEventListener('DOMContentLoaded', addListeners);

function addListeners(){
  let navs = document.querySelectorAll('a');
  let buttons = document.querySelectorAll('button');
  let div = document.querySelector('div');
  navs.forEach(nav => {
    nav.addEventListener('click', showoverlay);
  });
  buttons.forEach(button => {
    button.addEventListener('click', hideoverlay);
  });
  div.addEventListener('click', hideoverlay);
};
function showoverlay(ev){
  ev.preventDefault();
  let title = ev.target;
  let overlay = document.querySelector('.overlay');
  let span = document.querySelector('span');
  span.innerHTML = title.innerHTML;
  overlay.classList.remove('hide');
  overlay.classList.add('show');
  showmodal(ev);
};
function hideoverlay(ev){
  ev.preventDefault();
  let overlay = document.querySelector('.overlay');
  overlay.classList.remove('show');
  overlay.classList.add('hide');
  hidemodal();
  getconsole(ev);
};
function getconsole(ev){
  clickpart = ev.currentTarget;
  if(clickpart.hasAttribute('data-message')){
  console.log('message: ' + clickpart.getAttribute('data-message'));
  }else{
    console.log('you clicked overlay');
  };
}
function showmodal(ev){
  ev.preventDefault();
  let modal = document.querySelector('.modal');
  modal.classList.remove('off');
  modal.classList.add('on');
};
function hidemodal(){
  let modal = document.querySelector('.modal');
  modal.classList.remove('on');
  modal.classList.add('off');
}