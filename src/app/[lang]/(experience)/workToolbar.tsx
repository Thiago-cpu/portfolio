import DeleteWork from "./delete/deleteWork";
import EditWork from "./edit/editWork";
import { type Works } from "./store/workStore";

interface WorkToolbar {
  work: Works[number];
}

export default function WorkToolbar({ work }: WorkToolbar) {
  return (
    <div className="ml-2 flex gap-2">
      <EditWork work={work} />
      <DeleteWork work={work} />
    </div>
  );
}
