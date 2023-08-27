import { Viewer } from "@/components/viewer/Viewer";

const exportToModuleLoaders = (PaperTinymceViewer) => {
  if (typeof module === "object") {
    try {
      module.exports = PaperTinymceViewer;
    } catch (_) {}
  }
};
const exportToWindowGlobal = (PaperTinymceViewer) => ((window as any).PaperTinymceViewer = PaperTinymceViewer);

exportToWindowGlobal(Viewer);
exportToModuleLoaders(Viewer);
