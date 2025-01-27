import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-4xl font-bold">Posts Page</h1>
        <p className="mt-4">
          This is the Posts page. Explore all the posts here!
        </p>
      </main>
    </div>
  );
};

export default Posts;
