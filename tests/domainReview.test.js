import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 46, slack: 43, drag: 18, confidence: 77 };
assert.equal(domainReviewScore(item), 158);
assert.equal(domainReviewLane(item), "ship");
