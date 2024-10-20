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

    function loadTime() {
      document.getElementById("demo").innerHTML = document.lastModified;
  }

  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }