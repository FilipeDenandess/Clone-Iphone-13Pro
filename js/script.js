const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);

    buttons.forEach((btn) => {
      //loop de botoes, acessando um por um
      btn.querySelector(".color").classList.remove("selected");
    });

    const button = e.target;

    const id = button.getAttribute("id");

    button.querySelector(".color").classList.add("selected"); //adiciona selected a classe color

    image.classList.add("changing");
    image.setAttribute("src", `img/iphone_${id}.jpg`);

    setTimeout(() => {
      image.classList.toggle("changing"); //toogle tira a classe acessada em classList
    }, 200);
  });
});
