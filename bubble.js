const input = document.getElementById("input-value");
const inputVisualizer = document.getElementById("input-visualizer");
const outputVisualizer = document.getElementById("output-visualizer");
let arr = [];
 
function handleAdd() {
  const value = input.value;
  const node = document.createElement("div");
  const textnode = document.createTextNode(value);
  node.appendChild(textnode);
  inputVisualizer.appendChild(node);
  arr.push(Number(value));
}
 
function handleReset() {
  inputVisualizer.innerHTML = "";
  outputVisualizer.innerHTML = "";
  arr = [];
}
 
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
 
async function handleSort() {
  outputVisualizer.innerHTML = "";
  var i;
  for (i = 0; i < arr.length - 1; i++) {
    var k = -1;
    while (k < arr.length - i - 1) {
      k++;
      await sleep(1000);
      const div = document.createElement("div");
      for (let j = 0; j < arr.length; j++) {
        const node = document.createElement("span");
        const textnode = document.createTextNode(arr[j]);
        node.appendChild(textnode);
        if (j == k || j == k + 1) node.style.backgroundColor = "#e6852c";
        div.appendChild(node);
      }
      outputVisualizer.appendChild(div);
      await sleep(1000);
      var newdiv = document.createElement("div");
      for (let j = 0; j < arr.length; j++) {
        const node = document.createElement("span");
        const textnode = document.createTextNode(arr[j]);
        node.appendChild(textnode);
        if (arr[k] >= arr[k + 1]) {
          let temp = arr[k];
          arr[k] = arr[k + 1];
          arr[k + 1] = temp;
        }
        if (k == arr.length - i - 1 && j >= k)
          node.style.backgroundColor = "#40c896";
        newdiv.appendChild(node);
      }
      outputVisualizer.replaceChild(newdiv, div);
    }
  }
}
 
 
