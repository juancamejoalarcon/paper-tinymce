// import * as defaultContent from "@/assets/tinymce/skins/content/default/content.css?inline";
// import * as oxideContent from "@/assets/tinymce/skins/ui/oxide/content.css?inline";
import * as oxideSkinMin from "@/assets/tinymce/skins/ui/oxide/skin.min.css?inline";
import * as oxideSkin from "@/assets/tinymce/skins/ui/oxide/skin.css?inline";
import * as oxideSkinShadow from "@/assets/tinymce/skins/ui/oxide/skin.shadowdom.css?inline";

export const getTinymceTemplateStyles = (): string => {
    return oxideSkinMin.default + oxideSkin.default + oxideSkinShadow.default;
}