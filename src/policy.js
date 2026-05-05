export const threshold = 150;
const riskPenalty = 7;
const latencyPenalty = 3;
const weightBonus = 3;

export function score(signal) {
  return signal.demand * 2 + signal.capacity + signal.weight * weightBonus
    - signal.latency * latencyPenalty - signal.risk * riskPenalty;
}

export function classify(signal) {
  return score(signal) >= threshold ? "accept" : "review";
}
