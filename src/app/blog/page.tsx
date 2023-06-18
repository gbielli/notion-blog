import CategoryFilter from '@/components/filter/category-filter';
import SearchBar from '@/components/filter/search-bar';
import PostsGrid from '@/components/posts/posts-grid';
import { getAllPostsFromNotion } from '@/services/posts';
import { toUniqueArray } from '@/utils/to-unique-array';

export const metadata = {
  title: 'Blog',
  description: 'All posts are created by notion ai.',
};

export default async function BlogPage() {
  const allPosts = await getAllPostsFromNotion();

  const allCategories = toUniqueArray(
    allPosts
      .filter((post) => post.published)
      .map((post) => post.categories)
      .flat()
  ).sort();

  return (
    <>
    <div className="max-w-xl mx-auto">
    <div className="flex flex-col gap-3 mx-auto text-center">
      <img src="https://static.vecteezy.com/system/resources/previews/009/339/329/original/chicken-egg-raw-free-png.png" className="mx-auto" width={300} height={400} alt="" />
      <h1 className="text-5xl font-bold">il était une fois, <span className="text-indigo-600">un chauve</span> qui écrivait pour les chauves.</h1>
      <h2>Se raser le crâne, c'est tout un art. Je suis rasé depuis plus de 5 ans et je te partage mes meilleures astuces pour que ton crâne brille de mille feux.</h2>
      <div className="inline-block">

      <button className="px-5 py-2 py-3 bg-indigo-600 rounded-lg text-white">Mes derniers articles</button>
      </div>
    </div>
  </div>
      <section className="mb-16 mt-0 space-y-8 md:mt-20">
        <SearchBar />
        <CategoryFilter allCategories={allCategories} />
      </section>
      <PostsGrid allPosts={allPosts} />
    </>
  );
}
