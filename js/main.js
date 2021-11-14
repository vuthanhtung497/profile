
var items = document.querySelectorAll('.details-item')
var tabs = document.querySelectorAll('.details-tab')
// console.log(items, tabs)
items.forEach(function(item, index){
  const tab = tabs[index]
  item.onclick = function(){
    // console.log(this)
    document.querySelector('.details-tab.active').classList.remove('active')
    document.querySelector('.details-item.active').classList.remove('active')
    this.classList.add('active')
    tab.classList.add('active')
  }
})