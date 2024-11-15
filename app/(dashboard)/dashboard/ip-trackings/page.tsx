import { getTrackedIp } from "@/actions/ip-track/get-tracked-ip";
import { TrackedIpList } from "@/features/admin/ip-track/components/tracked-ip-list";
import React from "react";

const IpTrackingPage = async () => {
  const data = await getTrackedIp();
  return <TrackedIpList data={data!} />;
};

export default IpTrackingPage;
