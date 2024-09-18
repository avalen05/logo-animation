$(document).ready(function () {
    // Array of logo image URLs (replace these with your actual URLs)
    const logos = [
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(1).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(2).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(3).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(4).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(5).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(6).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(7).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(8).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(9).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(10).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(11).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(12).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(13).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(14).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(15).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(16).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(17).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(18).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(19).png?raw=true',
        'https://github.com/avalen05/logo-animation/blob/main/pngegg%20(20).png?raw=true'
    ];

    // Function to shuffle array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to select 15 random logos from the array of 20
    function getRandomLogos() {
        const shuffledLogos = shuffle([...logos]);
        return shuffledLogos.slice(0, 15); // Select 15 logos from the shuffled array
    }

    // Function to randomize and fade in/out logos
    function randomizeLogos() {
        const selectedLogos = getRandomLogos();
        $('.logo-slot').each(function (index, element) {
            setTimeout(function () {
                $(element)
                    .removeClass('fade-in')
                    .addClass('fade-out')
                    .one('transitionend', function () {
                        $(element).css('background-image', `url(${selectedLogos[index]})`);
                        $(element)
                            .removeClass('fade-out')
                            .addClass('fade-in');
                    });
            }, Math.random() * 2000); // Randomize the delay for the effect
        });
    }

    // Start randomizing logos every 5 seconds
    setInterval(randomizeLogos, 5000);

    // Initial call to display the first set of logos
    randomizeLogos();
});
