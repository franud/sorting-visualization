let v = [];

let j = 0;

function setup (){
    createCanvas (windowWidth, windowHeight);
    v = new Array (width);
    for (let i = 0; i < v.length; ++i) {
      v [i] = random(height);
    }
}

function draw() {
  background (0);
      if (j < v.length - 1) {
          let min = j
          for (let i = j + 1; i < v.length; ++i) {
            if (v[i] < v[min]){
              min = i;
            }
          }
          if (min != j) {
            let temp = v[j];
            v[j] = v[min];
            v[min] = temp;
          }
      }
      else {
        console.log ("End");
        noLoop();
      }
      j++;
      // Drawing lines
      for (let k = 0; k < v.length; ++k) {
        stroke (0, 0, 255);
        line (k, height, k, v[k]);
      }

}


/*function swap(v, a, b) {
  let temp = v[a];
  v[a] = v[b];
  v[b] = temp;
}



/*
for (let j = 0; j < v.length - 1; ++j) {
  let iMin = j;
  for (let i = j; j < v.length; ++i) {
    if (v[i] < v[iMin]) {
      iMin = i;
    }
  }

  if (iMin != j) {
    swap (v[j], v[iMin])
  }
}
*/
