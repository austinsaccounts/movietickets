
//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


// user interface logic
$(document).ready(function() {
  $("#ticketSales").submit(function(event) {
    event.preventDefault();

    var showtimes =$("input[name =movieTime]:checked").val();
console.log(showtimes + " this is showtime")



      });

  });
