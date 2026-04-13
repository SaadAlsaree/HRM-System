'use client';

import { useState } from 'react';
import { Autocomplete } from '@/components/autocomplete';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface User {
   id: number;
   name: string;
   email: string;
   username: string;
}

export default function PenaltiesToolbar() {
   const [selectedUser, setSelectedUser] = useState<User | null>(null);

   const searchUsers = async (query: string): Promise<User[]> => {
      if (!query) return [];

      const response = await fetch(`https://jsonplaceholder.typicode.com/users?q=${encodeURIComponent(query)}`);
      if (!response.ok) {
         throw new Error('Failed to fetch users');
      }
      return response.json();
   };

   return (
      <div className='container mx-auto p-4'>
         <h1 className='text-3xl font-bold mb-8'>JSONPlaceholder User Search</h1>

         <Card>
            <CardHeader>
               <CardTitle>User Search</CardTitle>
               <CardDescription>Search for users from JSONPlaceholder API</CardDescription>
            </CardHeader>
            <CardContent>
               <Autocomplete
                  // items={[]}
                  onSearch={searchUsers}
                  getItemValue={(user) => user.name}
                  renderItem={(user, isHighlighted) => (
                     <div className={isHighlighted ? 'font-bold' : ''}>
                        <div>{user.name}</div>
                        <div className='text-sm text-gray-500'>{user.email}</div>
                     </div>
                  )}
                  onSelect={(user) => setSelectedUser(user)}
                  placeholder='Search users...'
               />
               {selectedUser && (
                  <div className='mt-4'>
                     <p className='font-bold'>Selected User:</p>
                     <p>Name: {selectedUser.name}</p>
                     <p>Email: {selectedUser.email}</p>
                     <p>Username: {selectedUser.username}</p>
                  </div>
               )}
            </CardContent>
         </Card>
      </div>
   );
}
