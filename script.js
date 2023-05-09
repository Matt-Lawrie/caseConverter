function kebabToCamel(kebabCase) {
    return kebabCase.replace(/-([a-z])/g, function (match, letter) {
      return letter.toUpperCase();
    });
  }
  
  function camelToKebab(camelCase) {
    return camelCase.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
  
  function convertToCamelCase() {
    const input = document.getElementById('input').value;
    const kebabValues = input.split(',');
    const camelValues = kebabValues.map(value => kebabToCamel(value.trim())).join(', ');
    document.getElementById('output').value = camelValues;
  }
  
  function convertToKebabCase() {
    const input = document.getElementById('input').value;
    const camelValues = input.split(',');
    const kebabValues = camelValues.map(value => camelToKebab(value.trim())).join(', ');
    document.getElementById('output').value = kebabValues;
  }
  
  document.getElementById('kebabToCamelButton').addEventListener('click', convertToCamelCase);
  document.getElementById('camelToKebabButton').addEventListener('click', convertToKebabCase);
  