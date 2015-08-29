$(document).ready(function() {
  console.log("DOM loaded")
  form = new Form()
  site = new Site(form)
})

function Form() {
  var self = this;

  this.div = document.querySelector('#coach-adder');

  // FOR SOME REASON THE PAGE NEEDS TO REFRESH TO RENDER :(
  this.enterData = function(e) {
    e.preventDefault();
    var coachName = self.div.children[0].value;

    // only bit of jQuery
    $.ajax({
      url: "/create",
      type: "POST",
      data: {
        "name": coachName
      },
      done: function() {
        console.log('done');
      },
      success: function() {
        console.log('success');
        
        // need to append here to actually "render" w/o page refresh
        $('.coaches-list').append("<li>"+ coachName + "</li>")

      }
    });
  };
};

// the entire page i'm listening to...
function Site(fom) {
  this.fom = fom; // ISSUE WITH PAGE REFRESH
  var self = this;

  this.click = document.addEventListener('click', function(clickEvent) {
    self.handleClick(clickEvent);
  })

  this.handleClick = function(e) {
    if (e.target.id == 'add-coach') {
      self.fom.enterData(e);
    };
  };

}










