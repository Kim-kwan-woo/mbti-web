'use client';
import { loadQuestionData } from "../actions/question.actions";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useSWR from "swr"
import Loading from "./loading";
import Error from "./error";
import Image from 'next/image'

export default function Test() {
    const { data: questionList, isLoading, error } = useXXX();
    const [questionIndex, setIndex] = useState(0);
    const [answers] = useState(Array.from({ length: 10 }, _ => Array(7).fill(null)));
    const router = useRouter();

    const nextQuestion = (answer: string) => {
        if (questionIndex === 69) {
            router.push(`/test/${getMyMbti()}`)
        } else {
            recordAnswer(Math.floor(questionIndex / 7), questionIndex % 7, answer)
            //getMyMbti();
            setIndex(questionIndex + 1);
        }
    }

    const handleProgress = () => {
        return ((questionIndex + 1) / 70) * 100
    }

    const recordAnswer = (row: number, col: number, answer: string) => {
        answers[row][col] = answer;
    }

    const getMyMbti = () => {
        let mbtiScores = {
            'eScore': 0,
            'iScore': 0,
            'sScore': 0,
            'nScore': 0,
            'tScore': 0,
            'fScore': 0,
            'jScore': 0,
            'pScore': 0,
        };

        let ei, sn, tf, jp;

        for (let i = 0; i < answers.length; i++) {
            for (let j = 0; j < answers[i].length; j++) {
                if (answers[i][j] == "a") {
                    switch (j % 7) {
                        case 0:
                            mbtiScores['eScore'] = mbtiScores['eScore']! + 1;
                        case 1 || 2:
                            mbtiScores['sScore'] = mbtiScores['sScore']! + 1;
                        case 3 || 4:
                            mbtiScores['tScore'] = mbtiScores['tScore']! + 1;
                        case 5 || 6:
                            mbtiScores['jScore'] = mbtiScores['jScore']! + 1;
                    }
                } else {
                    switch (j % 7) {
                        case 0:
                            mbtiScores['iScore'] = mbtiScores['iScore']! + 1;
                        case 1 || 2:
                            mbtiScores['nScore'] = mbtiScores['nScore']! + 1;
                        case 3 || 4:
                            mbtiScores['fScore'] = mbtiScores['fScore']! + 1;
                        case 5 || 6:
                            mbtiScores['pScore'] = mbtiScores['pScore']! + 1;
                    }
                }
            }
        }
        console.log(answers);

        ei = (mbtiScores['eScore']! > mbtiScores['iScore']!) ? 'E' : 'I';
        sn = (mbtiScores['sScore']! > mbtiScores['nScore']!) ? 'S' : 'N';
        tf = (mbtiScores['tScore']! > mbtiScores['fScore']!) ? 'T' : 'F';
        jp = (mbtiScores['jScore']! > mbtiScores['pScore']!) ? 'J' : 'P';

        return ei + sn + tf + jp;
    }

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <div className="flex flex-col px-16 place-items-center">
            <div className="w-full bg-grayscale rounded-lg h-8 my-8">
                <div className="flex h-8 bg-primary rounded-lg" style={{ 'width': `${handleProgress()}%` }}></div>
            </div>
            <p className="mb-16 font-bold">{questionIndex + 1} / 70</p>
            <Image src="/person.svg" alt="avatar" width="150" height="150" />
            <p className="text-center text-2xl font-bold mb-16 mt-2">{questionList![questionIndex]!.question}</p>
            <div className="flex flex-col md:flex-row gap-4 w-full">
                <button onClick={() => nextQuestion('a')} className="p-10 bg-subColor border-solid border-4 border-primary rounded-xl flex-1">
                    {questionList![questionIndex]!.options[0]}
                </button>
                <button onClick={() => nextQuestion('b')} className="p-10 bg-subColor border-solid border-4 border-primary rounded-xl flex-1">
                    {questionList![questionIndex]!.options[1]}
                </button>
            </div>
        </div>
    )
}

const useXXX = () => {
    const { data, isValidating, error } = useSWR<{
        index: number;
        question: string;
        options: string[];
    }[]>(
        'key', async () => {
            const res = await loadQuestionData();
            return res;
        },
        { revalidateOnFocus: false },
    );

    return {
        data,
        isLoading: isValidating,
        error,
    }
}
