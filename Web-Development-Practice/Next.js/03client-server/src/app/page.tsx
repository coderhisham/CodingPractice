import ExampleClient from "@/components/ExampleClient";
import ExampleServer from "@/components/ExampleServer";

export default function Home() {
  console.log("Where do I render?");

  return (
    <main>
      <h2>Welcome</h2>
      <ExampleClient />{" "}
      {/*will be prerendered on the server but server components will be done first*/}
    </main>
  );
}
