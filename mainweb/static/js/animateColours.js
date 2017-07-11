/**
 * animate.js
 */

var animateColours = function(){

	// Change the header colour on mouse hover
	
	// Find all triangles(left and right)
	var header = document.getElementsByTagName('header').item(0),
		triangle_links = [].slice.call(header.getElementsByTagName('svg')),	// Converting an HTMLCollection into an array
		initial_headerColour = window.getComputedStyle(header, null).getPropertyValue('background-color');
	
	function findarrow(str){
		var arrows = [];
		for (var i=0, len=triangle_links.length, link, link_name; i < len; ++i) {
			link = triangle_links[i];
			link_name = [].slice.call(link.classList);
			for (var j=0, ln=link_name.length, name; j < ln; j++){
				name = link_name[j];
				if (name.indexOf(str) != -1){
					arrows.push(link);
				}
			}
		}
		return arrows[0];
	}
	
	var left_arrow = findarrow("triangle-left");
	var right_arrow = findarrow("triangle-right");

	function getColour(eleme){
		var inner_elem = eleme.children.item(0),
			element_id = inner_elem.getAttribute('xlink:href'), 
			elem_id = element_id.replace("#", ""),
			symbol = document.getElementById(elem_id),
			sym_path = symbol.children.item(0);

		return sym_path.getAttribute('fill');
	}

	var left_style_colour = getColour(left_arrow);
	var right_style_colour = getColour(right_arrow);
 
	// Set the action
	left_arrow.addEventListener('mouseover', function(e){
		header.style.backgroundColor=left_style_colour;
	}, false);

	right_arrow.addEventListener('mouseover', function(e){
		header.style.backgroundColor=right_style_colour;
	}, false);

	left_arrow.addEventListener('mouseout', function(e){
		header.style.backgroundColor = initial_headerColour;
	}, false);

	right_arrow.addEventListener('mouseout', function(e){
		header.style.backgroundColor = initial_headerColour;
	}, false);
}

window.onload = animateColours;
window.addEventListener('resize', animateColours);