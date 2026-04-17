(function () {
  var wrap = document.querySelector('.site-footer-carbon');
  if (!wrap) return;

  var host = window.location.hostname;
  var isLocal = !host || host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local');

  if (isLocal) {
    wrap.innerHTML = '<p class="site-footer-carbon-fallback">Empreinte carbone calculée automatiquement une fois la page en ligne.</p>';
    return;
  }

  wrap.innerHTML = '<p class="site-footer-carbon-live">Calcul de l\u2019empreinte carbone en cours\u2026</p>';

  var pageUrl = window.location.href;
  var cacheKey = 'carbon:' + pageUrl;

  function render(data) {
    var grams = data && data.statistics && data.statistics.co2 && data.statistics.co2.grid
      ? data.statistics.co2.grid.grams
      : null;
    var cleaner = data && typeof data.cleanerThan === 'number' ? Math.round(data.cleanerThan * 100) : null;
    var green = data && data.green === true;

    if (grams === null || isNaN(grams)) {
      wrap.innerHTML = '<p class="site-footer-carbon-fallback">Mesure d\u2019empreinte carbone momentan\u00e9ment indisponible.</p>';
      return;
    }

    var parts = ['<strong>' + grams.toFixed(2) + '\u202Fg CO\u2082</strong> \u00e9mis par visite de cette page'];
    if (cleaner !== null) parts.push('plus propre que <strong>' + cleaner + '\u202F%</strong> des pages test\u00e9es');
    if (green) parts.push('h\u00e9berg\u00e9e sur \u00e9nergie renouvelable');

    wrap.innerHTML = '<p class="site-footer-carbon-live">\ud83c\udf31 ' + parts.join(', ') + '.' +
      '<span class="carbon-source">Mesure via Website Carbon</span></p>';
  }

  try {
    var raw = sessionStorage.getItem(cacheKey);
    if (raw) {
      render(JSON.parse(raw));
      return;
    }
  } catch (e) {}

  fetch('https://api.websitecarbon.com/site?url=' + encodeURIComponent(pageUrl))
    .then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    })
    .then(function (data) {
      try { sessionStorage.setItem(cacheKey, JSON.stringify(data)); } catch (e) {}
      render(data);
    })
    .catch(function () {
      wrap.innerHTML = '<p class="site-footer-carbon-fallback">Mesure d\u2019empreinte carbone momentan\u00e9ment indisponible.</p>';
    });
})();
