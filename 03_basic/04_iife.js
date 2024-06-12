// Immediately Invoked Function Expression (IIFE)


(function chai(){
    console.log(`Db connected`);
})();

( () => {
    console.log(`Db coonected 2`);
})();

( (name) => {
    console.log(`Db coonected 3 ${name}`);
})("Prajwal")