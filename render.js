/* ============================================================
   FEENCHEN – Render-Logik
   ------------------------------------------------------------
   Liest window.FEENCHEN_CONTENT (siehe content.js) und füllt
   die passenden Container auf der Seite automatisch.

   Erwartete Container (per data-Attribut markiert):
   - [data-feenchen="kostenlos-liste"]      -> volle Liste
   - [data-feenchen="kostenlos-vorschau"]   -> nur Startseiten-Vorschau
   - [data-feenchen="schatz-grid"]          -> volle Kacheln
   - [data-feenchen="schatz-vorschau"]      -> Startseiten-Vorschau
   - [data-feenchen="analysen-grid"]        -> Analysen, volle Karten
   - [data-feenchen="analysen-vorschau"]    -> Startseiten-Vorschau
   - [data-feenchen="empfehlungen-grid"]    -> Empfehlungen, volle Karten
   ============================================================ */

(function () {
  var DATA = window.FEENCHEN_CONTENT || {};
  var SETTINGS = DATA.einstellungen || {};
  var PAYMENT_NOTE = SETTINGS.zahlungshinweis || "Zahlung: PayPal, Überweisung oder Digistore24";

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderLinkAttributes(link) {
    var href = link || "#";
    var attrs = 'href="' + escapeHtml(href) + '"';

    if (/^https?:\/\//i.test(href)) {
      attrs += ' target="_blank" rel="noopener"';
    }

    return attrs;
  }

  /* ---- Kostenlose Liste ---- */
  function renderFreebieList(container, items) {
    var html = items.map(function (item) {
      return (
        '<li>' +
          '<span>' +
            '<span class="title">' + escapeHtml(item.titel) + '</span>' +
            '<span class="meta">' + escapeHtml(item.info) + '</span>' +
          '</span>' +
          '<a class="btn btn-outline" ' + renderLinkAttributes(item.link) + '>Herunterladen</a>' +
        '</li>'
      );
    }).join("");
    container.innerHTML = html;
  }

  /* ---- Schatz-Kacheln ---- */
  function renderShopGrid(container, items) {
    var html = items.map(function (item) {
      return (
        '<div class="shop-card">' +
          '<div class="cover">' + escapeHtml(item.icon) + '</div>' +
          '<h3>' + escapeHtml(item.titel) + '</h3>' +
          '<p style="font-size: 0.9rem;">' + escapeHtml(item.beschreibung) + '</p>' +
          '<span class="price">' + escapeHtml(item.preis) + '</span>' +
          '<p class="payment-methods">' + escapeHtml(PAYMENT_NOTE) + '</p>' +
          '<a class="btn btn-primary" ' + renderLinkAttributes(item.link) + '>In den Korb</a>' +
        '</div>'
      );
    }).join("");
    container.innerHTML = html;
  }

  /* ---- Analysen-Karten ---- */
  function renderAnalysenGrid(container, items) {
    var html = items.map(function (item) {
      return (
        '<div class="shop-card analyse-card">' +
          '<div class="cover">' + escapeHtml(item.icon) + '</div>' +
          '<h3>' + escapeHtml(item.titel) + '</h3>' +
          '<p style="font-size: 0.9rem;">' + escapeHtml(item.beschreibung) + '</p>' +
          '<span class="price">' + escapeHtml(item.preis) + '</span>' +
          '<p class="payment-methods">' + escapeHtml(PAYMENT_NOTE) + '</p>' +
          '<a class="btn btn-primary" ' + renderLinkAttributes(item.link) + '>Anfragen</a>' +
        '</div>'
      );
    }).join("");
    container.innerHTML = html;
  }

  /* ---- Empfehlungen ---- */
  function renderEmpfehlungenGrid(container, items) {
    var html = items.map(function (item) {
      return (
        '<div class="shop-card recommend-card">' +
          '<div class="cover">' + escapeHtml(item.icon) + '</div>' +
          '<span class="badge">' + escapeHtml(item.typ) + '</span>' +
          '<h3>' + escapeHtml(item.titel) + '</h3>' +
          '<p style="font-size: 0.9rem;">' + escapeHtml(item.beschreibung) + '</p>' +
          '<a class="btn btn-outline" ' + renderLinkAttributes(item.link) + '>Ansehen</a>' +
        '</div>'
      );
    }).join("");
    container.innerHTML = html;
  }

  function takeFor(list, key, limit) {
    var filtered = (list || []).filter(function (item) {
      return item[key];
    });
    if (typeof limit === "number") {
      return filtered.slice(0, limit);
    }
    return filtered;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var el;

    el = document.querySelector('[data-feenchen="kostenlos-liste"]');
    if (el) renderFreebieList(el, DATA.kostenlos || []);

    el = document.querySelector('[data-feenchen="kostenlos-vorschau"]');
    if (el) renderFreebieList(el, takeFor(DATA.kostenlos, "zeigeAufStartseite", 3));

    el = document.querySelector('[data-feenchen="schatz-grid"]');
    if (el) renderShopGrid(el, DATA.schatz || []);

    el = document.querySelector('[data-feenchen="schatz-vorschau"]');
    if (el) renderShopGrid(el, takeFor(DATA.schatz, "zeigeAufStartseite", 4));

    el = document.querySelector('[data-feenchen="analysen-grid"]');
    if (el) renderAnalysenGrid(el, DATA.analysen || []);

    el = document.querySelector('[data-feenchen="analysen-vorschau"]');
    if (el) renderAnalysenGrid(el, takeFor(DATA.analysen, "zeigeAufStartseite", 2));

    el = document.querySelector('[data-feenchen="empfehlungen-grid"]');
    if (el) renderEmpfehlungenGrid(el, DATA.empfehlungen || []);
  });
})();
