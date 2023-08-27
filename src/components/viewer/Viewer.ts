import { getTinymceContentStyles } from '@/services/dependencies/styles/content';
import ZoomComponent from '@/components/zoom/ZoomComponent.svelte';
import{ store } from '@/core/store'
 
import { Pages } from "@/components/pages/Pages";

class ViewerClass {

  doc: Document;
  zoomComponent: ZoomComponent;
  body: HTMLElement;
  currentZoom: number = 0;

  create(target: HTMLElement, html: string) {
    this.createIframe(target);
    this.body.innerHTML = this.cleanContent(html);
    this.buildPages()
    setTimeout(() => this.buildPages(), 200);
    this.createZoomElement(target);
    return {
      setContent: (content: string) => {
        this.body.innerHTML = this.cleanContent(content);
        Pages.inited = false;
        Pages.resetToBeforeInitalState();
        this.buildPages();
        setTimeout(() => this.buildPages(), 200);
        Pages.applyZoom(this.currentZoom)
      }
    }
  }

  cleanContent(html: string): string {
    const info = html.match(
      /(?<=\<papertinymceinfo>)([^;]*)(?=\<\/papertinymceinfo>)/g
    );
    if (info && info[0]) {
      const paperInfo = JSON.parse(info[0]);
      if (paperInfo?.pgMar) {
        // store.updateGlobalMargins(paperInfo?.pgMar);
        store.currentMargins = paperInfo?.pgMar
      }
    }

    const newContent = html.replace(
      /<papertinymceinfo>([^;]*)<\/papertinymceinfo>/g,
      ""
    );
    return newContent.replace(/(\r\n|\n|\r)/gm, "")
  }

  createIframe(target: HTMLElement): HTMLIFrameElement {
    const iframe = document.createElement("iframe");
    target.appendChild(iframe);
    iframe.style.height = "100%";
    iframe.style.width = "100%";
    this.doc = iframe.contentDocument;
    this.body = this.doc.body;
    this.body.classList.add('mce-content-body')
    const styles = getTinymceContentStyles();
    const styleTag = this.doc.createElement('style');
    styleTag.textContent = styles
    this.doc.getElementsByTagName("head")[0].appendChild(styleTag);
    Pages.win = iframe.contentWindow
    return iframe
  }

  createShadowDom(target: HTMLElement): ShadowRoot {
    let shadow = target.attachShadow({ mode: "open" });
    let body = document.createElement('div');
    body.classList.add('mce-content-body');
    body.style.height = "100%";
    body.style.width = "100%";
    this.body = body;
    this.doc = document;
    const styles = getTinymceContentStyles();
    const styleTag = this.doc.createElement('style');
    styleTag.textContent = styles;
    shadow.appendChild(styleTag);
    shadow.appendChild(body);
    return shadow
  }

  createZoomElement(target: HTMLElement) {

    const divEl = document.createElement('div')
    this.zoomComponent = new ZoomComponent({ target, props: { } })

    this.zoomComponent.$on('zoom', ({ detail: { zoom } }) => {
      Pages.applyZoom(zoom)
      this.currentZoom = zoom;
    })
}

  buildPages() {
    const nodes = Pages.getAllNodesInEditor(this.body as HTMLBodyElement, this.doc);
    Pages.distributeNodesOnPages(nodes);
    Pages.orderPages();
    Pages.hideEmptyPages();
    Pages.inited = true
  }
}

export const Viewer = new ViewerClass();
