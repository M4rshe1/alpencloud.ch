import QuestionAndAnswers from "@/components/qna";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Alpencloud - Fragen und Antworten',
    description: 'Häufig gestellte Fragen zu Alpencloud',
}

const Page = () => {
    return (
            <QuestionAndAnswers/>
    )
}

export default Page;