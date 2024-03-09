'use client'

import { useRouter } from 'next/navigation';

export default function Test() {
    const router = useRouter();

    const navigateToRoute = () => {
        router.push('/'); // replace '/your-route' with your desired route
    }

    return(
        <>
            <h1 className=" text-center text-4xl">Test</h1>
            <button onClick={navigateToRoute} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
        </>
    )
}