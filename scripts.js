var dataset = [ ];

for (var i = 0; i<25; i++ ){
	dataset.push(Math.random() * 30);
}

function printData(){
	d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d){
    	return (d*5) + "px";
    });
};

window.onload = function(){
	printData();
	console.log("printed!")
}
