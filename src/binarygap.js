function solution(N) {

    // First Convert N to binary representation
    const binaryStr = N.toString(2);

    // Initialize the variables to track the maximum gap length and current gap length

    let maximumGap = 0;
    let currentGap = 0;

    // Iterate through the binary string
    for (let i = 0; i < binaryStr.length; i++) {
        // If current digit is '0', increase current gap length
        if (binaryStr[i] === '0') {
            currentGap++;
        } else {
            // If current digit is '1', update maximumGap if current gap is greater
            maximumGap = Math.max(maximumGap, currentGap);
            // Reset current gap length
            // The Math.max method returns the number with the highest value
            currentGap = 0;
        }
    }

    // Return the maximum gap length
    return maximumGap;
}