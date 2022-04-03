//jQuery 
function newItem() {

    //Adding new item
    let li = $('<li></li>');
  
    let inputValue = $("input").val();
    li.append(inputValue);
  
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $('#list').append(li);
      $("input").val('');
    }
  
    //Cross out an item
    function crossOut() {
      li.toggleClass("strike");
    }
  
    li.on("dblclick", crossOut);
  
    //Adding a delete button
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);
  
    crossOutButton.on("click", deleteListItem);
    
    function deleteListItem() {
      li.addClass("delete")
    }
    //Reordering items
    $('#list').sortable();
  
  }