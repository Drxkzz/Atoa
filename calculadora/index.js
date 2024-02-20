let expression = '';

function addToDisplay(value) {
    expression += value
    document.getElementById('display').value = expression
}
function clearDisplay() {
    expression = '';
    document.getElementById('display').value = ""
}
function calculate() {
    try {
        const result = eval(expression)
        document.getElementById('display').value = result
        expression = ''
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}