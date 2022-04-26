/*
 * @Date: 2022-04-25 17:54:43
 * @LastEditTime: 2022-04-26 09:46:56
 * @LastEditors: Cover
 * @Description: 
 * @FilePath: /daily-exercise/typescript/recursiveStair/recursiveStaircaseBF.ts
 * So do you want take a leap of faith or become an old man, filled with regret waiting to die alone ?
 */

/**
 * 出处:https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/recursive-staircase/recursiveStaircaseBF.js
 * Recursive Staircase Problem (Brute Force Solution 直接递归：暴力的解决方案).
 *
 * 此方法的时间复杂度及空间复杂 - Time: O(2^n); Space: O(1)
 * @param {number} stairsNum - Number of stairs to climb on. 台阶总数
 * @return {number} - Number of ways to climb a staircase. 上楼方式之和
 */
function recursiveStaircaseBF(stairsNum):number {
    if (stairsNum <= 0) {
        // There is no way to go down - you climb the stairs only upwards.
        // 由题可得，只能往上走
        // Also if you're standing on the ground floor that you don't need to do any further steps.
        // 与此同时，若你站在平地，你无需爬阶梯。
        return 0;
    }

    if (stairsNum === 1) {
        // There is only one way to go to the first step.
        // 当阶梯数为1时，显示只有1种方式上楼；
        return 1;
    }

    if (stairsNum === 2) {
        // There are two ways to get to the second steps: (1 + 1) or (2).
        // 当阶梯总数为2时，有两种方式上楼：跨1步再跨1步，直接跨2步
        return 2;
    }

    // Sum up how many steps we need to take after doing one step up with the number of
    // steps we need to take after doing two steps up.
    // 求上了1步和上了2步之后的和
    return recursiveStaircaseBF(stairsNum - 1) + recursiveStaircaseBF(stairsNum - 2);
}