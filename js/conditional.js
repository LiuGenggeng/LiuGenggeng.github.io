Modernizr.load([
  {
    test: Modernizr.mq('only all'),
    nope: 'js/respond.min.js'
  },
  {
    // load the menu convertor if max-width is 600px;
    test: Modernizr.mq('only screen and (max-width: 600px)'),
    yep : 'js/jquery.mobilemenu.js',
    callback : function () {
      // Run this after everything in this group has downloaded
      // and executed, as well everything in all previous groups
      $(document).ready(function(){
      
      	$('#mainNav').mobileMenu({
      	  switchWidth: 600,                   //width (in px to switch at)
      	  topOptionText: 'Select a page',     //first option text
      	  indentString: '&nbsp;&nbsp;&nbsp;'  //string for indenting nested items
      	});
      });
      
    }
  }
]);