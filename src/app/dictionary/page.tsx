import { loadMbtiData } from "../actions/mbti.actions"

export default async function Dictionary() {

    const mbtiList = await loadMbtiData();

    return (
        <div className=" p-16">
            <h1 className="text-2xl font-bold mb-8">모든 MBTI</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {mbtiList.map((e) => (
                    <div key={e.mbti} className="flex flex-col place-content-center text-center bg-subColor rounded-2xl p-10 gap-4">
                        <p className="text-primary font-bold text-2xl">{e.mbti}</p>
                        <p className="text-grayscale font-bold text-lg">{e.type}</p>
                        <p className="text-sm">{e.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
