// this plugin is used to change individual radio buttons to a radio button list ie to deselect the radio buttons when another radio button is checked.
// the function is called when any of the radio button is checked.
//contains another function change which is used for firing the action on radio button click.
//group class name=inpit,
//elemnet id=input1,input2
//this is for jquery 1.4.2 
// for higher version change the live() to on()

(function($) {

   $.fn.radio = function() {

       return this.each( function() {
		  
		     if ( this.checked ) 
			 {
			
         $('.inpit').attr('checked', false);
		   $(this).attr('checked', true);
		    $( this ).change();
			 }
	  
 
	   
        });
		
    
  
   }
    $.fn.change = function() {

       return this.each( function() {
		  
		     if ( this.checked ) 
			 {
			
      if($(this).attr('id')=="input1")
	  {
		  alert("you clicked one");
	  }
	  else if($(this).attr('id')=="input2")
	  {
		  alert("you clicked two");
	  }
	   else if($(this).attr('id')=="input3")
	  {
		  alert("you clicked three");
	  }
	   else if($(this).attr('id')=="input4")
	  {
		  alert("you clicked four");
	  }
			 }
	  
 
	   
        });
		
    
  
   }

}(jQuery))

$(function(){
	$('.inpit').attr('checked', false);
});

$(' input[type=radio][class=inpit] ').live('change',function(event) {
	
	$(this).radio();
	});
