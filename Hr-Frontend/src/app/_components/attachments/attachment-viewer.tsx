import { Button } from '@/components/ui/button';
import { attachmentService } from '@/services/system-settings/attachment.service';
import { Eye } from 'lucide-react';
import React from 'react';

type Props = {
   AttachmentId: string;
   employeeId: string;
};

const AttachmentViewer = ({ AttachmentId, employeeId }: Props) => {
   const showImage = async () => {
      try {
         // Fetch attachment data
         const response = await attachmentService.getAttachmentById(AttachmentId, employeeId);

         const { fileBase64, extinctionFile } = response.data;

         // Decode the base64 file data
         const byteCharacters = atob(fileBase64);
         const byteNumbers = new Array(byteCharacters.length);
         for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
         }
         const byteArray = new Uint8Array(byteNumbers);

         // Create a Blob from the byte array
         const blob = new Blob([byteArray], {
            type: extinctionFile === '.pdf' ? 'application/pdf' : `image/${extinctionFile.replace('.', '').toLowerCase()}`
         });

         // Generate a URL for the Blob
         const blobUrl = URL.createObjectURL(blob);

         // Open the Blob URL in a new window
         window.open(blobUrl);
      } catch (error) {
         console.error('Error fetching or displaying image:', error);
      }
   };

   return (
      <div>
         <Button variant='link' size='icon' onClick={() => showImage()}>
            <Eye size={24} />
         </Button>
      </div>
   );
};

export default AttachmentViewer;
