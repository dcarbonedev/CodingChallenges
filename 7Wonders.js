// 7 Wonders
// 7 Wonders is a board game that consists of building your city, gathering resources and fighting your neighbors.

// One part of the game is also to research science in order to gain points at the end of the game. There are 3 types of science glyphs you can gather:

// Compasses
// Gears
// Tablets
// The way points are added up works as described here:

// Step 1
// Each distinct set of three different glyphs is worth 7 points.

// 1 Compass, 1 Gear and 1 Tablet is 7 points.

// 2 Compasses, 1 Gear and 1 Tablet is still 7 points.

// Note that a distinct set of three different glyphs means 1 Compass, 1 Gear and 1 Tablet. No more, no less!

// Step 2
// The amount of each glyph you own is squared and then summed up.

// 1 Compass, 1 Gear and 1 Tablet is 3 points.

// 2 Compasses, 1 Gear and 1 Tablet is 6 points.

// Finally
// The total science points is equal to the sum of the two steps.

// 1 Compass, 1 Gear and 1 Tablet is finally 10 points.

// 2 Compasses, 1 Gear and 1 Tablet is finally 13 points.

// You will be given 3 inputs corresponding to the amount of each glyph you have acquired in the game. Your task is to output the final score. Take into account that you may have no glyphs at all!

function solve(c, g, t) {
  let arr = [c, g, t];
  let distinctSum = 0;
  while(arr[0] > 0 && arr[1] > 0 && arr[2] > 0) {
    distinctSum += 7;
    arr[0]--;
    arr[1]--;
    arr[2]--;
  }
  return c**2 + g**2 + t**2 + distinctSum;
}