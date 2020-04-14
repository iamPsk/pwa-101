const nav = document.getElementsByTagName('nav')

const collapseBtn = nav[0].children[0];
const colllapseble = nav[0].children[1]


if(window.innerWidth <= 600) {
  colllapseble.style.display = 'none'
}

collapseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(e); 


  colllapseble.style.display == "" ? colllapseble.style.display = 'none' : colllapseble.style.display = ""

  console.log(colllapseble.style.display);
  
})


// console.log(colllapseble);
