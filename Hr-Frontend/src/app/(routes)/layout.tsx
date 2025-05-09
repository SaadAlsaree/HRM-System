import Layout from '@/components/layout';
import React from 'react';

type Props = {
   children: React.ReactNode;
};
const RouteLayout = ({ children }: Props) => {
   return <Layout>{children}</Layout>;
};

export default RouteLayout;
