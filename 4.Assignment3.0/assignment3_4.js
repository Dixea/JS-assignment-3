 $( "p" ).addClass(function( index, currentClass ) {
        var addedClass;
         if ( currentClass === "w3r_bg_orange" ) {
          addedClass = "w3r_bg_red";
          }
       return addedClass;
      });
    
      $( "p" ).last().addClass( "w3r_font_color" );