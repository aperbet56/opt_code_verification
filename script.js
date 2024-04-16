// Récupération des différents éléments
const optInputs = document.querySelectorAll("input");
const submitBtn = document.querySelector(".verify__btn");

// Focus sur le premier input dès le chargement de la page
window.onload = () => optInputs[0].focus();

optInputs.forEach((input) => {
  // Ecoute de l'événement "input" sur le champs de formulaire
  input.addEventListener("input", () => {
    const currentInput = input;
    const nextInput = currentInput.nextElementSibling; // La propriété Element.nextElementSibling renvoie l'élément qui suit immédiatement celui spécifié dans la liste des enfants de son parent, ou null si l'élément spécifié est le dernier de la liste.

    if (
      nextInput !== null &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (!optInputs[5].disabled && optInputs[5].value !== "") {
      submitBtn.classList.add("active");
    } else {
      submitBtn.classList.remove("active");
    }
  });

  // Ecoute de l'événement "keyup" sur le champs de formulaire
  input.addEventListener("keyup", (e) => {
    console.log(e);
    if (e.key == "Backspace") {
      if (input.previousElementSibling != null) {
        e.target.value = "";
        e.target.setAttribute("disabled", true);
        input.previousElementSibling.focus(); // La propriété Element.previousElementSibling renvoie l'élément immédiatement avant celui spécifié dans la liste des enfants de son parent, ou null si l'élément spécifié est le premier de la liste.
      }
    }
  });
});
