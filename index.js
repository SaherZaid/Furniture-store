const fetchDataButton = document.getElementById('fetchDataButton');
        const dataList = document.getElementById('dataList');

        fetchDataButton.addEventListener('click', () => {
            fetch('https://cat-fact.herokuapp.com/facts')
                .then(response => response.json())
                .then(data => {
                    dataList.innerHTML = ``;

                    data.forEach(item => {
                        const listItem = document.createElement('li');
                        listItem.textContent =  item.text;
                        dataList.appendChild(listItem);
                    });
                })
           
        });