<script>
  function Store(name, minTraffic, maxTraffic, percentEnter, donutsPurchased) {
    this.name = name;
    this.minTraffic = minTraffic;
    this.maxTraffic = maxTraffic;
    this.percentEnter = percentEnter;
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
        console.log(this.name + " needs " + hourlyDonuts + " between " + hrs[i]);
      };
      console.log(this.name + " needs " + dailyDonuts + " per day.")
    };
  }

  var downtown       = new Store("Downtown",         80,  220,  .10,  4  );
  var capitolHill    = new Store("Capitol Hill",     5,   45,   .45,  2  );
  var southLakeUnion = new Store("South Lake Union", 180, 250,  .05,  6  );
  var wedgewood      = new Store("Wedgewood",        20,  60,   .20,  1.5);
  var ballard        = new Store("Ballard",          25,  175,  .33,  1  );

  var msg = downtown.getDonuts();
  var divDowntown = document.getElementById("downtown");
  divDowntown.innerHTML = msg;

</script>