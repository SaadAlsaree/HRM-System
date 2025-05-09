'use client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { statusOptions } from '@/common/status-option';

type Props = {
   status: string | number | null | undefined;
   id: string | number | null;

   onChange: (value: string | number | null, id: string | number | null) => void;
};

const SelectStatus = ({ status, onChange, id }: Props) => {
   const handleChange = (value: string) => {
      onChange(value, id);
   };
   return (
      <Select defaultValue={status ? String(status) : undefined} onValueChange={handleChange}>
         <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='الحالة' />
         </SelectTrigger>
         <SelectContent>
            {statusOptions.map((item) => (
               <SelectItem value={item.value} key={item.value}>
                  {item.label}
               </SelectItem>
            ))}
         </SelectContent>
      </Select>
   );
};

export default SelectStatus;
