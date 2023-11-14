import DeleteWorkButton from "../delete/deleteWorkButton";
import EditWorkButton from "../edit/editWorkButton";
import { type Works } from "../store/workStore";

interface WorkToolbar {
  work: Works[number];
}

export default function WorkToolbar({ work }: WorkToolbar) {
  return (
    <div className="flex gap-2 py-4">
      <EditWorkButton work={work} />
      <DeleteWorkButton work={work} />
    </div>
  );
}
