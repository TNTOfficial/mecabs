import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ew52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728edds52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed052f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed152f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed5ddfdf2f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728eoomd52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ejkld52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728eojd52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ejjd52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728oioed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ioed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728eooioid52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "7wqerqwr28ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed5werqr2f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed333352f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "7280jfed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ewwerd52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52000f",
      amount: 100,
      status: "pending",
      email: "chem@example.com",
    },
    {
      id: "728e23d52f",
      amount: 100,
      status: "pending",
      email: "aartm@example.com",
    },
    {
      id: "728ed0i52f",
      amount: 100,
      status: "pending",
      email: "aam@example.com",
    },
    {
      id: "728ed5mmk2f",
      amount: 100,
      status: "pending",
      email: "maa@example.com",
    },
    {
      id: "728ed000ee52f",
      amount: 100,
      status: "pending",
      email: "ewrm@example.com",
    },
    {
      id: "728ederq352f",
      amount: 100,
      status: "pending",
      email: "m@eexample.com",
    },
    {
      id: "728ed1352f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed32152f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ewrqw32ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728edpofpo52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
