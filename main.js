var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /*toggle between adding and removing the "active" class*/
        this.classList.toggle("active");

        /*toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight === "block") {
            panel.style.maxHeight = "null";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}