export const metadata = {
  title: 'Welcome | Le mec rasoir',
};

export default function HomePage() {
  return (
  <div className="max-w-xl mx-auto">
    <div className="flex flex-col gap-3 mx-auto text-center">
      <img src="" className="mx-auto" width={300} height={400} alt="" />
      <h1 className="text-5xl font-bold">il était une fois, <span className="text-indigo-600">un chauve</span> qui écrivait pour les chauves.</h1>
      <h2>Se raser le crâne, c&apos;est tout un art. Je suis rasé depuis plus de 5 ans et je te partage mes meilleures astuces pour que ton crâne brille de mille feux. </h2>
      <div className="inline-block">
      <button className="px-5 py-2 py-3 bg-indigo-600 rounded-lg text-white">Mes derniers articles</button>
      </div>
    </div>
  </div>
  )
}
