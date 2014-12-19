(function($) {
  module('jQuery.centershow');

  asyncTest('default', function(assert) {
	var el="<img src='http://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/130608_Matsumoto_Castle_Matsumoto_Nagano_pref_Japan02bs4.jpg/300px-130608_Matsumoto_Castle_Matsumoto_Nagano_pref_Japan02bs4.jpg' id='centershow'></img>";
	$('#target').append(el);
	$('#centershow').centershow();
    expect(1);
	setTimeout(function(){
		assert.equal($('#centershow').css('position'),'fixed');
		start();
	},5000);
  });
}(jQuery));
