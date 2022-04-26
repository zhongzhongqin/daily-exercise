/*
 * @Date: 2022-04-25 17:29:22
 * @LastEditTime: 2022-04-26 11:01:49
 * @LastEditors: Cover
 * @Description: 
 * @FilePath: /daily-exercise/typescript/recursiveStair/recursiveStaircaseDP.ts
 * So do you want take a leap of faith or become an old man, filled with regret waiting to die alone ?
 */

/**
 * Recursive Staircase Problem (Dynamic Programming Solution 动态规划解决方案).
 * * 出处:https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/recursive-staircase/recursiveStaircaseDP.js
 * 此方法的时间复杂度及空间复杂 - Time: O(n); Space: O(n)
 * @param {number} stairsNum - Number of stairs to climb on 台阶总数.
 * @return {number} - Number of ways to climb a staircase.方式总数
 */
function recursiveStaircaseDP(stairsNum): number {
    if (stairsNum < 0) {
        // There is no way to go down - you climb the stairs only upwards.
        // 由题可得，只能往上走
        return 0;
    }

    // Init the steps vector that will hold all possible ways to get to the corresponding step.
    // 初始化方法数的容器，它将与所有可能的上楼方式保持一致性；
    const steps = new Array(stairsNum + 1).fill(0);

    // Init the number of ways to get to the 0th, 1st and 2nd steps.
    // 初始化方法和，当阶梯数分别为0，1，2时；
    steps[0] = 0;
    steps[1] = 1;
    steps[2] = 2;

    if (stairsNum <= 2) {
        // Return the number of ways to get to the 0th or 1st or 2nd steps.
        // 返回当台阶数小于等于2时的方法数
        return steps[stairsNum];
    }

    // Calculate every next step based on two previous ones.
    // 基于上两步（跨了一台阶，跨了两台阶）计算下一步了；
    for (let currentStep = 3; currentStep <= stairsNum; currentStep += 1) {
        steps[currentStep] = steps[currentStep - 1] + steps[currentStep - 2];
    }

    // Return possible ways to get to the requested step.
    // 返回可能的方式数量
    return steps[stairsNum];
}