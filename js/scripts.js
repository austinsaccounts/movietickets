//business logic
function Ticket(showtimes, adults, kids, cardHolder) {

  this.showtimes = parseInt(showtimes);
  this.adults = parseInt(adults);
  this.kids = parseInt(kids);
  this.cardHolder = cardHolder;
  this.childPrices = this.childPrices();
  this.adultPrices = this.adultPrices();
}
Ticket.prototype.adultPrices = function(newTicket) {
  if (this.showtimes === 3) {
    adultPrices = this.adults * 7;
  }
else {
    adultPrices = this.adults * 10;
  }
  return adultPrices;
}
Ticket.prototype.childPrices = function(newTicket) {
  if (this.showtimes === 3) {
    childPrices = this.kids * 5;
  }
else {
    childPrices = this.kids * 7;
  }
  return childPrices;
}


Ticket.prototype.receipt = function() {
  console.log(this);
  return this.cardHolder + " you have purchased " + this.adults + " adult tickets for $" + this.adultPrices + " and " + this.kids + " kids tickets for $" + this.childPrices + " for the " + this.showtimes + " 0'clock showing your total is $" + parseInt(childPrices + adultPrices);
}

// user interface logic
$(document).ready(function() {
  $("#ticketSales").submit(function(event) {
    event.preventDefault();

    var showtimes = $("input[name=movieTime]:checked").val();
    console.log(showtimes + " this is showtime")
    var adults = $("input[name=adults]").val();
    console.log(adults);
    var kids = $("input[name=kids]").val();
    console.log(kids);
    var cardHolder = $("#cardName").val();
    console.log(cardHolder);
    var newTicket = new Ticket(showtimes, adults, kids, cardHolder);
    // newTicket += newTicket.prices();
    // console.log(newTicket);
    $(".ticketOutput").append(newTicket.receipt());
    console.log(newTicket);

      });

  });
