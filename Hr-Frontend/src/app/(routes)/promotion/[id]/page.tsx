import { redirect } from 'next/navigation';

interface Props {
    params: {
        id: string;
    };
}

export default function PromotionDetailsRedirect({ params }: Props) {
    redirect(`/promotion?employeeId=${params.id}`);
}
