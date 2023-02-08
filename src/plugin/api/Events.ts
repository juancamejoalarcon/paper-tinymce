import type { Editor } from 'tinymce';

import type { PagesApi } from './Api';

import type { Margins } from '../core/shared/utils';

const firePagesUpdate = (editor: Editor, api: PagesApi): void => {
  api.setPages(editor);
  editor.dispatch('pagesUpdate', {
    pages: {
      pagesCount: api.getPagesCount(editor),
    }
  });
};

const fireCurrentPageUpdate = (editor: Editor, currentPage: number): void => {
  editor.dispatch('currentPageUpdate', { currentPage })
};

const fireMarginRulerUpdate = (editor: Editor, margins: Margins): void => {
  editor.dispatch('marginRulerUpdate', { margins })
}

const fireZoomUpdate = (editor: Editor, zoom: number): void => {
  editor.dispatch('zoomUpdate', { zoom })
}

export {
  firePagesUpdate,
  fireMarginRulerUpdate,
  fireCurrentPageUpdate,
  fireZoomUpdate
};
