// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Live GitHub star count
(function () {
  var el = document.getElementById('gh-stars');
  if (!el) return;
  fetch('https://api.github.com/repos/Rhizomatica/mercury')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (typeof data.stargazers_count === 'number') {
        // Preserve trailing label text after the number (e.g. " GitHub Stars")
        var label = el.textContent.replace(/^[\d,+\s]+/, '');
        el.textContent = data.stargazers_count.toLocaleString() + ' ' + label.trim();
      }
    })
    .catch(function () { /* keep fallback text */ });
}());

// Mobile menu
function toggleMenu() {
  var drawer = document.getElementById('mobile-drawer');
  var overlay = document.getElementById('mobile-overlay');
  var open = drawer.classList.contains('open');
  if (open) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  } else {
    drawer.classList.add('open');
    overlay.classList.add('open');
  }
}

// Testimonial switcher
function showTestimonial(idx) {
  var panels = document.querySelectorAll('.testimonial-panel');
  panels.forEach(function (p) { p.classList.remove('active'); });
  document.getElementById('testimonial-' + idx).classList.add('active');

  // Update dots and names
  for (var i = 0; i <= 2; i++) {
    var dot = document.getElementById('dot-' + i);
    var name = document.getElementById('name-' + i);
    if (i === idx) {
      dot.style.width = '2rem';
      dot.style.height = '0.625rem';
      dot.style.backgroundColor = '#ED4E0F';
      dot.style.opacity = '1';
      name.style.color = '#ED4E0F';
    }
    else {
      dot.style.width = '0.625rem';
      dot.style.height = '0.625rem';
      dot.style.backgroundColor = '#8892B0';
      dot.style.opacity = '0.3';
      name.style.color = '#8892B0';
    }
  }
}

// Get Started platform tabs
var tabs = ['linux', 'debian', 'windows', 'source'];
function switchTab(id) {
  tabs.forEach(function (t) {
    document.getElementById('panel-' + t).classList.remove('active');
    var btn = document.getElementById('tab-' + t);
    btn.classList.remove('bg-primary', 'text-black');
    btn.classList.add('border', 'border-[rgba(237,78,15,0.2)]', 'text-slate-muted');
  });
  document.getElementById('panel-' + id).classList.add('active');
  var activeBtn = document.getElementById('tab-' + id);
  activeBtn.classList.add('bg-primary', 'text-black');
  activeBtn.classList.remove('border', 'border-[rgba(237,78,15,0.2)]', 'text-slate-muted');
}
