import * as css from "@/paper_styles.scss?inline";
import * as oxideContent from "@/assets/tinymce/skins/ui/oxide/content.css?inline";
import * as defaultContent from "@/assets/tinymce/skins/content/default/content.css?inline";
import * as oxideContentInline from "@/assets/tinymce/skins/ui/oxide/content.inline.css?inline";

export const getTinymceContentStyles = (): string => {
    return css.default + oxideContent.default + defaultContent.default + oxideContentInline.default;
}