fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('summary-list');
    
    const idMap = {
      'Reaction': 'red',
      'Memory': 'yellow',
      'Verbal': 'green',
      'Visual': 'blue'
    };

    data.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'subs-marks';
      itemDiv.id = idMap[item.category] || '';

      itemDiv.innerHTML = `
        <div class="subject">
          <img src="${item.icon}" alt="${item.category} icon">
          <span class="${item.category}">${item.category}</span>
        </div>
        <p class="score">${item.score} <span class="hundred">/ 100</span></p>
      `;

      container.appendChild(itemDiv);
    });
  })
  .catch(error => console.error('Error fetching JSON data:', error));