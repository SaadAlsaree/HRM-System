'use client';

import { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from './ui/separator';

interface Label {
   id: string;
   text: string;
   color: string;
}

const COLORS = [
   '#84cc16',
   '#06b6d4',
   '#3b82f6',
   '#6b7280',
   '#f97316',
   '#ef4444',
   '#ec4899',
   '#a855f7',
   '#0ea5e9',
   '#18181b',
   '#d946ef',
   '#e11d48'
];

type Props = {
   labelData: Label[] | [];
};

const LabelManager = ({ labelData }: Props) => {
   const [isOpen, setIsOpen] = useState(false);
   const [labels, setLabels] = useState<Label[]>(labelData);
   const [selectedColor, setSelectedColor] = useState(COLORS[0]);
   const [labelText, setLabelText] = useState('');
   const [editingLabel, setEditingLabel] = useState<Label | null>(null);

   const handleSave = () => {
      if (labelText.trim()) {
         const newLabel: Label = {
            id: Math.random().toString(36).substr(2, 9),
            text: labelText.trim(),
            color: selectedColor
         };
         setLabels([...labels, newLabel]);
         setLabelText('');
         setSelectedColor(COLORS[0]);
      }
   };

   const handleDelete = (id: string) => {
      setLabels(labels.filter((label) => label.id !== id));
   };

   const handleEdit = (label: Label) => {
      setEditingLabel(label);
      setLabelText(label.text);
      setSelectedColor(label.color);
   };

   const handleUpdate = () => {
      if (editingLabel && labelText.trim()) {
         setLabels(
            labels.map((label) => (label.id === editingLabel.id ? { ...label, text: labelText.trim(), color: selectedColor } : label))
         );
         setEditingLabel(null);
         setLabelText('');
         setSelectedColor(COLORS[0]);
      }
   };

   return (
      <div className=''>
         <Button size='sm' onClick={() => setIsOpen(true)} variant='outline' className='w-full'>
            أدارة Tag
         </Button>

         <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className='w-[600px] bg-white dark:bg-gray-900'>
               <DialogHeader>
                  <DialogTitle className=''>أدارة Tags</DialogTitle>
               </DialogHeader>
               <Separator />
               <div className='space-y-4'>
                  <div className='flex flex-wrap gap-2 p-2 border rounded-lg'>
                     {COLORS.map((color) => (
                        <button
                           key={color}
                           className={`w-6 h-6 rounded ${selectedColor === color ? 'ring-2 ring-offset-2 ring-primary' : ''}`}
                           style={{ backgroundColor: color }}
                           onClick={() => setSelectedColor(color)}
                        />
                     ))}
                  </div>

                  <div className='flex gap-2'>
                     <Input
                        placeholder='Tag'
                        value={labelText}
                        onChange={(e) => setLabelText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && (editingLabel ? handleUpdate() : handleSave())}
                     />
                     <Button onClick={editingLabel ? handleUpdate : handleSave}>
                        {editingLabel ? <Check className='h-4 w-4' /> : 'حفظ'}
                     </Button>
                  </div>

                  {editingLabel && <div className='text-sm text-muted-foreground'>تعديل : {editingLabel.text}</div>}

                  <div className='space-y-4'>
                     <Separator />
                  </div>
                  <ScrollArea className='w-[550px] rounded-md border p-3'>
                     <div className='flex flex-row gap-2'>
                        {labels.map((label) => (
                           <div
                              key={label.id}
                              className='flex items-center gap-1 px-2 py-[1px] rounded-lg text-white cursor-pointer'
                              style={{ backgroundColor: label.color }}
                              onClick={() => handleEdit(label)}
                           >
                              <span className='text-sm'>{label.text}</span>
                              <Button
                                 variant='ghost'
                                 size='icon'
                                 className='h-5 w-5 text-white hover:bg-white/20 hover:text-red-500'
                                 onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete(label.id);
                                 }}
                              >
                                 <X className='h-3 w-3' />
                              </Button>
                           </div>
                        ))}
                     </div>
                     <ScrollBar orientation='horizontal' />
                  </ScrollArea>
               </div>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default LabelManager;
