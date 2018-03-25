// Business

function Account(firstName, lastName, firstDeposit) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.firstDeposit = firstDeposit;
}

Account.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Account.prototype.deposit = function(amount) {
  return this.firstDeposit += amount;
}

Account.prototype.withdrawl = function(amount) {
  return this.firstDeposit -= amount;
}

var randomNumber = function () {
  return Math.floor((Math.random() * 1000000000) + 1);
}

// User

$(document).ready(function() {
  $("form#bank").submit(function(event) {
    event.preventDefault();

    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var firstDeposit = parseInt($("#first-deposit").val());
    var newAccount = new Account(firstName, lastName, firstDeposit);
    var accountNumber = randomNumber();
    $("#account-number").text(accountNumber);
    $("#account-name").text(newAccount.fullName());
    $("#balance").text(newAccount.firstDeposit);
    $("#bank").slideUp();
    $(".output").show();
    $("#funds").show();
    $(".insert-name").text(firstName);

      $("form#funds").submit(function(event) {
        event.preventDefault();
        var inputDeposit = parseInt($("#deposit").val());
        var inputWithdrawl = parseInt($("#withdrawl").val());

        var funds = 0
        if (inputDeposit > 0) {
          funds = newAccount.deposit(inputDeposit);
        }else if (inputWithdrawl > 0) {
          funds = newAccount.withdrawl(inputWithdrawl);
        }
        $("#balance").text(funds);

        parseInt($("#deposit").val(""));
        parseInt($("#withdrawl").val(""));
      });

    $("#first-name").val("");
    parseInt($("#first-deposit").val(""));

  });
});
