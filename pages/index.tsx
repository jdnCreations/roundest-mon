export default function Home() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center max-w-2xl items-center'>
      <div className=' text-2xl text-center'>Which Pokemon is Rounder?</div>
      <div className='p-2'></div>
      <div className='border rounded p-8 flex justify-between'>
        <div className='w-16 h-16 bg-red-200'></div>
        <div className='p-8'>Vs</div>
        <div className='w-16 h-16 bg-red-200'></div>
      </div>
    </div>
  );
}
