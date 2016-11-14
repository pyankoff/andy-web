var handler = StripeCheckout.configure({
  key: 'pk_test_f16GTiqsZw504GSEVl55b9IF',
  image: '/img/andy_logo.png',
  locale: 'auto',
  token: function(token) {
    window.location.href = "/thank-you";
  }
});

$('.pay').on('click', function(e) {
  handler.open({
    name: 'Andy English Bot',
    description: 'Support',
    amount: e.target.value
  });
  e.preventDefault();
});

// Close Checkout on page navigation:
$(window).on('popstate', function() {
  handler.close();
});
