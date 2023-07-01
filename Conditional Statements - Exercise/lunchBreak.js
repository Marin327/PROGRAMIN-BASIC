function solve(input) {
    let name = input[0];
    let episode = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunch = breakTime * 0.8;
    let rest = breakTime * 0.4;
    let time = breakTime - lunch - rest;

    if (time >= episode) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(time - episode)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(episode - time)} more minutes.`);
    }
}
solve([
    "Game of Thrones",
    "60",
    "96"
])