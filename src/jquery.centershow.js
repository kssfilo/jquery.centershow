(function($){
	$.fn.centershow=function(){
		
		var back=$('<div onclick="$(this).hide()" style="position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.8);">');
		$('body').append(back);

		var close=$('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gwTBCUV4ZteXwAAAFdQTFRFAAAAtra2////////iYmJjIyM////////////////////////1NTU////19fX////////////////////////////////6Ojo////////7Ozs7e3t////cG4hugAAABp0Uk5TAAEBAiorLi8wNzhuc3h7gIiRx8jJytHV/f7S9UgRAAAAAWJLR0QcnARBBwAAAY5JREFUSMetlduagyAMhAN2a7XVWGyr1Hn/59wLjgK2+u1yhfAbhzgJRNkYmDt0zAN9HYOChhka6uMLbUD9C20ZlY1CaahGFugbtsYth1/h49wTUc9B1iuD3Q5Hi+wivIqw6ikWKalXBdzCdeE4dYpLNvC5dHh5Nji7zQbbsMfR2Gf1Cfa4sn/QaHaw8JibSfMr2hD67bIweUjQ5DL0DsEBABdhYMyL/YqslxkGFxcAABHRoN2MiKD9eRoA2q8D0IMV4vJznwFgJCKiEQDme5Rj5YRQFAP6eapOT51vWCEqyS2uSP6BMlJ4ZSXZjKEe9BisbTEOqUzcuLJSa+guVhckFlc7ytYrp/laZTEOxt6pu49OuTsnq3wLWym42gquxTrf8TEFLVZCZQUtzpGOin0yZT6ZEp8c82Dqb+cNeUbB30nt3H1HieZR7Zi6vMnN1ruqy2M1f7Cf7OlVsVLrDaaUl7bPltqmRp302No4YKMl7+vfAS/cDTkcAuWD/3ynEdHPI7svHz//dBd/ved/ARv8V5YcG4VYAAAAAElFTkSuQmCC" />');
		close.appendTo(back);
		
		this.each(function(){
			var self=$(this);
			self.css({
				position:'fixed',
				'top':'50%',
				'left':'50%',
				'margin-left':-self.width()/2,
				'margin-top':-self.height()/2,
				'z-index':1,
			});
			self.appendTo(back);
		});

	};
})(jQuery);
