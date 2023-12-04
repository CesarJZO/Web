const hackers = document.getElementsByClassName('hacker');
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

for (let hacker of hackers) {
    const original = hacker.innerText;
    hacker.onmouseover = e => {
        let iterations = 0;
        const interval = setInterval(() => {
            e.target.innerText = original.split("")
                .map((l, i) => {
                    if (i < iterations) return l;
                    return letters[Math.floor(Math.random() * letters.length)]
                })
                .join("");

            if (iterations >= e.target.innerText.length) {
                clearInterval(interval);
                e.target.innerText = original;
            }

            iterations += 1 / 3;
        }, 50);
    }
}
