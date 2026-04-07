export default function ProductCard({ title, price, image, category }) {
  return (
    <article className="flex flex-col rounded-lg border bg-white p-4 shadow-sm transition-transform hover:shadow-md hover:scale-105">
      <div className="flex h-40 items-center justify-center">
        <img src={image} alt={title} className="max-h-40 object-contain" />
      </div>
      <div className="mt-3 flex flex-1 flex-col">
        <h3 className="text-sm font-semibold text-zinc-900 line-clamp-2">{title}</h3>
        <p className="mt-1 text-xs text-zinc-500">{category}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-zinc-900">${price}</span>
        </div>
      </div>
    </article>
  );
}
