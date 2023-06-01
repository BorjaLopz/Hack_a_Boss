import { useEffect, useState } from "react";

function Form() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const handleChange = ({ target }) => {
    setFile(target.value);
    //Aqui haremos el preview de la imagen en el icono
    setResult(null);

    setPreviewURL(URL.createObjectURL(target.files[0]));
  };
  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target); //Aqui le estamos pasando todo el formulario completo, incluida la imagen
      //formData.append("myFile", file); //Esta es lo mismo que arriba, pero mas largo y mas tedioso. Ademas puede dar lugar a equivocos, por lo que es recomendable la opcion de arriba.

      // console.log(Object.fromEntries(formData)) //Asi vemos que archivo le hemos pasado.

      //Si hay fichero, hacemos la llamada a la API
      if (file) {
        const res = await fetch("http://localhost:3000/upload", {
          "Content-type": "multipart/form-data",
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          console.log("Upload ok");
          const data = await res.json();
          console.log(data);
          setResult(data);
        } else {
          setResult("Error");
        }
      } else {
        alert("Selecciona un archivo primero");
      }
    } catch (e) {
      throw new Error(`Error: ${error}`);
    }
  };

  // useEffect(() => console.log(file), [file]);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setResult(data.data);
      });
  }, []);

  return (
    <>
      <form onSubmit={handleUpload}>
        <div className="col-span-full">
          <label
            htmlFor="photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Photo
          </label>
          <div className="mt-2 flex items-center gap-x-3">
            {previewURL ? (
              <img src={previewURL} alt="FotoPrueba" className="h-12 w-12" />
            ) : (
              <svg
                className="h-12 w-12 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <input
              type="file"
              name="myFile"
              id="file-upload"
              className="block"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Enviar
            </button>
          </div>
          <div>{result && <p>{result.data}</p>}</div>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {result &&
                  result.map((file) => (
                    <div key={file} className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          src={`http://localhost:3000/uploads/${file}`}
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>

        {/* <div className="col-span-full">
          <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
              </svg>
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div> */}
      </form>
    </>
  );
}

export default Form;
