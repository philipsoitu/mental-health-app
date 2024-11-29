import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function CrisisSupport() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Crisis Support & Resources</h1>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Emergency Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Telus Health Crisis Line: <a href="tel:18886617171" className="text-blue-600 underline">1-888-661-7171</a></li>
                        <li>McGill Wellness Hub: <a href="tel:5143986017" className="text-blue-600 underline">514-398-6017</a></li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>McGill Wellness Hub</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">The Wellness Hub offers a range of health services for McGill students.</p>
                    <Link href="/wellness-hub-info">
                        <Button>Learn More</Button>
                    </Link>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>FAQs</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>How do I book an appointment?</li>
                        <li>What services are available?</li>
                        <li>Is there a cost for services?</li>
                    </ul>
                    <Link href="/faqs" className="mt-4 inline-block">
                        <Button>View All FAQs</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}

