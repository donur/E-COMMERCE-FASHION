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

  navbar.classList.remove('active'); // for dark, light mode //


  if(window.scrollY > 100) {
    document.querySelector('header').classList.add('active');
  }else{
    document.querySelector('header').classList.remove('active');
  }

  }
// End of Header Section //

// Start of Dark, Light Mode //
let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
  themeToggler.classList.toggle('fa-sun');
  if(themeToggler.classList.contains('fa-sun')) {
    document.querySelector('body').classList.add('active');
  }else{
    document.querySelector('body').classList.remove('active');

  }
}
// End of Dark, Light Mode //
