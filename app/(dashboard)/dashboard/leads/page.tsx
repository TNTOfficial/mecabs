import { getLeads } from "@/actions/leads/get-leads";
import { LeadsTable } from "@/features/leads/components/leads-list";

export default async function LeadsPage() {
  const leads = await getLeads();

  return (
    <div className="container mx-auto pb-10">
      <LeadsTable leads={leads} />
    </div>
  );
}
