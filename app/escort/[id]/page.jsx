'use client'

import React from 'react';
import { useParams } from 'next/navigation';

export default function EscortProfile() {
  const params = useParams();
  const id = params?.id || 'unknown';
  return (
    <main style={{ padding: 20 }}>
      <h1>Escort Profile: {id}</h1>
      <p>Profile details would go here.</p>
    </main>
  );
}
