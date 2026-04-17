(function () {
  function serialize(wrapper) {
    var rows = [['Statut', 'Section', 'Critère']];
    var currentSection = '';
    var nodes = wrapper.querySelectorAll('h3, .checklist-item');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.tagName === 'H3') {
        currentSection = el.textContent.replace(/\s+/g, ' ').trim();
        continue;
      }
      var checkbox = el.querySelector('input[type="checkbox"]');
      var label = el.querySelector('label');
      var checked = checkbox && checkbox.checked ? 'Validé' : 'À faire';
      var text = label ? label.textContent.replace(/\s+/g, ' ').trim() : '';
      rows.push([checked, currentSection, text]);
    }
    return rows;
  }

  function toCsv(rows) {
    var lines = rows.map(function (r) {
      return r.map(function (c) {
        return '"' + String(c).replace(/"/g, '""') + '"';
      }).join(';');
    });
    return '\uFEFF' + lines.join('\r\n');
  }

  function download(csv, filename) {
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.checklist-export-csv');
    if (!btn) return;
    e.preventDefault();
    var wrapper = btn.closest('.checklist-wrapper');
    if (!wrapper) return;
    var filename = btn.getAttribute('data-filename') || 'checklist.csv';
    download(toCsv(serialize(wrapper)), filename);
  });
})();
