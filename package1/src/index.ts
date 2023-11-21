import { computeSumPlusTwo } from "@package2/compute_sum_plus_two";
import { computeSum } from "@package3/compute_sum";

export function helloWorld(): number {
  const a = 1;
  const b = 2;

  console.log("computeSum", computeSum(a, b));
  console.log("computeSumPlusTwo", computeSumPlusTwo(a, b));

  return a * b;
}
