const countries = [
  "Australia",
  "Monaco",
  "Spania",
  "Italia",
  "Franța",
  "Germania",
  "Marea Britanie",
  "România",
  "SUA"
];

document.addEventListener('DOMContentLoaded', () => {
  const countryInput = document.getElementById('country-input');
  const suggestionsBox = document.getElementById('country-suggestions');

  if (!countryInput || !suggestionsBox) return;

  countryInput.addEventListener('input', () => {
    const query = countryInput.value.toLowerCase().trim();
    suggestionsBox.innerHTML = '';

    if (query.length === 0) {
      suggestionsBox.classList.remove('active');
      return;
    }

    const matches = countries.filter(country => 
      country.toLowerCase().includes(query)
    );

    if (matches.length > 0) {
      matches.forEach(match => {
        const item = document.createElement('div');
        item.classList.add('suggestion-item');
        item.textContent = match;

        item.addEventListener('click', () => {
          countryInput.value = match;
          suggestionsBox.classList.remove('active');
        });

        suggestionsBox.appendChild(item);
      });

      suggestionsBox.classList.add('active');
    } else {
      suggestionsBox.classList.remove('active');
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.autocomplete-wrapper')) {
      suggestionsBox.classList.remove('active');
    }
  });
});