'use strict';
const drawerBtn = document.getElementById('drawerBtn');

drawerBtn.addEventListener('click', function() {
  document.body.classList.toggle('open');
});