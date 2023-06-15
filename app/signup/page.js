export default function Signup() {
  return (
    <div className="p-20">
      <form action="/api/signup" method="POST">
        <input name="id" placeholder="id" />
        <input name="password" placeholder="password" />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
