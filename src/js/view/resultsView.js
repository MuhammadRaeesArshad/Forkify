import View from './View.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
class ResultView extends View {
  _parentEL = document.querySelector('.results');
  _errorMessage = 'Sorry no recipe found for you querry! Please try again';
  _message = '';

  _generateMarkup() {
    return this._data.map(res => previewView.render(res, false)).join();
  }
}

export default new ResultView();
