// src/components/TestPreview.tsx
import React from 'react';

export default function TestPreview() {
  return (
    <section style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2>🧪 Composant de Test</h2>
      <p>Ceci est un composant généré pour vérifier le pipeline.</p>
      <button style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Clique-moi
      </button>
    </section>
  );
}
