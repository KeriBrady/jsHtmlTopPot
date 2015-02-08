var donutDiv = document.getElementById("donutDiv");

function displayContent(){
  //get value from drop down menu on click

  var $selectedStore = storeList[$('#stores').val()];
  $selectedStore.getDonuts();

  $('#storeHeader').html($selectedStore.name);
}
 

function Store(name, minTraffic, maxTraffic, percentEnter, donutsPurchased) {
  this.name            = name;
  this.minTraffic      = minTraffic;
  this.maxTraffic      = maxTraffic;
  this.percentEnter    = percentEnter;
  this.donutsPurchased = donutsPurchased;
  var hrs = ["7 and 8 a.m.", "8 and 9 a.m.", "9 and 10 a.m.", "10 and 11 a.m.", "11 a.m. and 12 p.m.", "12 and 1 p.m.", "1 and 2 p.m.", "2 and 3 p.m.", "3 and 4 p.m.", "4 and 5 p.m.", "5 and 6 p.m."];

  this.getDonuts = function() {
    var footTraffic,
      hourlyDonuts,
      dailyDonuts =0;
    for(var i = 0; i <= 10; i++) {
      footTraffic = Math.random() * (this.maxTraffic - this.minTraffic + 1) + this.minTraffic;
      hourlyDonuts = Math.floor(footTraffic * (this.percentEnter * this.donutsPurchased));
      dailyDonuts += hourlyDonuts;
      donutDiv.innerHTML += "<p>" + this.name + " needs " + hourlyDonuts + " donuts between " + hrs[i] + "</p>";
    };
    donutDiv.innerHTML += "<p><b>" + this.name + " needs " + dailyDonuts + " donuts per day." + "</b><p>";
  };
}

var storeList = [
  new Store("Ballard",          25,  175,  .33,  1  ),
  new Store("Capitol Hill",     5,   45,   .45,  2  ),
  new Store("Downtown",         80,  220,  .10,  4  ),
  new Store("South Lake Union", 180, 250,  .05,  6  ),
  new Store("Wedgewood",        20,  60,   .20,  1.5)
];

$('#submit').click(function() {
  displayContent()
});
  
$('#refresh').click(function() {
  history.go();
});

