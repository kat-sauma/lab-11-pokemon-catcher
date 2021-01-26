export function makeSeenArray(arrayOfObjects) {
    const seenArray = [];

    for (let item of arrayOfObjects) {
        seenArray.push(item.seen);
    }

    return seenArray;
}

export function makeCaughtArray(arrayOfObjects) {
    const caughtArray = [];

    for (let item of arrayOfObjects) {
        caughtArray.push(item.caught);
    }
    return caughtArray;
}

export function makeLabelsArray(arrayOfObjects) {
    const nameArray = [];

    for (let item of arrayOfObjects) {
        nameArray.push(item.name);
    }

    return nameArray;
}