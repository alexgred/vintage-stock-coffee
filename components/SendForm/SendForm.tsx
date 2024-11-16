'use client';

import { useState } from 'react';
import Button from '../Button';
import { fetcher } from '@/lib/fetcher';

export default function SendForm({ userId, closeForm }: { userId: number, closeForm: () => void }) {
  const [message, setMessage] = useState<string>('');

  async function sendMessage(userId: number, message: string): Promise<void> {
    await fetcher('/api/message', {
      method: 'POST',
      body: JSON.stringify({ message: message, userId: userId }),
    });

    closeForm();
  }

  return (
    <>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <Button name="Send message" onClick={() => sendMessage(userId, message)}>
        Отправить
      </Button>
    </>
  );
}
