//Start of Navbar Section //
let navbar = document.querySelector('.navbar')

document.querySelector('#menu-bar').onclick = () => {
  navbar.classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
  navbar.classList.remove('active');
}
//End of Navbar Section //



// Start of Header Section //
window.onscroll = () => {

  if(window.scrollY > 100) {
    document.querySelector('header').classList.add('active');
  }else{
    document.querySelector('header').classList.remove('active');
  }

  }
// End of Header Section //
