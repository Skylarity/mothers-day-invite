var container = $('#container')
var details = [
	{color: '#fff5ba', text: "Hello, mom!"},
	{color: '#ffffd1', text: "2"},
	{color: '#dbffd6', text: "3"},
	{color: '#bffcc6', text: "4"},
	{color: '#aff8db', text: "5"},
	{color: '#c4faf8', text: "6"},
	{color: '#85e3ff', text: "You're invited to something blah blah text filler here!"}
]
var layers = []

elsToAppend = []
details.forEach(function(detail, i) {
	var el = $("<div></div>", {
		"id": 'layer' + i,
		"style": 'background: ' + detail.color
	})
	el.html(detail.text + "<span>(Click to continue...)</span>")
	el.click(function() {
		console.log('Clicked!')
		if (i < details.length - 1) {
			$(this).addClass('offscreen')
		}
	})
	elsToAppend.push(el)
})
container.append(elsToAppend.reverse())