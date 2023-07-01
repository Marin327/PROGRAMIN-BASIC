function solve(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let heigth = Number(input.shift());
    let volume = width * length * heigth;
    let movedCartons = 0;
    let isFull = false;

    while (true) {
        numCartons = input.shift();

        if (numCartons == "Done") {
            break;
        } else {
            movedCartons += Number(numCartons);

            if (movedCartons > volume) {
                isFull = true;
                break;
            }
        }
    }

    if (isFull) {
        console.log(`No more free space! You need ${Math.abs(movedCartons - volume)} Cubic meters more.`);
    } else {
        console.log(`${Math.abs(movedCartons - volume)} Cubic meters left.`);
    }
}
        solve([
            "10",
            "1",
            "2",
            "4",
            "6",
            "Done"])