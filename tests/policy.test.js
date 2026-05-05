import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 86,
    "capacity": 105,
    "latency": 12,
    "risk": 6,
    "weight": 6,
    "score": 217,
    "decision": "accept"
  },
  {
    "name": "case_2",
    "demand": 64,
    "capacity": 107,
    "latency": 8,
    "risk": 5,
    "weight": 4,
    "score": 188,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 73,
    "capacity": 90,
    "latency": 14,
    "risk": 20,
    "weight": 8,
    "score": 78,
    "decision": "review"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
