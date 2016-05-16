//data

var myUsers = [1,2,3,4,5,6,7,8,9,10];

var myUsers2 = [
{
id: 1,
name: "Greg",
Instrument: "Guitar",
level: "beginner",
youtube: "https://youtu.be/nNYcRzHKb-g",
city: "Bound Brook"
},
{
id: 2,
name: "Mike",
Instrument: "Guitar",
level: "beginner",
youtube: "https://youtu.be/-ZTvqUvgYCI",
city: "Bound Brook"
},
{
id: 3,
name: "Dave",
Instrument: "Guitar",
level: "intermediate",
youtube: "https://youtu.be/gXbPlFgSfao",
city: "Bound Brook"
},
{
id: 4,
name: "Tom",
Instrument: "Guitar",
level: "intermediate",
youtube: "https://youtu.be/4WoxLk2g4-w",
city: "Bound Brook"
},
{
id: 5,
name: "Jim",
Instrument: "Guitar",
level: "expert",
youtube: "https://youtu.be/CinJuVtdp3Y",
city: "Bound Brook"
},
];




//home page counter
$('.timer').countTo({	
	from: 0, 
	to: 1205, //myUsers.length,
	speed: 3000,
	refreshInterval: 50,
});



//filter isotope grid
var $isogrid = $('.isogrid')

$isogrid.isotope({
  itemSelector: '.grid-item',
  resizable: false,
  masonry: { columnWidth: $isogrid.width() / 3 }
});



// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  //alert($(this).attr('data-filter'));
  $isogrid.isotope({ filter: filterValue });
});

//submit button
$('#searchnow').on('click', function(){
//send selection
console.log($('#search-inst').val());
console.log($('#search-inst2').val());
console.log($('#search-city').val());
console.log($('#search-genre').val());

//populate iso box
	$(".grid-container").html("");
	for (var i = 0; i < myUsers2.length; i++){
	var youtubeString = myUsers2[i].youtube;
	var videoId = youtubeString.split('be/')[1];

	var $newitems = 
			$('<div class="portfolio-item grid-item' + " " + myUsers2[i].level + '" id="' + [i] + '" data-youtube="https://www.youtube.com/embed/' + videoId  + '">' +
						'<div class="porttopbar' + ' ' + myUsers2[i].level + '"></div>' +
						'<div class="innerport">' +
						'<div class="isoimg col-xs-4"><img src="images/placeholder_75x75.png"></div>' +
						'<div class="isodiv col-xs-8">' +
						'<div class="name">' + myUsers2[i].name + '</div>' +
						'<div class="inst">' + myUsers2[i].Instrument + '</div>' +
						'<div class="city">' + myUsers2[i].city + '</div>' +
						'</div></div></div>');
		$isogrid.isotope( 'insert', $newitems );


	}

});

/////Open Modal
$('.grid-container').on( 'click', '.grid-item', function() {
	var modalID = this.id;
	var url = $(this).data('youtube');
	var level = myUsers2[modalID].level;
  $('#myModal').modal('show');
  $('#modalTitle').text(myUsers2[modalID].name);
  $('#modalInst').text(myUsers2[modalID].Instrument);
  $('#modalCity').text(myUsers2[modalID].city);
  $('#modalLevel').text(myUsers2[modalID].level);
  $('#modalFrame').attr('src', url);

 //Close Modal - Pass 
$('#myModal').on( 'click', '#modalPass', function() {
	$isogrid.isotope( 'remove', $('#' + modalID))
    // layout remaining item elements
    .isotope('layout');
$('#myModal').modal('hide');
$('#modalFrame').attr('src', "");
})

//Close Modal - Email 
$('#myModal').on( 'click', '#modalEmail', function() {
	$isogrid.isotope( 'remove', $('#' + modalID))
    // layout remaining item elements
    .isotope('layout');
$('#myModal').modal('hide');
$('#modalFrame').attr('src', "");
})

  
});


///////////////login////////////////
$('#login-submit').on('click', function(){
	var username = $('#login-username').val().trim();
	var password = $('#login-password').val().trim();
	$('#login-username').val("");
	$('#login-password').val("");
	//console.log(username + " " + password);
	return false;

})


/////registration////////////

$('#register-submit').on('click', function(){
	var name = $('#register-name').val().trim(); 
	var username = $('#register-username').val().trim();
	var password = $('#register-password').val().trim();
	var city = $('#register-city').val();
	var state = $('#register-state').val();
	var instrument = $('#register-inst').val();
	var skill = $('#register-skill').val();
	var photo = $('#register-photo').val().trim();
	var about = $('#register-about').val().trim();
	var info = $('#register-info').val().trim();
	var youtube = $('#register-youtube').val().trim();

console.log(name  + '\n' + username  + '\n' + password  + '\n' + city  + '\n' + state  + '\n' + instrument  + '\n' + skill  + '\n' + photo  + '\n' +
		about  + '\n' + info  + '\n' + youtube);

	$('#register-name').val(""); 
	$('#register-username').val("");
	$('#register-password').val("");
	$('#register-city').val("");
	$('#register-state').val("");
	$('#register-inst').val("");
	$('#register-skill').val("");
	$('#register-photo').val("");
	$('#register-about').val("");
	$('#register-info').val("");
	$('#register-youtube').val("");

		return false;
})



