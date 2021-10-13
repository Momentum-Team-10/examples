const root = document.getElementById('root')
const container = document.createElement('div')
container.id = 'container'

root.appendChild(container)

// get a list of cat breeds
// https://api.thecatapi.com/v1/breeds


// Api request to get a list of cat breeds
// the user can search by
fetch('https://api.thecatapi.com/v1/breeds')
    // The first promise is to get the reponse
    .then(response => response.json())
    // The second promise is to use the data from the response
    .then(data => {
        // Inside of this second promise is where we
        // can start doing things with the data from the api

        let dropdown = document.createElement('select')
        let dropdownLabel = document.createElement('label')
        dropdownLabel.innerText = 'Select Cat Breed'

        // Create search input and button
        let input = document.createElement('input')
        input.placeholder = 'Search by breed name'
        let button = document.createElement('button')
        button.innerText = 'Search'
        let inputDiv = document.createElement('div')
        inputDiv.id = 'search-input'
        inputDiv.appendChild(input)
        inputDiv.appendChild(button)

        // Add input div to container
        container.appendChild(inputDiv)

        // Add event listener to button that takes value from
        // input and use in request URL
        button.addEventListener('click', (event) => {
            console.log(input.value)
            for (item of data) {
                if (input.value.toLowerCase() === item.name.toLowerCase()) {
                    fetch(`https://api.thecatapi.com/v1/breeds/search?q=${item.id}`)
                        .then(response => response.json())
                        .then(data => console.log(data))
                }
            }

        })

        // looping through the data we got as a response
        // from the first api request
        for (item of data) {
            let option = document.createElement('option')
            option.innerText = item.name
            option.value = item.id
            dropdown.appendChild(option)
        }

        // Add the dropdown menu to the page
        container.appendChild(dropdownLabel)
        container.appendChild(dropdown)


        // Add event listener to the dropdown menu
        // that takes value from option element to use
        // in the below api request
        dropDown.addEventListener('change', (event) => {
            console.log(event.target.value)

            // search for breed by name
            // https://api.thecatapi.com/v1/breeds/search?q=CAT_BREED_CODE
            fetch(`https://api.thecatapi.com/v1/breeds/search?q=${event.target.value}`)
                .then(response => response.json())
                .then(data => console.log(data))
        })
    })

