"use client";

import ExampleServer from "./ExampleServer";

export default function ExampleClient() {
  console.log("I am a client component.");
  return (
    <div className="bg-blue-500 text-white p-4">
      <h1>Example Client</h1>
      <p className="text-lg">This is an example of a client component.</p>
      <ExampleServer />
    </div>
  );
}
