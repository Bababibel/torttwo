export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-screen">
      <header className="h-10 bg-main text-white flex">
        <h1>Synopsys</h1>
        <h2>🐢 TortTwo</h2>
      </header>
      <main className="h-full w-full">
        { props.children }
      </main>
    </div>
  )
}
