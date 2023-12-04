import { notFound } from "next/navigation";

/**
 * screen for onl admin 
 * 
 */
interface Props{
  params:{
    id:string;
  }
}

export default function ({params}:Props) {
  const {id}=params;

  if(id==='kids'){
    notFound();
  }

  return (
    <div>
      <h1>Hello category page</h1>
    </div>
  );
}