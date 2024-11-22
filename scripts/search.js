document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-btn');

    searchButton.addEventListener('click', () => {
        const data = {
            id: document.querySelector('#id').value || null,
            city: document.querySelector('#city').value || null,
            carType: document.querySelector('#car-type').value || null,
            doorCount: document.querySelector('#door-count').value || null,
            cost: document.querySelector('#cost').value || null,
            carClass: document.querySelector('#car-class').value || null,
            engineVolume: document.querySelector('#engine-volume').value || null,
            gear: document.querySelector('#gear').value || null,
            carAddress: document.querySelector('#car-adress').value || null
        };

        const filteredData = {};
        for (const [key, value] of Object.entries(data)) {
            if (value) {
                filteredData[key] = value;
            }
        }

        fetch('https://ddemoapi.com/api/filters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filteredData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка сети: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
            alert('Произошла ошибка при выполнении поиска.');
        });


        console.log(data)
    });
});