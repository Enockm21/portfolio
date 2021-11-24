const toggleButton=document.getElementById('toggle-button');
const sideBar=document.getElementById('sidebar');

toggleButton.addEventListener('click',show);

function show(){
    sideBar.classList.toggle('active');
}


document.querySelector('.content')

.addEventListener('click', () => {
  sideBar.classList.remove('active');
});
