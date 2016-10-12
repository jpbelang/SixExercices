
function actualArgs(args) {

    if ( args.length > 2) {
        return args.slice(2);
    } else {
        return [];
    }
}

console.log(actualArgs(process.argv));