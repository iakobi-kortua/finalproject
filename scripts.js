let navBarLinks = document.getElementById('navbarLink')
let toggleButton = document.getElementById('togglebutton');

toggleButton.addEventListener('click', function(){
    navBarLinks.classList.toggle('active');
})

document.getElementById('send').addEventListener('click',function(){
    alert('Your Form send successfully')
})