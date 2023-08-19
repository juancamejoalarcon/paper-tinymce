import JSZip from "jszip";
import { load, type CheerioAPI } from "cheerio";
import { twipsToPixels } from '../utils/twips'
import { 
    A4Dimensions,
    DefaultMargins,
    rulerWidthNumberOfPoints,
    rulerHeightNumberOfPoints,
} from "../../plugin/core/shared/utils";

const widthPoint = A4Dimensions.widthInPixes / rulerWidthNumberOfPoints;

const getMargins = ($: CheerioAPI) => {
    const margins = { ...DefaultMargins }

    $('w\\:pgMar').each((i, el) => {
        Object.keys(margins).forEach((key: string) => {
            const attribute = el.attribs['w:' + key]
            if (attribute) {
                const conversedNumber = twipsToPixels(parseFloat(attribute)) / widthPoint
                margins[key] = conversedNumber;
            }
        })
    })
    return margins
}


const parseXML = (xml: string) => {
    const $ = load(xml, {
        xmlMode: true
    })
    return $
}

export const getGlobalSettings = (fileArrayBuffer: ArrayBuffer) => {
    return new Promise((resolve, reject) => {
        const globalSettings = {
            margins: DefaultMargins
        }

        JSZip.loadAsync(fileArrayBuffer)
        .then((zipFile: JSZip) => {
            return zipFile.files["word/document.xml"].async('text');
        })
        .then((xml: string) => {
            const $ = parseXML(xml)
            // Dont remove this, can be used in the future to get dimensions
            // $('w\\:pgSz').each((i, el) => console.log(el))
            globalSettings.margins = getMargins($)
            resolve(globalSettings)
        })
    })
}