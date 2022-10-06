function drawCanvas() {
	var canvasWidth = 1500;
	var canvas = document.getElementById('canvas');
	
		if (canvas.getContext) {
			var ctx = canvas.getContext('2d');		
			ctx.fillStyle = "#06003D";				
			ctx.fillRect (0,0,canvasWidth,1300);
			
			//water flowing using for loop							
			ctx.fillStyle = "#004A7F";						
			for(var i = 0; i <= canvasWidth; i++) {		
				ctx.fillRect (i*100,1300,100,100);		
			}																					
			//pyramid
			ctx.beginPath();
			ctx.moveTo(0,1300);
			ctx.lineTo(600,500);
			ctx.lineTo(1200,1000);
			ctx.lineTo(0,1000);
			ctx.fillStyle = '#FFD545';
			ctx.fill();					
			//sand but at night
			ctx.fillStyle ='#260A09';			
            ctx.fillRect (0,1000,1400,100);	
            ctx.fillRect (0,1100,1400,100);	
			ctx.fillRect (0,1200,1400,100);			
			ctx.fillRect (0,1100,900,100);	
			ctx.fillRect (1400,1200,100,100);							
            ctx.fillRect (1400,1000,100,100);					
			ctx.fillRect (1300,1100,200,100);	
            //cactus
            ctx.fillStyle ='#138A07';	
            ctx.fillRect (1400,900,100,100 );
            ctx.fillRect (1400,800,100,100);
            ctx.fillRect (100,900,100,100);
            ctx.fillRect (100,800,100,100);
            //"stars"
            ctx.beginPath()
            ctx.fillStyle ='#FFFFFF';	
            ctx.arc (200, 100, 10, 0, 2 * Math.PI);
            ctx.arc (100, 300, 10, 0, 2 * Math.PI);
            ctx.fill(); 

            ctx.beginPath()
            ctx.fillStyle ='#FFFFFF';	
            ctx.arc (400, 100, 10, 0, 2 * Math.PI);
            ctx.arc (200, 500, 10, 0, 2 * Math.PI);
            ctx.fill(); 

            ctx.beginPath()
            ctx.fillStyle ='#FFFFFF';	
            ctx.arc (600, 100, 10, 0, 2 * Math.PI);
            ctx.arc (900, 400, 10, 0, 2 * Math.PI);
            ctx.fill();

            ctx.beginPath()
            ctx.fillStyle ='#FFFFFF';	
            ctx.arc (500, 300, 10, 0, 2 * Math.PI);
            ctx.arc (300, 600, 10, 0, 2 * Math.PI);
            ctx.fill()

            //the moon
			ctx.beginPath();
            ctx.fillStyle= '#FFFFFF';
			ctx.arc(1250, 350, 200, 0.4, 2 * Math.PI);
			ctx.fill(); 	
            
            ctx.font = "30px Arial";		
			ctx.strokeStyle = '#FFFFFF';									
			ctx.strokeText("Desert at night", 1200, 1300);
		}
}