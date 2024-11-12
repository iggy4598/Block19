const freelancers = [
  { name: "Alice", occupation: "writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
  { name: "Carol", occupation: "Programmer", price: 70 },
];

const body = document.querySelector("body");

const init = () => {
  const section = document.createElement("section");
  //   document.getElementById("section")
  //   section.style.columns = "100px 3";
  // what the style is going to be
  section.style.display = "flex";
  section.style.flexWrap = "wrap";
  section.style.justifyContent = "space-around";
  //space it out so it makes more sense.
  // Meat and potatoes. what gets printed
  for (let i = 0; i < freelancers.length; i++) {
    const element = freelancers[i];
    const div = document.createElement("div");
    div.style.display = "grid";
    const h3 = document.createElement("h3");
    h3.innerText = element.name;
    const occupation = document.createElement("p");
    occupation.innerText = element.occupation;
    const price = document.createElement("p");
    price.innerText = `$${element.price}`;
    //how it gets printed
    div.append(h3);
    div.append(occupation);
    div.append(price);
    section.append(div);
  }
  body.append(section);
};

init();
