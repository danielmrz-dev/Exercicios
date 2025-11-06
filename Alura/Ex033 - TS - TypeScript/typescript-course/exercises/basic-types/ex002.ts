let testFunction: Function & { stop: Function };

testFunction = Object.assign(() => {}, { stop: () => {} });

testFunction(); // ✅
testFunction.stop(); // ✅

// testFunction.metodoNaoExiste();
// testFunction = '';