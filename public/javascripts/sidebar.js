document.addEventListener("DOMContentLoaded", function(){
  sidebar = new Sidebar()
  page = new Page(sidebar)
})


// my sidebar object
function Sidebar() {
  var self = this

  // the actual sidebar <div> / $('.sidebar')
  this.div = document.querySelector('.sidebar')

  // show the sidebar by changing the CSS
  this.show = function() {
    self.div.style.display = 'block'
  }

  this.hide = function() {
    self.div.style.display = 'none'
  }
}


// the entire page i'm listening to...
function Page(sidebar) {
  this.sidebar = sidebar
  var self = this

  this.click = document.addEventListener('click', function(clickEvent) {
    self.handleClick(clickEvent)
  })

  this.handleClick = function(e) {
    if (e.target.id == 'sidebar-show') {
      self.sidebar.show()
    }

    if (e.target.id == 'sidebar-hide') {
      self.sidebar.hide()
    }
  }
}









