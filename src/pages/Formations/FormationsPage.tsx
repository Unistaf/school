
import { CompactTable } from '@table-library/react-table-library/compact';

import AddFormationTrigger from "@/components/Formations/AddFormation/AddFormationTrigger"
import Title1 from "@/components/Typography/Title1"
import Title2 from "@/components/Typography/Title2"

const FormationsPage = () => {

  const nodes = [
    {
      id: '0',
      name: 'Shopping List',
      deadline: new Date(2020, 1, 15),
      type: 'TASK',
      isComplete: true,
      nodes: 3,
    },
  ];

  const COLUMNS = [
    { label: 'Task', renderCell: (item) => <p className='border'>{item.name}</p> },
    {
      label: 'Deadline',
      renderCell: (item) =>
        <p>{item.deadline.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })}</p>
    },
    { label: 'Type', renderCell: (item) => <p>{item.type}</p> },
    {
      label: 'Complete',
      renderCell: (item) => <p>{item.isComplete.toString()}</p>,
    },
  ];

  const data = { nodes };
  return (
    <div>
      <div className="flex justify-between items-center">
        <Title1 title="Formations" />
        <AddFormationTrigger />
      </div>
      <div className="mt-6">
        <div className="min-h-96 bg-white rounded-xl shadow-sm p-4">
          <Title2 title="Liste des formations (20)" />

          <CompactTable columns={COLUMNS} data={data} />
        </div>
      </div>
    </div>
  )
}

export default FormationsPage