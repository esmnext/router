export function warn(...args: any[]) {
    console.log(
        '%c ROUTER WARNING:',
        'color: rgb(214, 77, 77); font-weight: bold;',
        ...args
    );
}
