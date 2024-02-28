

function solution(A, K) {
    const N = A.length;
    if (N === 0) {
        return [];
    }
    
    K = K % N; // Divide K by length of the array N to get number of rotations 
    
    // Rotate the array K times
    for (let i = 0; i < K; i++) {
        
        const last = A[N - 1];
        
        for (let j = N - 1; j > 0; j--) {
            A[j] = A[j - 1];
        }
        
        A[0] = last;
    }
    
    return A;
}
