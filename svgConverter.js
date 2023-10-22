/* 
* Usage: copy any valid SVG into the SVG variable and run in a browser console. 
* Output can be used in CSS when you otherwise couldn't include an SVG file.
*/

const SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M10.3,130.6c0,0,193.9-24.3,475.2-11.2" style="fill: none;stroke-dasharray: 1500;stroke-linecap: round;stroke-linejoin: round;stroke-width: 6;stroke: #0070e0;"></path><path d="M38.9,148.9c0,0,173.8-35.3,423.3-11.8" style="fill: none;stroke-dasharray: 1500;stroke-linecap: round;stroke-linejoin: round;stroke-width: 6;stroke: #0070e0;"></path></svg>';
const SVG64 = window.btoa(SVG);
console.log("url('data:image/svg+xml;base64," + SVG64 + "')")