'use client';

import { useState } from "react";
import Button from "../Button";
import { fetcher } from "@/lib/fetcher";


export default function SendForm() {
  const [message, setMessage] = useState<string>('');

  function sendMessage(message: string): void {
    fetcher('/api/message', {
      method: 'POST',
      body: JSON.stringify({ message: message }),
    });
  }

  return (
    <>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <Button name="Send message" onClick={() => sendMessage(message)}>
        Отправить
      </Button>
    </>);
}
