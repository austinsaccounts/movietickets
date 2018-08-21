//business logic
function purchaseHistory(newTicket) {
  console.log(newTicket);
  history = [];
}

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
  } else {
    adultPrices = this.adults * 10;
  }
  return adultPrices;
}
Ticket.prototype.childPrices = function(newTicket) {
  if (this.showtimes === 3) {
    childPrices = this.kids * 5;
  } else {
    childPrices = this.kids * 7;
  }
  return childPrices;
}


Ticket.prototype.receipt = function() {

  return this.cardHolder + " you have purchased " + this.adults + " adult tickets for $" + this.adultPrices + " and " + this.kids + " kids tickets for $" + this.childPrices + " for the " + this.showtimes + " 0'clock showing your total is $" + parseInt(childPrices + adultPrices);
}
// user interface logic
$(document).ready(function() {
  $("#ticketSales").submit(function(event) {
    event.preventDefault();

    var showtimes = $("input[name=movieTime]:checked").val();
    var adults = $("input[name=adults]").val();
    var kids = $("input[name=kids]").val();
    var cardHolder = $("#cardName").val();
    var newTicket = new Ticket(showtimes, adults, kids, cardHolder);


    $("ul").append("<li>" + cardHolder + " <p class='display'>" + newTicket.receipt() + " </p></li>");

    // $("ul.purchaser").last().click(function() {
    $("li").click(function() {
      console.log(this);
      $("p").addClass("display");
      $(this).find('.display').toggleClass("display");
      $("#purchase-Name").text(cardHolder);
      $("#purchase-Adults").text(adults);
      $("#purchase-Kids").text(kids);
      $("#purchase-Time").text(showtimes);
      $("#purchase-Price").text(parseInt(childPrices + adultPrices));
      // $("#purchase-Name").text(newTicket.cardHolder);
      //  $("#purchase-Adults").text(newTicket.adults);
      //  $("#purchase-Kids").text(newTicket.kids);
    });
  });
});
