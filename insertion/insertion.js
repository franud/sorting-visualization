let v = [];

let i = 1;

function setup (){
    createCanvas (windowWidth, windowHeight);
    v = new Array (width);
    for (let i = 0; i < v.length; ++i) {
      v [i] = random(height);
    }
}

function draw() {
  background (0);
  if (i < v.length) {
    let j = i;
    while (j > 0 && v[j-1] > v[j]) {
      let aux = v[j];
      v[j] = v[j-1];
      v[j-1] = aux;
      j = j - 1;
    }
  }else {
    console.log("END");
    noLoop();
  }
  i++;
  // Drawing lines
  for (let k = 0; k < v.length; ++k) {
    stroke (0, 0, 255);
    line (k, height, k, v[k]);
  }

}
