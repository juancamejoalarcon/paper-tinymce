import * as oxideSkinMin from "@/assets/tinymce/skins/ui/oxide/skin.min.css?inline";
import * as oxideSkin from "@/assets/tinymce/skins/ui/oxide/skin.css?inline";
import * as oxideSkinShadow from "@/assets/tinymce/skins/ui/oxide/skin.shadowdom.css?inline";

export const getTinymceSkinStyles = (): string => {
    return oxideSkinMin.default + oxideSkin.default + oxideSkinShadow.default;
}