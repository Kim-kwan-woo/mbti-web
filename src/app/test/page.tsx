'use client';
import { loadQuestionData } from "../actions/question.actions";
import { useState } from 'react';
import useSWR from "swr"
import Loading from "./loading";
import Error from "./error";
import Image from 'next/image'

export default function Test() {
    const { data: questionList, isLoading, error } = useXXX();

    const [questionIndex, setIndex] = useState(0);

    const nextQuestion = () => {
        setIndex(questionIndex + 1);
    }

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <div className="flex flex-col px-16 place-items-center">
            <p className="mb-16 font-bold">{questionIndex + 1} / 70</p>
            <Image src="/person.svg" alt="avatar" width="200" height="200" />
            <p className="text-center text-2xl font-bold mb-16">{questionList![questionIndex]!.question}</p>
            <div className="flex flex-col md:flex-row gap-4 w-full">
                <button onClick={nextQuestion} className="p-10 bg-subColor border-solid border-4 border-primary rounded-xl flex-1">
                    {questionList![questionIndex]!.options[0]}
                </button>
                <button onClick={nextQuestion} className="p-10 bg-subColor border-solid border-4 border-primary rounded-xl flex-1">
                    {questionList![questionIndex]!.options[1]}
                </button>
            </div>
        </div>
    )
}

export const useXXX = () => {
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
