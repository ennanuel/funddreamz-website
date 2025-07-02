

const EXPLANATIONS = [
    {
        title: "What’s a transaction fee?",
        description: "Safe and secure fundraising is our top priority. That’s why we partner with industry-leading payment processors like PayPal to accept and deliver your donations. \n\nThe transaction fee is automatically deducted from each donation. It covers the costs of credit, debit, and ACH charges, safely delivering donations, and helps us offer more ways to donate—through credit, ACH, debit, PayPal, Apple Pay, or Google Pay. This is the only fee deducted for someone starting a fundraiser on FundDreamz and helps power all your fundraising needs."
    },
    {
        title: "Donor contributions to FundDreamz are always optional",
        description: "It’s important to us that everyone is able to get the help they need—which is why we don’t charge a fee to start a fundraiser. Instead, we accept optional contributions from donors that are always appreciated, but never required. Donor contributions help make it possible for us to offer powerful and trusted fundraising tools, customer support, and a global team of Trust & Safety experts.",
    },
    {
        title: "Is there a fee for donors who make recurring donations?",
        description: "Supporters who choose to make a recurring donation to an individual or charity on FundDreamz pay a 5% fee per donation to help support this feature. This fee does not apply to recurring donations made through FundDreamz Pro."
    },
    {
        title: "What are FundDreamz Pro’s costs and fees?",
        description: "FundDreamz Pro offers custom pricing based on your organization’s unique needs. Standard processing fees apply—typically 2.2%–2.5% + $0.30 per transaction, with a 1% additional fee for American Express. \n\nExclusively for nonprofits, FundDreamz Pro offers powerful tools for direct giving, peer-to-peer, live events, and more to help you raise more and reach supporters everywhere."
    }
];

export default function Explanations() {

    return (
        <div className="bg-white px-10">
            <section className="mx-auto max-w-lg w-full py-10">
                {
                    EXPLANATIONS.map(({ title, description }) => (
                        <article key={title} className="grid grid-cols-2 gap-6 border-b last:border-b-0 border-gray-300 pt-20 pb-24">
                            <div>
                                <h3 className="text-3xl font-semibold tracking-tighter max-w-[20ch]">
                                    <span>{title}</span>
                                </h3>
                            </div>
                            <div>
                                <p className="text-base font-normal tracking-tighter max-w-[40ch]">
                                    {
                                        description
                                            .split('\n')
                                            .map((text, index) => (
                                                <span key={index}>{text}<br /></span>
                                            ))
                                    }
                                </p>
                            </div>
                        </article>
                    ))
                }
            </section>
        </div>
    )
}