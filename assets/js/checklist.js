/* ==========================================================================
   Agoriade — Checklists interactives
   --------------------------------------------------------------------------
   Active les cases à cocher, stocke l'état dans localStorage (scopé par page
   ou par ID de checklist), affiche une barre de progression.

   Utilisation dans le HTML :
   <div class="checklist-wrapper" data-checklist-id="rgpd-dj1">
     <div class="checklist-progress">…</div>
     <ul class="checklist">
       <li class="checklist-item">
         <input type="checkbox" id="c1">
         <label for="c1">Tâche à cocher</label>
       </li>
     </ul>
     <button type="button" class="checklist-reset">Réinitialiser</button>
   </div>
   ========================================================================== */

(function () {
  'use strict';

  const STORAGE_PREFIX = 'agoriade_checklist_';

  function init() {
    const wrappers = document.querySelectorAll('.checklist-wrapper[data-checklist-id]');
    wrappers.forEach(setupChecklist);
  }

  function setupChecklist(wrapper) {
    const id = wrapper.dataset.checklistId;
    const storageKey = STORAGE_PREFIX + id;
    const checkboxes = wrapper.querySelectorAll('.checklist input[type="checkbox"]');
    const progressFill = wrapper.querySelector('.checklist-progress-fill');
    const progressText = wrapper.querySelector('.checklist-progress-text');
    const resetBtn = wrapper.querySelector('.checklist-reset');

    if (!checkboxes.length) return;

    // Charger l'état
    const saved = loadState(storageKey);
    checkboxes.forEach((cb, index) => {
      if (saved[cb.id || `item-${index}`]) {
        cb.checked = true;
      }
    });

    // Listener sur chaque case
    checkboxes.forEach((cb, index) => {
      cb.addEventListener('change', () => {
        const state = loadState(storageKey);
        const key = cb.id || `item-${index}`;
        if (cb.checked) {
          state[key] = true;
        } else {
          delete state[key];
        }
        saveState(storageKey, state);
        updateProgress();
      });
    });

    // Bouton reset
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (!confirm('Réinitialiser cette checklist ? Les cases cochées seront perdues.')) return;
        checkboxes.forEach(cb => { cb.checked = false; });
        localStorage.removeItem(storageKey);
        updateProgress();
      });
    }

    // Mise à jour initiale de la barre
    updateProgress();

    function updateProgress() {
      const total = checkboxes.length;
      const done = Array.from(checkboxes).filter(cb => cb.checked).length;
      const pct = total === 0 ? 0 : Math.round((done / total) * 100);
      if (progressFill) {
        progressFill.style.width = pct + '%';
        progressFill.setAttribute('aria-valuenow', String(pct));
      }
      if (progressText) {
        progressText.textContent = `${done} sur ${total} ${done === 1 ? 'validé' : 'validés'} (${pct}%)`;
      }
    }
  }

  function loadState(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function saveState(key, state) {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.warn('Impossible de sauvegarder la checklist', e);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
