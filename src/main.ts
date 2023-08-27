// import { PaperTinymce } from './PaperTinymce'
// import * as demo from "@/assets/demo.html?raw";

// const editor = PaperTinymce('#app', {
//     highlight: true, 
//     lang : "en"
// }) as any

// const searchParams = new URLSearchParams(location.search);

// const demoName = searchParams.get("demo")

// if (demoName) {
//     setTimeout(() => editor.paperTinymce.setPaperContent(demo.default), 300);
// }

// window.paperEditor = editor

import { Viewer } from "@/components/viewer/Viewer";

const HTML = `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni vel quod nemo voluptate assumenda ut aperiam qui. Ipsam iure at assumenda incidunt nulla explicabo voluptatibus officiis accusantium! Deleniti, exercitationem.</p>`

const viewer = Viewer.create(document.querySelector("#app"), HTML);

window.viewer = viewer