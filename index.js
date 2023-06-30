const twoSum = (nums, target) => {

    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        const indexOfDiff = nums.indexOf(diff);

        if(indexOfDiff !== -1 && indexOfDiff !== i) {
            console.log([i, indexOfDiff]);
            return [i, indexOfDiff];
        }
    }
}


// twoSum([2, 7, 11, 15], 9);
// twoSum([3, 2, 4], 6);
// twoSum([3, 3], 6);