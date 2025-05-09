'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { AlignJustify, Edit2, X } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface Todo {
   id: number;
   title: string;
   date: string;
   completed: boolean;
}

type Props = {
   todoData: Todo[];
   className?: string;
};

const TodoList = ({ todoData, className }: Props) => {
   const [todos, setTodos] = useState<Todo[]>(todoData);
   const [newTodo, setNewTodo] = useState('');
   const [searchQuery, setSearchQuery] = useState('');

   const addTodo = () => {
      if (newTodo.trim()) {
         setTodos([
            ...todos,
            {
               id: todos.length + 1,
               title: newTodo,
               date: new Date().toLocaleDateString('en-GB'),
               completed: false
            }
         ]);
         setNewTodo('');
      }
   };

   const toggleTodo = (id: number) => {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
   };

   const deleteTodo = (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };

   const filteredTodos = todos?.filter((todo) => todo.title.toLowerCase().includes(searchQuery.toLowerCase())) || [];

   return (
      <div className={cn('w-full bg-white dark:bg-gray-900 p-4 h-[400px] overflow-auto', className)}>
         <div className='flex gap-2 my-4'>
            <Input
               placeholder='اظف للقيام بذلك ...'
               value={newTodo}
               onChange={(e) => setNewTodo(e.target.value)}
               onKeyDown={(e) => {
                  if (e.key === 'Enter') addTodo();
               }}
            />
            <Button onClick={addTodo}>حفظ</Button>
         </div>

         <Tabs defaultValue='todo' className='w-full'>
            <div className='flex justify-between items-center'>
               <TabsList>
                  <TabsTrigger value='todo'>للقيام بذلك</TabsTrigger>
                  <TabsTrigger value='done'>مكتمل</TabsTrigger>
               </TabsList>
               <Input placeholder='بحث ...' className='max-w-xs' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>

            <TabsContent value='todo' className='mt-4'>
               <TodoTable todos={filteredTodos.filter((todo) => !todo.completed)} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            </TabsContent>

            <TabsContent value='done' className='mt-4'>
               <TodoTable todos={filteredTodos.filter((todo) => todo.completed)} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            </TabsContent>
         </Tabs>

         <div className='flex items-center justify-between text-sm text-muted-foreground'>
            <div>{filteredTodos.length > 0 ? `1-${filteredTodos.length} / ${filteredTodos.length}` : '0-0 / 0'}</div>
            <div className='flex gap-2'>
               <Button variant='ghost' size='sm' disabled>
                  {'<'}
               </Button>
               <Button variant='ghost' size='sm' disabled>
                  {'>'}
               </Button>
            </div>
         </div>
      </div>
   );
};

function TodoTable({
   todos,
   toggleTodo,
   deleteTodo
}: {
   todos: Todo[];
   toggleTodo: (id: number) => void;
   deleteTodo: (id: number) => void;
}) {
   return (
      <ScrollArea className='w-full overflow-scroll '>
         <Table>
            <TableHeader>
               <TableRow>
                  <TableHead className='w-12'></TableHead>
                  <TableHead>العنوان</TableHead>
                  <TableHead>التاريخ</TableHead>
                  <TableHead className='w-24'>
                     <AlignJustify />
                  </TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {todos.map((todo) => (
                  <TableRow key={todo.id}>
                     <TableCell>
                        <Checkbox checked={todo.completed} onCheckedChange={() => toggleTodo(todo.id)} />
                     </TableCell>
                     <TableCell>{todo.title}</TableCell>
                     <TableCell>{todo.date}</TableCell>
                     <TableCell>
                        <div className='flex gap-2'>
                           <Button variant='ghost' size='icon'>
                              <Edit2 className='h-4 w-4' />
                           </Button>
                           <Button variant='ghost' size='icon' onClick={() => deleteTodo(todo.id)}>
                              <X className='h-4 w-4' />
                           </Button>
                        </div>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </ScrollArea>
   );
}

export default TodoList;
