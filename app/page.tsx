import TodoList from "./components/todolist";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-50">
      <TodoList />
    </main>
  );
}
