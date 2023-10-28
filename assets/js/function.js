// TAB CONTENT
function openContent(evt, contentName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(contentName).style.display = "block";
    evt.currentTarget.className += " active";
  }
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


  /*==================== SORT DROPDOWN ====================*/
function dropdown() {
    document.getElementById("dropdown-content").classList.toggle("show-dropdown");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.sort')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-dropdown')) {
          openDropdown.classList.remove('show-dropdown');
        }
      }
    }
  }

  function cart() {
    document.getElementById("cart-content").classList.toggle("show-cart");
  }
  
  // Close the cart menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.cart')) {
      var dropdowns = document.getElementsByClassName("cart-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-cart')) {
          openDropdown.classList.remove('show-cart');
        }
      }
    }
  }

// ================== ITEM COUNTER ===================
function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10); 
    value = isNaN(value)? 0 : value;
    value ++;
    input.value = value;
  }
  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10); 
    if (value > 1) {
      value = isNaN(value)? 0 : value;
      value --;
      input.value = value;
    }
  }