let colorInput = document.querySelector("#colorpicker");
let hexInput = document.querySelector("#hex");
colorInput.addEventListener("input", () => {
  let color = colorInput.value;
  hexInput.value = color;
 
  
});


function changecolor(){
  let color = document.getElementById('colorpicker').value;
  document.body.style.backgroundColor = color;
  
}
