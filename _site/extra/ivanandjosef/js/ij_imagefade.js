// Cobbled together by 
// Jim Unwin
// for
// Another Adventure with Ivan and Josef
// 2009
// jimunwin.com


var position = 0;
var target = "image01";

var x;
var alltargets = new Array();
	alltargets[0] = "image01";
	alltargets[1] = "image02";
	alltargets[2] = "image03";
	alltargets[3] = "image04";
	alltargets[4] = "image05";
	alltargets[5] = "image06";
	alltargets[6] = "image07";
	alltargets[7] = "image08";
	alltargets[8] = "image09";
	alltargets[9] = "image10";
	alltargets[10] = "image11";
	alltargets[11] = "image12";

var fadeInTarget;
var fadeInTargetValue;


function startPolling(){setInterval("poll()",100)}

function poll(){
	if (navigator.appName == "Microsoft Internet Explorer"){var position = document.body.scrollTop;}
	else {var position = window.pageYOffset;}
	
	// incremement by 441 per image.
	if (position == 0  && position < 201){target = "image01";}
	
	else if (position > 201 && position < 642){target = "image02";}
	
	else if (position > 642 && position < 1083){target = "image03";}
	
	else if (position > 1083 && position < 1524){target = "image04";}
	
	else if (position > 1524 && position < 1965){target = "image05";}
	
	else if (position > 1965 && position < 2406){target = "image06";}
	
	else if (position > 2406 && position < 2847){target = "image07";}
	
	else if (position > 2847 && position < 3288){target = "image08";}
	
	else if (position > 3288 && position < 3729){target = "image09";}
		
	else if (position > 3729 && position < 4170){target = "image10";}	
	
	else if (position > 4170 && position < 4521){target = "image11";} // was 4611
	
	else if (position > 4521 ){target = "image12";}
	
	
	//reset all opacities, set new target
	for (x in alltargets)
		{	
		if (alltargets[x] == target)
			{currentOpac(alltargets[x], 100, 500)}
		else 
			{currentOpac(alltargets[x], 40, 500)}
		}
	return true;

}

// this bit, off t'interweb.
function currentOpac(id, opacEnd, millisec) { 
    //standard opacity is 100 
    var currentOpac = 100; 
     
    //if the element has an opacity set, get it 
    if(document.getElementById(id).style.opacity < 100) { 
        currentOpac = document.getElementById(id).style.opacity * 100; 
    } 

    //call for the function that changes the opacity 
    opacity(id, currentOpac, opacEnd, millisec) 
}

function opacity(id, opacStart, opacEnd, millisec) { 
    //speed for each frame 
    var speed = Math.round(millisec / 100); 
    var timer = 0; 

    //determine the direction for the blending, if start and end are the same nothing happens 
    if(opacStart > opacEnd) { 
        for(i = opacStart; i >= opacEnd; i--) { 
            setTimeout("changeOpac(" + i + ",'" + id + "')",(timer * speed)); 
            timer++; 
        } 
    } else if(opacStart < opacEnd) { 
        for(i = opacStart; i <= opacEnd; i++) 
            { 
            setTimeout("changeOpac(" + i + ",'" + id + "')",(timer * speed)); 
            timer++; 
        } 
    } 
} 

//change the opacity for different browsers 
function changeOpac(opacity, id) { 
    var object = document.getElementById(id).style; 
    object.opacity = (opacity / 100); 
    object.MozOpacity = (opacity / 100); 
    object.KhtmlOpacity = (opacity / 100); 
    object.filter = "alpha(opacity=" + opacity + ")"; 
}

