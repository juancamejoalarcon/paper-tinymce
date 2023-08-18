import type { Editor } from 'tinymce';

import { setPagesInEditor, pagesCounter } from '../../components/pages/Pages';

export interface PagesApi {
  readonly setPages: (editor: Editor) => void;
  readonly getPagesCount: (editor: Editor) => number;
}

const get = (): PagesApi => ({
  setPages: (editor: Editor) => setPagesInEditor(editor),
  getPagesCount: () => pagesCounter()
});

export {
  get
};
