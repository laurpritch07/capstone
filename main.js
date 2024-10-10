var acc = document.getElementsByClassName("accordion");
var i;

// /* Explorations Side Nav - Grabs Buttons */


for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      this.textContent = 'Learn More';
        /*toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          this.textContent = 'Hide';
        }
      });
    }

    let btn = document.querySelector('#btn')
    let sidebar = document.querySelector('.sidebar')
    
    btn. onclick = function () {
      sidebar.classList.toggle('active')
    }