let values = []; //Declaramos array

let i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); //Medida del canvas
  values = new Array(width); //
  for (let i = 0; i < values.length; i++) {
    values[i] = random (height);
    //values[i] = noise(i)*height;
  }
}

function draw() {
  background(0);
  if (i < values.length) {
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1);
      }
    }
  } else {
    console.log("finished");
    noLoop();
  }
  i++;

  for (let k = 0; k < values.length; k++) {
    stroke(255, 0, 0);
    line(k, height, k, values[k]);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
