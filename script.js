
document.querySelectorAll('.ham').forEach(item => {
    item.addEventListener('click', event => {
      console.log('clicked');
      item.nextElementSibling.classList.toggle('active');
      if (item.firstElementChild.classList.contains('not_active')){
        item.firstElementChild.classList.toggle('not_active');
        item.lastElementChild.classList.toggle('not_active');
      }
      else if(item.lastElementChild.classList.contains('not_active')){
        item.firstElementChild.classList.toggle('not_active');
        item.lastElementChild.classList.toggle('not_active');
      }
      else {
          return;
      }
    });
  });


  function FixScrollToggle (node) {
    var target = document.body;
    
    function isClicked () {
      return target.classList.contains('fixScrollToggle--on');
    }
    
    function freeze() {
      target.classList.add('fixScrollToggle--on');
    }
    
    function unFreeze() {
      target.classList.remove('fixScrollToggle--on');
    }
    
    
    function onClick (e) {
      if (isClicked()) { return unFreeze(); }
      return freeze();
    }
    
    node.addEventListener('click', onClick, false);
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.slice.
      call(document.querySelectorAll('.ham')).
      forEach(FixScrollToggle);
  });