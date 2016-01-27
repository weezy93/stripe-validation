Stripe.js

Stripe.js makes it easy to collect credit card (and other similarly sensitive) details without having the information touch your server. More information can be found here

Including the Stripe Library on the Front-End

Add these script tags to your page to get started with Stripe.js.
# <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
Register an account with Stripe

Register

API Keys

Once registered and logged in, go to your Account Settings and click on the API Keys tab. Or click here. You should see a Test Secret Key and Test Publishable Key.

Setting Your Publishable Key

You must set your publishable key before using Stripe.js to identify your website when communicating with Stripe.

Stripe.setPublishableKey('pk_test_5y4vYN3HeeeDJieExOlz2Fmk');
Collecting card details

createToken converts sensitive card data to a single-use token which you can safely pass to your server to charge the user. The tutorial explains this flow in more detail.

  number: $('.card-number').val(),
  cvc: $('.card-cvc').val(),
  exp_month: $('.card-expiry-month').val(),
  exp_year: $('.card-expiry-year').val()
}, stripeResponseHandler);
The first argument to createToken is a JavaScript object containing credit card data entered by the user. It should contain the following required fields:

number: card number as a string without any separators, e.g. '4242424242424242'.
exp_month: two digit number representing the card's expiration month, e.g. 12.
exp_year: two or four digit number representing the card's expiration year, e.g. 2017.
The following fields are optional but recommended to help prevent fraud:

cvc: card security code as a string, e.g. '123'.
Test Credit Cards

In test mode, you can use these test cards to simulate a successful transaction:

4242424242424242 Visa
4012888888881881 Visa
4000056655665556 Visa (debit)
5555555555554444 MasterCard
Client-side Validation Methods

card.validateCardNumber()

// These will all return true, indicating a potentially valid card
// number. (Letters, spaces, and other punctuation are ignored.)

Stripe.card.validateCardNumber('4242424242424242')
Stripe.card.validateCardNumber('4242-42424242-4242')
Stripe.card.validateCardNumber('4242 4242 4242 4242')

// These invalid card numbers will all return false.

Stripe.card.validateCardNumber('4242-1111-1111-1111')
Stripe.card.validateCardNumber('12345678')
Stripe.card.validateCardNumber('mistake')
card.validateExpiry()

Stripe.card.validateExpiry('02', '15')      // false
Stripe.card.validateExpiry('02', '10')      // false
Stripe.card.validateExpiry('02', '2020')    // true
Stripe.card.validateExpiry(2, 2020)         // true
card.validateCVC

Stripe.card.validateCVC('123')              // true
Stripe.card.validateCVC('')                 // false