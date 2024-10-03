let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        /*ogni volta che clicco un bottone, la variabile salverà
        l'elenco delle classi di quel bottone*/
        switch (true) {
            case styles.contains('decrease'):
                count--;
                break;
            case styles.contains('increase'):
                count++;
                break;
            default:
                count = 0;
        }
        

        if(count > 0) {
            value.style.color = 'green';
        } else if(count < 0) {
            value.style.color = 'red';
        } else if(count === 0) {
            value.style.color = 'black';
        }

        value.textContent = count;
    })
})