(function($) {
    
    $.fn.stance = function( text, options ) {
    
        var settings = {
            fontFamily : "Arial Black",
            fontSize : 96,
            shadow : true,
            resize : true
        };

        if( options ) {
            $.extend( settings, options );
        }

        return this.each(function() {
        
            var fontString = retrieveFontString( settings.fontSize, settings.fontFamily );

            if( !settings.width || !settings.height ) {
                settings.width = $(this).width();
                settings.height = $(this).height();
            } else {
                if( settings.resize ) {
                    $(this).width(settings.width);
                    $(this).height(settings.height);
                }
            }
            
            var $canvasElement = $("<canvas>")
                .attr("width", settings.width)
                .attr("height", settings.height);

            var canvas = $canvasElement.get(0).getContext("2d");
            canvas.font = fontString;
            canvas.textBaseline = "middle";
            canvas.textAlign = "center";
            
            canvas.drawImage($(this).get(0), 0, 0, $(this).width(), $(this).height());
            canvas.globalCompositeOperation = "destination-atop";
            
            if( settings.shadow ) setShadow( canvas );

            var x = (settings.width / 2 );
            var y = (settings.height / 2 );

            canvas.fillText(text, x, y);
            canvas.globalCompositeOperation = "destination-atop";

			clearShadow( canvas );
            
            if( settings.backgroundColor ) {
                canvas.fillStyle = settings.backgroundColor;
                canvas.fillRect(0,0,settings.width,settings.height);
            }
            
            $(this).attr("src", $canvasElement.get(0).toDataURL());
        });
    }    
    
    function retrieveFontString( pixels, fontFamily ) {
        return pixels + "px " + fontFamily;
    }
    
    function setShadow( canvas ) {
		canvas.shadowOffsetX = 2.0;
		canvas.shadowOffsetY = 2.0;
		canvas.shadowBlur = 10;
		canvas.shadowColor = "Black";
    }
    
    function clearShadow( canvas ) {
		canvas.shadowOffsetX = 0;
		canvas.shadowOffsetY = 0;
		canvas.shadowBlur = 0;
		canvas.shadowColor = "transparent";
    }
    
})(jQuery);
