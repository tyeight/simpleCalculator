function emptyValue(
  value,
  equal = false,
  clear = false,
  back = false,
  toggleSign = false
) {
  // Captura o elemento do display e atualiza com o novo valor
  const displayElement = document.getElementById('displayValue');
  let displayValue = displayElement.textContent;
  if (clear) {
    displayElement.textContent = '';
    return;
  }
  if (back) {
    // Remove o último caractere de displayValue
    displayElement.textContent = displayValue.slice(0, -1);
    return;
  }
  // Adiciona o valor ao display
  displayElement.textContent += value;
  if (equal) {
    try {
      // Avalia a expressão de forma segura
      let result = eval(displayElement.textContent);
      result = parseFloat(result).toFixed(2);
      displayElement.textContent = result;
    } catch (error) {
      console.error('Erro ao avaliar a expressão:', error);
      displayElement.textContent = 'Erro';
    }
  }
  if (toggleSign) {
    result = eval(displayElement.textContent);
    displayElement.textContent = -result;
  }
}
