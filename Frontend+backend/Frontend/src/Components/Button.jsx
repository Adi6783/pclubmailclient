
export function Button({label, onClick}) {
    return <button onClick={onClick} type="button" class=" text-white bg-gray-800  focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}</button>
}
  