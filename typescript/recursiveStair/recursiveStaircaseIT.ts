/*
 * @Date: 2022-04-25 18:29:13
 * @LastEditTime: 2022-04-25 19:22:56
 * @LastEditors: Cover
 * @Description: 
 * @FilePath: /daily-exercise/typescript/台阶问题/recursiveStaircaseIT.ts
 * So do you want take a leap of faith or become an old man, filled with regret waiting to die alone ?
 */

/**
 * Recursive Staircase Problem (Iterative Solution 迭代方案).
 * 此方法的时间复杂度及空间复杂 - Time: O(n); Space: O(1)
 * @param {number} stairsNum - Number of stairs to climb on.
 * @return {number} - Number of ways to climb a staircase.
 */
function recursiveStaircaseIT(stairsNum) {
    if (stairsNum <= 0) {
        // There is no way to go down - you climb the stairs only upwards.
        // Also you don't need to do anything to stay on the 0th step.
        return 0;
    }

    // Init the number of ways to get to the 0th, 1st and 2nd steps.
    const steps = [1, 2];

    if (stairsNum <= 2) {
        // Return the number of possible ways of how to get to the 1st or 2nd steps.
        return steps[stairsNum - 1];
    }

    // Calculate the number of ways to get to the n'th step based on previous ones.
    // Comparing to Dynamic Programming solution we don't store info for all the steps but
    // rather for two previous ones only.
    for (let currentStep = 3; currentStep <= stairsNum; currentStep += 1) {
        [steps[0], steps[1]] = [steps[1], steps[0] + steps[1]];
    }

    // Return possible ways to get to the requested step.
    return steps[1];
}
