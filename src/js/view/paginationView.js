import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentEL = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    const markupButtonPrev = ` 
    <button data-goto = ${
      this._data.page - 1
    } class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${this._data.page - 1}</span>
    </button>
     `;
    const markupButtonNext = `
    <button data-goto = ${
      this._data.page + 1
    } class="btn--inline pagination__btn--next">
        <span>Page ${this._data.page + 1}</span>
        <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>`;

    if (this._data.page === 1 && numPages > 1) {
      return markupButtonNext;
    }

    if (this._data.page === numPages && numPages > 1) {
      return markupButtonPrev;
    }

    if (this._data.page < numPages && this._data.page > 1) {
      return markupButtonPrev + markupButtonNext;
    }

    return '';
  }
  addHandlerPagination(handler) {
    this._parentEL.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
}

export default new PaginationView();
