import * as css2 from "@/assets/tinymce/skins/content/default/content.css?inline";
import * as css3 from "@/assets/tinymce/skins/ui/oxide/content.css?inline";
import * as css4 from "@/assets/tinymce/skins/ui/oxide/skin.min.css?inline";
import * as css5 from "@/assets/tinymce/skins/ui/oxide/content.css?inline";
import * as css6 from "@/assets/tinymce/skins/ui/oxide/content.inline.css?inline";
import * as css7 from "@/assets/tinymce/skins/ui/oxide/skin.css?inline";
import * as css8 from "@/assets/tinymce/skins/ui/oxide/skin.shadowdom.css?inline";

export const getTinymceTemplateStyles = (): string => {
    return css2.default + css3.default + css4.default + css5.default + css6.default + css7.default + css8.default;
}