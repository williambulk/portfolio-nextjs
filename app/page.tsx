import Button from './components/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row justify-center items-center gap-x-2 p-24">
      <Button defaultText="Button 1" />
      <Button defaultText="Button 2" />
      <Button defaultText="Button 3" />
    </main>
  );
}
