import { BlogBox } from "./BlogContent/BlogBox";
export function IndexPage() {
  return (
    <>
      <div className="w-4/5  mr-auto ml-auto ">
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
      </div>
    </>
  );
}
