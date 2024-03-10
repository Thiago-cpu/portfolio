import * as accounts from "./accounts";
import * as sessions from "./sessions";
import * as users from "./users";
import * as verificationTokens from "./verificationTokens";
import * as contacts from "./contacts";
import * as technologies from "./technologies";
import * as works from "./works";
import * as worksToTechnologies from "./worksToTechnologies";
import * as links from "./links";

export const schema = {
  ...accounts,
  ...sessions,
  ...users,
  ...verificationTokens,
  ...contacts,
  ...technologies,
  ...works,
  ...worksToTechnologies,
  ...links,
};
