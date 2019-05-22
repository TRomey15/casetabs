// Time complexity: O(n); Space complexity: O(n)

const toBinaryString = number => number.toString(2);

function extractZeroSequences(str) {
    const sequences = str.match(/(?<=1)0*(?=1)/g);
    return sequences || [];
}

function findMaxZeroCount(str = '') {
    let max = 0;

    for (let seq of extractZeroSequences(str)) {
        if (seq.length > max) {
            max = seq.length;
        }
    }

    return max;
}

function zeroCount(num = 0) {
    return findMaxZeroCount(
        toBinaryString(num)
    );
}
