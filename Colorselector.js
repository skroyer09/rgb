const colorPicker = document.getElementById("color-picker");
const selectedColor = document.querySelector(".selected-color");
const hexcode = document.getElementById("hexcode");
const rgb = document.getElementById("rgb");

colorPicker.addEventListener("input", function () {
  const color = this.value;
  selectedColor.style.backgroundColor = color;
  hexcode.textContent = color;
  rgb.textContent = `RGB(${hexToRgb(color).join(", ")})`;
});

function hexToRgb(hex) {
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  return [r, g, b];
}
