// Dependencies: pnpm install lucide-react react-aria-components

'use client';

import { cn } from '@/lib/utils';
import { getLocalTimeZone, today } from '@internationalized/date';
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import {
   Button,
   CalendarCell,
   CalendarGrid,
   CalendarGridBody,
   CalendarGridHeader,
   CalendarHeaderCell,
   DateInput,
   DateRangePicker,
   DateSegment,
   Dialog,
   Group,
   Heading,
   Label,
   Popover,
   RangeCalendar
} from 'react-aria-components';

export default function Input42() {
   // eslint-disable-next-line prefer-const
   let now = today(getLocalTimeZone());
   return (
      <DateRangePicker className='space-y-2'>
         <Label className='text-sm font-medium text-foreground'>Date range picker</Label>
         <div className='flex'>
            <Group className='inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input bg-background px-3 py-2 pe-9 text-sm shadow-sm shadow-black/5 ring-offset-background transition-shadow data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-2 data-[focus-within]:ring-ring/30 data-[focus-within]:ring-offset-2'>
               <DateInput slot='start'>
                  {(segment) => (
                     <DateSegment
                        segment={segment}
                        className='inline rounded p-0.5 text-foreground caret-transparent outline outline-0 data-[disabled]:cursor-not-allowed data-[focused]:bg-accent data-[invalid]:data-[focused]:bg-destructive data-[type=literal]:px-0 data-[focused]:data-[placeholder]:text-foreground data-[focused]:text-foreground data-[invalid]:data-[focused]:data-[placeholder]:text-destructive-foreground data-[invalid]:data-[focused]:text-destructive-foreground data-[invalid]:data-[placeholder]:text-destructive data-[invalid]:text-destructive data-[placeholder]:text-muted-foreground/70 data-[type=literal]:text-muted-foreground/70 data-[disabled]:opacity-50'
                     />
                  )}
               </DateInput>
               <span aria-hidden='true' className='px-2 text-muted-foreground/70'>
                  -
               </span>
               <DateInput slot='end'>
                  {(segment) => (
                     <DateSegment
                        segment={segment}
                        className='inline rounded p-0.5 text-foreground caret-transparent outline outline-0 data-[disabled]:cursor-not-allowed data-[focused]:bg-accent data-[invalid]:data-[focused]:bg-destructive data-[type=literal]:px-0 data-[focused]:data-[placeholder]:text-foreground data-[focused]:text-foreground data-[invalid]:data-[focused]:data-[placeholder]:text-destructive-foreground data-[invalid]:data-[focused]:text-destructive-foreground data-[invalid]:data-[placeholder]:text-destructive data-[invalid]:text-destructive data-[placeholder]:text-muted-foreground/70 data-[type=literal]:text-muted-foreground/70 data-[disabled]:opacity-50'
                     />
                  )}
               </DateInput>
            </Group>
            <Button className='z-10 -me-px -ms-9 flex w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:outline-none data-[focus-visible]:border data-[focus-visible]:border-ring data-[focus-visible]:text-foreground data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:ring-offset-2'>
               <CalendarIcon size={16} strokeWidth={2} />
            </Button>
         </div>
         <Popover
            className='z-50 rounded-lg border border-input bg-background text-popover-foreground shadow-lg shadow-black/5 outline-none data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2'
            offset={4}
         >
            <Dialog className='max-h-[inherit] overflow-auto p-2'>
               <RangeCalendar className='w-fit'>
                  <header className='flex w-full items-center gap-1 pb-1'>
                     <Button
                        slot='previous'
                        className='flex size-9 items-center justify-center rounded-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground focus-visible:outline-none data-[focus-visible]:border data-[focus-visible]:border-ring data-[focus-visible]:text-foreground data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:ring-offset-2'
                     >
                        <ChevronLeft size={16} strokeWidth={2} />
                     </Button>
                     <Heading className='grow text-center text-sm font-medium' />
                     <Button
                        slot='next'
                        className='flex size-9 items-center justify-center rounded-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground focus-visible:outline-none data-[focus-visible]:border data-[focus-visible]:border-ring data-[focus-visible]:text-foreground data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:ring-offset-2'
                     >
                        <ChevronRight size={16} strokeWidth={2} />
                     </Button>
                  </header>
                  <CalendarGrid>
                     <CalendarGridHeader>
                        {(day) => (
                           <CalendarHeaderCell className='size-9 rounded-lg p-0 text-xs font-medium text-muted-foreground/80'>
                              {day}
                           </CalendarHeaderCell>
                        )}
                     </CalendarGridHeader>
                     <CalendarGridBody className='[&_td]:px-0'>
                        {(date) => (
                           <CalendarCell
                              date={date}
                              className={cn(
                                 'relative flex size-9 items-center justify-center whitespace-nowrap rounded-lg border border-transparent p-0 text-sm font-normal text-foreground ring-offset-background duration-150 [transition-property:border-radius,box-shadow] focus-visible:outline-none data-[disabled]:pointer-events-none data-[unavailable]:pointer-events-none data-[focus-visible]:z-10 data-[selected]:rounded-none data-[selection-end]:rounded-e-lg data-[selection-start]:rounded-s-lg data-[focus-visible]:border-ring data-[hovered]:bg-accent data-[invalid]:bg-red-100 data-[selected]:bg-accent data-[hovered]:text-foreground data-[selected]:text-foreground data-[unavailable]:line-through data-[disabled]:opacity-30 data-[unavailable]:opacity-30 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:ring-offset-2 data-[invalid]:data-[selection-end]:[&:not([data-hover])]:bg-destructive data-[invalid]:data-[selection-start]:[&:not([data-hover])]:bg-destructive data-[selection-end]:[&:not([data-hover])]:bg-primary data-[selection-start]:[&:not([data-hover])]:bg-primary data-[invalid]:data-[selection-end]:[&:not([data-hover])]:text-destructive-foreground data-[invalid]:data-[selection-start]:[&:not([data-hover])]:text-destructive-foreground data-[selection-end]:[&:not([data-hover])]:text-primary-foreground data-[selection-start]:[&:not([data-hover])]:text-primary-foreground',
                                 date.compare(now) === 0 &&
                                    'after:pointer-events-none after:absolute after:bottom-1 after:start-1/2 after:z-10 after:size-[3px] after:-translate-x-1/2 after:rounded-full after:bg-primary data-[selection-end]:[&:not([data-hover])]:after:bg-background data-[selection-start]:[&:not([data-hover])]:after:bg-background'
                              )}
                           />
                        )}
                     </CalendarGridBody>
                  </CalendarGrid>
               </RangeCalendar>
            </Dialog>
         </Popover>
      </DateRangePicker>
   );
}
