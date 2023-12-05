const gridContainer = document.querySelector("#gridContainer");
gridContainer.style.cssText = "width: 960px; height: 960px";
document.getElementById("gridContainer");
let gridContainerWidth = gridContainer.offsetWidth - 5;

let newGridBox = "";

document.getElementById("newGrid").onclick = function () {
  let newGridBox = prompt(
    "Insert the number of boxes for the new grid (default = 16, max = 100)",
    "16"
  );
  for (i = 0; i < newGridBox; i++) {
    for (j = 0; j < newGridBox; j++) {
      let gridBoxWidth = gridContainerWidth / newGridBox - 4.8;
      console.log(gridBoxWidth);
      const gridBox = document.createElement("div");
      gridBox.setAttribute("id", "gridBox");
      gridBox.style.width = gridBoxWidth + "px";
      gridBox.style.height = gridBoxWidth + "px";
      gridContainer.appendChild(gridBox);

      gridBox.addEventListener("mouseover", () => {
        gridBox.style.cssText = "background: blue";
      });
    }
  }
};
