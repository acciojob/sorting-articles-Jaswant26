//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

        // Function to remove certain words from a band name
        function stripArticles(bandName) {
            return bandName.replace(/^(a |an |the )/i, '').trim();
        }

        // Sort the bands array while ignoring specified words
        const sortedBands = bands.sort((a, b) => stripArticles(a) > stripArticles(b) ? 1 : -1);

        // Create the sorted list and add it to the webpage
        const bandList = document.getElementById('band');
        sortedBands.forEach(band => {
            const listItem = document.createElement('li');
            listItem.textContent = band;
            bandList.appendChild(listItem);
        });