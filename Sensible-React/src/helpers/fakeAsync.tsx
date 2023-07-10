async function stall(stallTime = 3000) {
    await new Promise(resolve => setTimeout(resolve, stallTime));
}

var fakeAsync = async () => {
    await stall(); // stalls for the default 3 seconds
    await stall(500); // stalls for 1/2 a second
    // causes at least 3.5s delay
}

export default fakeAsync;