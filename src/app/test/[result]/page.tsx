import Link from "next/link";
import { getMyMbti } from "../../actions/mbti.actions"
import Image from 'next/image'

export default async function Result({ params }: { params: { result: string } }) {

    const resultMbti = await getMyMbti(params.result);

    return (
        <div className="flex flex-col text-center place-items-center">
            <Image className="w-full h-full" src="/result_bg.svg" alt="result_bg" width="100" height="100" />
            <div className="p-16 absolute flex flex-col w-full gap-2 items-center top-40 2xl:top-96 xl:top-80 lg:top-72 md:top-64 sm:top-48">
                <p className="text-lg">내 결과는?</p>
                <p className="text-4xl font-bold ">{resultMbti?.type}</p>
                <p className="text-4xl font-bold text-primary">{resultMbti?.mbti}</p>
                <Image className="my-10" src="/result.svg" alt="result" width="150" height="150" />
                <p className="font-bold text-lg">{resultMbti?.description}</p>
                <div className='flex flex-col md:flex-row place-items-center justify-center gap-8 m-10 text-center'>
                    <Link href='/' className='bg-primary px-20 py-4 rounded-2xl text-white font-bold w-[320px] shadow-lg flex-1'>다시 테스트 하기</Link>
                    <Link href='/dictionary' className='bg-grayscale px-20 py-4 rounded-2xl font-bold w-[320px] shadow-lg flex-1'>더 많은 MBTI 보러가기</Link>
                </div>
            </div>
        </div>
    )
}