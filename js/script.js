// sidebar

const activsidebar = document.querySelector("#hamburger-menu");
const sidebar = document.querySelector(".sidebar .sidebar-extra");

activsidebar.addEventListener("click", ()=>{
    sidebar.classList.toggle("active");
});


// klik diluar

const luar = document.querySelector("#hamburger-menu");

document.addEventListener('click',function(e){
    if(!luar.contains(e.target)&& !sidebar.contains(e.target)){
        sidebar.classList.remove('active');
    };
});