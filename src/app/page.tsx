import React from "react";
import QRCode from "react-qr-code";
import { randomUUID } from "crypto";

export default function Home() {
  const data = {
    boardID: randomUUID(),
  };

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <QRCode value={JSON.stringify(data)} />
    </main>
  );
}
