function calcular() {
  // Pega os valores dos campos
  const qtdFardos = parseFloat(document.getElementById("fardos").value);
  const unidadesPorFardo = parseFloat(
    document.getElementById("unidades").value
  );
  const valorTotal = parseFloat(document.getElementById("valor").value);

  // Valida os campos
  if (
    isNaN(qtdFardos) ||
    isNaN(unidadesPorFardo) ||
    isNaN(valorTotal) ||
    qtdFardos <= 0 ||
    unidadesPorFardo <= 0 ||
    valorTotal <= 0
  ) {
    document.getElementById("resultado").innerText =
      "Por favor, insira valores válidos.";
    return;
  }

  // Calcula o preço unitário
  const totalUnidades = qtdFardos * unidadesPorFardo;
  const precoUnitario = valorTotal / totalUnidades;

  // Exibe o resultado
  document.getElementById(
    "resultado"
  ).innerHTML = `O preço unitário é: <span>R$${precoUnitario.toFixed(
    6
  )}</span>`;
}
