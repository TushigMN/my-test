"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Button from "./Button";

export default function ProductGrid() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const API = "https://fakestoreapi.com/products";

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error("Network response was not ok");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Failed to fetch products", err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = data.filter((p) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  });

  return (
    <section className="w-full">
      <div className="mb-6 flex w-full items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => fetchProducts()}>
            {loading ? "Loading..." : "Reload"}
          </Button>
        </div>
      </div>

      {loading && data.length === 0 ? (
        <p className="text-sm text-zinc-500">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
              category={p.category}
            />
          ))}
        </div>
      )}

      {!loading && filtered.length === 0 && (
        <p className="mt-4 text-sm text-zinc-500">No products found.</p>
      )}
    </section>
  );
}
