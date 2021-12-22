

const Navbar = () => {
  return (
   <ul className="">
     {[1,2,3,4,5].map(item => (
        <li className="h-10 w-10 rounded-full cursor-pointer bg-gray-600 relative my-3 mt-2 hover:w-28"></li>
     ))}
   </ul>
  )
}

export default Navbar