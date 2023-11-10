import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="flex flex-col bg-primary p-16 space-y-10 place-items-center text-center">
        <div className='rounded-3xl bg-white p-4  w-fit'>
          <Image src="/avatar.svg" alt="avatar" width="300" height="300" />
        </div >
        <div className="flex flex-col bg-primary">
          <p className='text-white text-3xl font-bold mb-4'>당신의 MBTI는?</p>
          <p className='text-grayscale text-lg'>내 엠비티아이는 뭘까?</p>
          <p className='text-grayscale text-lg'>간단한 테스트를 통해 알아보자!</p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row place-items-center justify-center gap-8 m-10 text-center'>
        <Link href='/test' className='bg-primary px-20 py-4 rounded-2xl text-white font-bold w-fit shadow-lg'>테스트 하러 가기</Link>
        <Link href='/dictionary' className='bg-grayscale px-20 py-4 rounded-2xl font-bold w-fit shadow-lg'>MBTI 백과사전</Link>
      </div>
    </div>
  )
}