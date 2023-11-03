import * as accounts from "./accounts";
import * as posts from "./posts";
import * as sessions from "./sessions";
import * as users from "./users";
import * as verificationTokens from "./verificationTokens";

export const schema = {
  ...accounts,
  ...posts,
  ...sessions,
  ...users,
  ...verificationTokens,
};
