export default function ProjectsNamePage({ params }: any) {
  return (
    <main>
      <h1>Project Name: {params.name}</h1>
      <p>Project description</p>
    </main>
  );
}
