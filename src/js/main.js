// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  	Stripe.setPublishableKey('pk_test_TtqruWaCvG7W1upFBiHX6fYV');
});

$('.order').on('click', function(){

	var cardInfo = {
		number: $('.card-number').val(),
		cvc: $('.card-cvc').val(),
		exp_month: $('.card-expiry').val().split('/')[0],
		exp_year: $('.card-expiry').val().split('/')[1],
	};

	Stripe.card.createToken(cardInfo, stripeResponseHandler);

});

function stripeResponseHandler(status, response) {
	if (response.error) {
		console.log(response.error.message);
	} else {
		console.log(response);
	}
}

$('.card-number').on('blur', function(){
	var $cardNum = $('.card-number');
	// validates card number before running the purchase, immediate feadback
		if ( !Stripe.card.validateCardNumber( $cardNum.val() ) ){
			$cardNum.css("background", "red");
		}  else {
				$cardNum.css("background", "green");

		}
	// validateCardNumber returns true or false, if OK true, if not false
});

$('.card-cvc').on('blur', function(){
	var $cardCvc = $('.card-cvc');
	if ( !Stripe.card.validateCVC( $cardCvc.val() ) ){
			$cardCvc.css("background", "red");
		}  else {
				$cardCvc.css("background", "green");
		}
});

$('.card-expiry').on('blur', function(){
	var exp = $('.card-expiry');
	var expMonth = exp.val().split('/')[0];
	var expYear = exp.val().split('/')[1];
	if ( !Stripe.card.validateExpiry( expMonth, expYear )) {
			exp.css("background", "red");
		}  else {
				exp.css("background", "green");
		}
});


// using the ID from the object returned in the response allows