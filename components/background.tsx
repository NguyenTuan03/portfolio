/** Các quầng gradient mờ cố định phía sau nội dung, giống nền của thiết kế mẫu. */
export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="blob left-[-10%] top-[2%] size-72 bg-accent md:size-[26rem]" />
      <div className="blob right-[-12%] top-[22%] size-72 bg-accent-2 md:size-[30rem]" />
      <div className="blob bottom-[8%] left-[-8%] size-72 bg-accent-2 md:size-[28rem]" />
      <div className="blob bottom-[-6%] right-[-10%] size-72 bg-accent md:size-[26rem]" />
    </div>
  );
}
