import * as Collections from "./collections";
import { app, generateProject } from "./utils";

const application = app({
  id: "dockerNext",
  collections: Object.values(Collections),
});

generateProject(application, {
  // Mark this as true when you want to override even the non-overridable files
  // override: true,
});
