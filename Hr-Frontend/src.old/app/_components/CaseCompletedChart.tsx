'use client';

import { Briefcase } from 'lucide-react';
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';

export const description = 'A radial chart with text';

const chartData = [{ browser: 'safari', cases: 324, fill: 'var(--color-safari)' }];

const chartConfig = {
   visitors: {
      label: 'cases'
   },
   safari: {
      label: 'Safari',
      color: '#3b82f6'
   }
} satisfies ChartConfig;

const CaseCompletedChart = () => {
   return (
      <Card className='flex flex-col h-full'>
         <CardHeader className='items-center pb-0'>
            <CardTitle>القضايا المكتملة</CardTitle>
            <CardDescription>June-2024</CardDescription>
         </CardHeader>
         <CardContent className='flex-1 pb-0'>
            <ChartContainer config={chartConfig} className='mx-auto aspect-square max-h-[250px]'>
               <RadialBarChart data={chartData} startAngle={0} endAngle={250} innerRadius={80} outerRadius={110}>
                  <PolarGrid
                     gridType='circle'
                     radialLines={false}
                     stroke='none'
                     className='first:fill-muted last:fill-background z-auto'
                     polarRadius={[86, 74]}
                  />
                  <RadialBar dataKey='cases' background cornerRadius={10} />
                  <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                     <Label
                        content={({ viewBox }) => {
                           if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                              return (
                                 <text x={viewBox.cx} y={viewBox.cy} textAnchor='middle' dominantBaseline='middle'>
                                    <tspan x={viewBox.cx} y={viewBox.cy} className='fill-foreground text-4xl font-bold'>
                                       {chartData[0].cases.toLocaleString()}
                                    </tspan>
                                    <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className='fill-muted-foreground'>
                                       القضايا
                                    </tspan>
                                 </text>
                              );
                           }
                        }}
                     />
                  </PolarRadiusAxis>
               </RadialBarChart>
            </ChartContainer>
         </CardContent>
         <CardFooter className='flex-col gap-2 text-sm'>
            <div className='flex items-center gap-2 font-medium leading-none'>
               القضايا المكتملة لهذا الشهر <Briefcase className='h-4 w-4 text-blue-500' />
            </div>
            {/* <div className='leading-none text-muted-foreground'>Showing total visitors for the last 6 months</div> */}
         </CardFooter>
      </Card>
   );
};

export default CaseCompletedChart;
