/* As this is the same task as day 2, part 1 of advent of code 2024, I have used the same solution.
(https://github.com/jimiherk/aoc24/blob/main/day-2/part-1.ts) */

const input = Deno.readTextFileSync('input.txt')
    .split('\n')
    .map(el => el.split(' ').map(Number));

let safeReports = 0;

for (let report of input) {
    let safe = true;

    if (report[0] > report[1]) {
        // Decreasing
        for (let i = 1; i < report.length; i++) {
            if (report[i - 1] <= report[i] || Math.abs(report[i - 1] - report[i]) < 1 || Math.abs(report[i - 1] - report[i]) > 3) safe = false;
        }
    } else {
        // Increasing
        for (let i = 1; i < report.length; i++) {
            if (report[i] <= report[i - 1] || Math.abs(report[i - 1] - report[i]) < 1 || Math.abs(report[i - 1] - report[i]) > 3) safe = false;
        }
    }

    if (safe) safeReports++;
}

console.log(safeReports);