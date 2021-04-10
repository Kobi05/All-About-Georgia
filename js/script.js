// const toggleButton = document.getElementByClassName('burger')[0]
// const navbarLinks = document.getElementsByTagName('nav')[0]

// toggleButton.addEventListener('click', () => {
// 	navbarLinks.classlist.toggle('active')
// })


$("#burger").on("click", function(){
    $("#menu").toggleClass("active");
  })