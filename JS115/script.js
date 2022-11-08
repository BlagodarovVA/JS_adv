setTimeout(() => console.log('timeout'));

Promise.resolve()
// микро задачи: than, catch, finally, await
    .then(() => console.log('promise'));

queueMicrotask(() => console.log('queueMicrotask'));

Promise.resolve()
    .then(() => console.log('promise 2'));

console.log('sync');

// () => {} - макрозадача
// микрозадачи все запланированные
// render
// () => {}
// микрозадачи
// render
// () => {}