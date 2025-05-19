const input = Deno.readTextFileSync('input.txt').split('\n');

let doubles = 0, triples = 0;

for (const line of input) {
    let occurrences = new Map<string, number>();

    for (const char of line) {
        if (occurrences.has(char)) {
            occurrences.set(char, occurrences.get(char)! + 1);
        } else {
            occurrences.set(char, 1);
        }
    }

    if (Array.from(occurrences.values()).includes(2)) {
        doubles++;
    }
    if (Array.from(occurrences.values()).includes(3)) {
        triples++;
    }
}

console.log(doubles * triples);