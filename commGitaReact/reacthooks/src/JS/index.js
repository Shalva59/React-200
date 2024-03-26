import React , {useState ,useEffect, useCallback}  from 'react'

const Index = () => {

const [products  ,setProducts] = useState([]);
const [loading , setLoading] = useState(false);
const [createCall  ,setCreateCall] = useState(false);


useEffect(()=>
{
  try
  {
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then((data)=>
    {
      setProducts(data);
      setLoading(true);
    })
  }
  catch(error)
  {
    console.log(error)
  }
},[])


console.log(products)

const handleClick = useCallback(()=>
{
  setCreateCall(true);
},[loading]);

  return (
    <div>
      <button >Click me</button>
    </div>
  )
}

export default Index
