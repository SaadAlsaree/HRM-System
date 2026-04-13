'use client';
import React, { useEffect } from 'react';
import HomeAddressView from './_components/home-address-view';
import { addressInformationService } from '@/services/address-information.service';

export interface IAddressInformation {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   area?: string;
   district?: string;
   streetNo?: string;
   houseNo?: string;
   nearestPoint?: string;
   notes?: string;
   governorateId?: number;
   governorateName?: string;
   provinceId?: number;
   provinceName?: string;
   territoryId?: number;
   territoryName?: string;
   isCurrent?: boolean;
}

type Props = {
   employeeId: string;
};
const HomeAddressPage = ({ employeeId }: Props) => {
   const [addressInformation, setAddressInformation] = React.useState<IAddressInformation[] | null>(null);
   const [loading, setLoading] = React.useState<boolean>(true);
   const [error, setError] = React.useState<string | null>(null);

   const params = {
      employeeId,
      Page: 1,
      PageSize: 20
   };

   useEffect(() => {
      addressInformationService
         .getAddressInformation(params)
         .then((response) => {
            setAddressInformation(response?.data?.items);
            // console.log(response.data.items);
         })

         .catch((error) => {
            setError(error);
         })
         .finally(() => {
            setLoading(false);
         });
   }, [employeeId]);

   if (loading) {
      return <div>Loading...</div>;
   }

   if (error) {
      return <div>Error: {error}</div>;
   }

   return (
      <div>
         <HomeAddressView employeeId={employeeId} data={addressInformation as IAddressInformation[]} />
      </div>
   );
};

export default HomeAddressPage;
