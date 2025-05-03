const insertionSort = (nums) => {
    const N = nums.length;
    for (let i = 1; i < N; i++) {
        const auxiliar = nums[i];
        let j =  i - 1;
        while(j >= 0 && nums[j] > auxiliar) {
            nums[j + 1] = nums[j];
            j -= 1;
        }
        nums[j +  1] = auxiliar
    }
    return nums;
};

console.log(insertionSort([2, 3, 3, 1, -1, 12, 43, 22]));
