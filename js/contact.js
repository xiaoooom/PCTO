const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // previene l'invio automatico del modulo

  // Ottieni tutti gli input obbligatori
  const requiredInputs = document.querySelectorAll('input[required], textarea[required]');

  let valid = true;

  // Verifica che tutti gli input obbligatori siano compilati
  requiredInputs.forEach((input) => {
    if (!input.value) {
      input.classList.add('is-invalid');
      valid = false;
    } else {
      input.classList.remove('is-invalid');
    }
  });

  if (valid) {
    // Invia il modulo se tutti i campi obbligatori sono compilati
    form.submit();
  }
});
