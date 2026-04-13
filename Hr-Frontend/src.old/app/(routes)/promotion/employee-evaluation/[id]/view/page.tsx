import React from 'react';

type Props = {
   params: {
      id: string;
   };
};

const EmployeeEvaluationViewPage = async ({ params }: Props) => {
   const { id } = await params;
   console.log(id);
   return <div>EmployeeEvaluationViewPage</div>;
};

export default EmployeeEvaluationViewPage;
