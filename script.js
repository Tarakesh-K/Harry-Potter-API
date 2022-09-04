//Some characters were not given house names or images. The API dosent have the data

let characters = "http://hp-api.herokuapp.com/api/characters";
let allChar = "http://hp-api.herokuapp.com/api/characters/students";
let staff = "http://hp-api.herokuapp.com/api/characters/staff";
let charHouse = "http://hp-api.herokuapp.com/api/characters/house/:house";
let res = fetch(characters);

let row3 = document.querySelector(".row-3");
// let input = document.querySelector("input");
let r3 = "";
let r4 = "";

const getData = async () => {
    let data = await res;
    let data1 = await data.json();
    console.log(data1);
    for (let i = 0; i < data1.length; i++) {
        r3 +=
    `
    <div class="col-md-12 col-sm-12 col-lg-6">
      <div class="row row-3-sub">
        <div class="col-9">
          <h4>${data1[i].name}</h4>
          <p>House: ${data1[i].house}</p>
        </div>
        <div class="col-3">
          <img src=${data1[i].image} alt="">
        </div>
      </div>
    </div>
    `;
    }
    row3.innerHTML = r3;
    r4 = "";
    row3.innerHTML = r3;
};

// console.log(input.value);
getData();

