import { useState } from 'react'
import "./App.css"
import useGetProducts from './hooks/getProducts/useGetProducts';


function App() {

  const products = useGetProducts();

  //Renderizamos los elementos
  return (
    <>
      <h1 className="text-center text-3xl font-bold py-10">Productos</h1>

      {/* <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="m-4 p-4 bg-white rounded-lg drop-shadow-lg grow flex  border-2"
            >
              <img
                className="w-40 place-self-center"
                src={p.image}
                alt={p.title}
              />
              <div className="card-body p-2 max-w-fit">
                <h2 className="text-2xl font-bold text-center">{p.title}</h2>
                <p>{p.description}</p>
                <p className="text-right text-2xl font-bold italic">
                  {p.price + " €"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((p) => (
              <div
                key={p.id}
                className="border-2 drop-shadow-lg grid place-content-center"
              >
                <img
                  className="w-40 place-self-center p-3"
                  src={p.image}
                  alt={p.title}
                />
                <p className="p-3 font-bold text-center text-xl">{p.title}</p>
                <p className="p-3">{p.description}</p>
                <p className="p-3 text-right font-bold text-xl">{p.price + " €"}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App
