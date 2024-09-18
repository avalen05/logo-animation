$(document).ready(function () {
    // Array of logo image URLs (20 logos)
    const logos = [
        'logo1.png',
        'logo2.png',
        'logo3.png',
        'logo4.png',
        'logo5.png',
        'logo6.png',
        'logo7.png',
        'logo8.png',
        'logo9.png',
        'logo10.png',
        'logo11.png',
        'logo12.png',
        'logo13.png',
        'logo14.png',
        'logo15.png',
        'logo16.png',
        'logo17.png',
        'logo18.png',
        'logo19.png',
        'logo20.png'
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
