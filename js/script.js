var container = $('#container')
var details = [
	{color: '#fff5ba', text: "Hello, mom!"},
	{color: '#ffffd1', text: "I’m glad that you’re my mother,"},
	{color: '#dbffd6', text: "kind and caring and strong."},
	{color: '#bffcc6', text: "'Cause surely no one else,"},
	{color: '#aff8db', text: "could have put up with me this long!"},
	{
		color: '#85e3ff',
		text: "You're invited to a relaxing day out!"
			+ "<span>AGENDA:</span>"
			+ "<span>10:00 am &mdash; Go get some coffee or tea</span>"
			+ "<span>11:00 am &mdash; Walk around the Railyards Market</span>"
			+ "<span>1:00 pm &mdash; Have lunch at St. Clair's Winery and Bistro</span>"
			+ "<span>3:00ish pm &mdash; Your choice of live music! (We've found several events around town)</span>"
			+ "<br /><span>Love you, mom!</span>"
			+ "<span>We'll pick you up at 10:00 am on Sunday.</span>"
			+ "<br /><button class=\"start-over\" onclick=\"goToStart()\">Start Over</button>"
	}
]
var layers = []

elsToAppend = []
details.forEach(function(detail, i) {
	var el = $("<div></div>", {
		"id": 'layer' + i,
		"style": 'background-color: ' + detail.color + ';' + 'background-image: url("img/floral-bg-transparent.png");'
	})
	var notLast = i < details.length - 1
	el.html(detail.text + (notLast ? "<span class='click'>(Click to continue...)</span>" : ""))
	if (notLast) {
		el.addClass('clickable')
		el.click(function() {
			$(this).addClass('offscreen')
		})
	}
	elsToAppend.push(el)
})
container.append(elsToAppend.reverse())

function goToStart() {
	$('div[id^="layer"]').removeClass('offscreen')
}
