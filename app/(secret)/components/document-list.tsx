"use client"
import React from 'react'
import { Id } from '@/convex/_generated/dataModel'
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';

interface DocumentListProps {
    parentDocumentId?: Id<"documents">;
    level?: number;
}

export const DocumentList = ({parentDocumentId, level}: DocumentListProps) => {
  const documents = useQuery(api.document.getDocuments, {
    parentDocument: parentDocumentId
  })
  // console.log(documents);
  
  return (
    <div>DocumentList</div>
  )
}
