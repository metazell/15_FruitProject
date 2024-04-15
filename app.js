const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');
const select = document.createElement('select');

const list = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function searchHandler(e) {
    const inputVal = e.target.value.trim();
    const results = search(inputVal);
    
    showSuggestions(results, inputVal);
  }
  
function search(str) {
    return list.filter(fruit => fruit.toLowerCase().startsWith(str.toLowerCase()));
}

function showSuggestions(results, inputVal) {
    if (inputVal === '') {
    suggestions.style.display = 'none';
    return;
  }

suggestions.innerHTML = '';
    results.forEach(result => {
    const option = document.createElement('option');
    option.value = result;
    option.textContent = result;
    select.appendChild(option);
  });

suggestions.appendChild(select);
suggestions.style.display = 'block';
}

input.addEventListener('input', searchHandler);


